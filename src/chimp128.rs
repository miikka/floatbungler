// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

use bytes::{Bytes, BytesMut};
use pyo3::prelude::*;
use std::cell::RefCell;

use crate::{
    bits::{Bitread, Bitwrite},
    chimp_utils::{bin_count_leading, bin_leading_and_code},
};

#[derive(Clone, Copy)]
struct LookupEntry {
    epoch: u32,
    value: u32,
}

impl LookupEntry {
    const EMPTY: Self = Self {
        epoch: 0,
        value: u32::MAX,
    };
}

struct LookupState {
    entries: [LookupEntry; 16384],
    current_epoch: u32,
}

impl LookupState {
    fn new() -> Self {
        Self {
            entries: [LookupEntry::EMPTY; 16384],
            current_epoch: 1,
        }
    }

    fn begin_epoch(&mut self) -> u32 {
        self.current_epoch = self.current_epoch.wrapping_add(1);
        if self.current_epoch == 0 {
            self.current_epoch = 1;
            self.entries = [LookupEntry::EMPTY; 16384];
        }
        self.current_epoch
    }
}

thread_local! {
    static LOOKUP_STATE: RefCell<LookupState> = RefCell::new(LookupState::new());
}

#[pyfunction]
pub fn encode(input: Vec<f64>) -> Vec<u8> {
    encode_plain(&input).into()
}

fn encode_plain(input: &[f64]) -> Bytes {
    let buf = BytesMut::new();

    if input.is_empty() {
        return buf.into();
    }

    let mut stream = Bitwrite::new(buf);

    // We use the MAX values to signify that the slots has not been initialized
    let mut ringbuf: [u64; 128] = [u64::MAX; 128];

    let first = input[0];

    stream.put_f64(first);

    let mut prev_bits = first.to_bits();
    let mut prev_leading = prev_bits.leading_zeros() as u8;
    ringbuf[0] = prev_bits;

    LOOKUP_STATE.with(|lookup_state| {
        let mut lookup_state = lookup_state.borrow_mut();
        let epoch = lookup_state.begin_epoch();
        let entries = &mut lookup_state.entries;

        // 0x3FFF = 16383 = 16384 - 1 = 2^14 - 1;
        let first_key = (prev_bits & 0x3FFF) as usize;
        entries[first_key] = LookupEntry { epoch, value: 0 };

        let mut index = 1usize;
        for &curr in &input[1..] {
            let curr_bits = curr.to_bits();
            let key = (curr_bits & 0x3FFF) as usize;
            let entry = entries[key];

            let lookup_index = if entry.epoch == epoch {
                entry.value
            } else {
                u32::MAX
            };
            let best_index = if lookup_index != u32::MAX && index - lookup_index as usize <= 128 {
                lookup_index as usize & 127
            } else {
                (index - 1) & 127
            };
            let best_bits = ringbuf[best_index];
            let xor = curr_bits ^ best_bits;
            let trailing = xor.trailing_zeros() as u8;

            // log2(128) + log2(64) = 13
            if trailing > 13 {
                stream.put_bit(0);
                stream.put_u64_lowest_bits((index - best_index) as u64, 7);

                if xor == 0 {
                    stream.put_bit(0);
                } else {
                    stream.put_bit(1);
                    let (leading, leading_code) = bin_leading_and_code(xor);
                    stream.put_u64_lowest_bits(leading_code as u64, 3);
                    let meaningful_count = 64 - leading - trailing;
                    stream.put_u64_lowest_bits(meaningful_count as u64, 6);
                    stream.put_u64_lowest_bits(xor >> trailing, meaningful_count);
                    prev_leading = leading;
                }
            } else {
                stream.put_bit(1);
                let xor = curr_bits ^ prev_bits;
                let (leading, leading_code) = bin_leading_and_code(xor);
                if prev_leading == leading {
                    stream.put_bit(0);
                } else {
                    stream.put_bit(1);
                    stream.put_u64_lowest_bits(leading_code as u64, 3);
                }
                stream.put_u64_lowest_bits(xor, 64 - leading);
                prev_leading = leading;
            }

            ringbuf[index & 127] = curr_bits;
            entries[key] = LookupEntry {
                epoch,
                value: index as u32,
            };
            prev_bits = curr_bits;
            index += 1;
        }
    });

    stream.into_bytes()
}

#[pyfunction]
pub fn decode(input: &[u8], count: usize) -> Vec<f64> {
    if count == 0 {
        return Vec::new();
    }

    let mut result = Vec::with_capacity(count);

    let mut stream = Bitread::new(input);
    let mut ringbuf: [u64; 128] = [u64::MAX; 128];

    let first = stream.read_f64();
    let first_bits = first.to_bits();
    result.push(first);
    ringbuf[0] = first_bits;

    let mut prev_bits = first_bits;
    let mut prev_leading = bin_count_leading(first_bits);

    for index in 1..count {
        if stream.read_bit() == 0 {
            let best_index = stream.read_u64_lowest_bits(7);
            let rb_index = index.wrapping_sub(best_index as usize) & 127;
            let best_bits = ringbuf[rb_index];
            assert!(
                best_bits != u64::MAX,
                "best bits uninitialized, best_index = {}",
                best_index
            );

            let curr_bits = if stream.read_bit() == 0 {
                best_bits
            } else {
                let leading_code = stream.read_u64_lowest_bits(3) as u8;
                let leading = [0, 8, 12, 16, 18, 20, 22, 24][leading_code as usize];
                let meaningful_count = stream.read_u64_lowest_bits(6);
                let meaningful = stream.read_u64_lowest_bits(meaningful_count as u8);
                let trailing = 64 - leading - meaningful_count as u8;
                prev_leading = leading;
                best_bits ^ (meaningful << trailing)
            };
            let curr = f64::from_bits(curr_bits);
            result.push(curr);

            prev_bits = curr_bits;
        } else {
            let xor = if stream.read_bit() == 0 {
                stream.read_u64_lowest_bits(64 - prev_leading)
            } else {
                let leading_code = stream.read_u64_lowest_bits(3) as u8;
                let leading = [0, 8, 12, 16, 18, 20, 22, 24][leading_code as usize];
                prev_leading = leading;
                stream.read_u64_lowest_bits(64 - leading)
            };
            let curr_bits = prev_bits ^ xor;
            let curr = f64::from_bits(curr_bits);
            result.push(curr);
            prev_bits = curr_bits;
        }

        ringbuf[index & 127] = prev_bits;
    }

    result
}
