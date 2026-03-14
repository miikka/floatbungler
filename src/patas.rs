// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

use bytes::{Buf, BufMut, Bytes, BytesMut};
use pyo3::prelude::*;

#[pyfunction]
pub fn encode(input: Vec<f64>) -> Vec<u8> {
    encode_plain(&input).into()
}

fn encode_plain(input: &[f64]) -> Bytes {
    let mut buf = BytesMut::with_capacity(8 + 10 * input.len());

    if input.is_empty() {
        return buf.into();
    }

    buf.put_f64(input[0]);

    let mut ringbuf: [u64; 128] = [0; 128];
    let mut lookup: [u8; 16384] = [u8::MAX; 16384];

    let prev_bits = input[0].to_bits();
    ringbuf[0] = prev_bits;
    lookup[(prev_bits & 0x3FFF) as usize] = 0;

    let mut index: usize = 1;
    for &curr in &input[1..] {
        let curr_bits = curr.to_bits();
        let lookup_index = lookup[(curr_bits & 0x3FFF) as usize];

        let best_index = if lookup_index < u8::MAX {
            lookup_index
        } else {
            ringbuf
                .iter()
                .enumerate()
                .filter(|(i, _)| *i < index)
                .max_by_key(|(_, val)| (curr_bits ^ *val).trailing_zeros() as u8)
                .unwrap()
                .0 as u8
        };
        let best_bits = ringbuf[best_index as usize];

        let xor = curr_bits ^ best_bits;

        let (trailing, meaningful_bytes) = if xor == 0 {
            (0, 0)
        } else {
            let trailing = xor.trailing_zeros() as u8;
            let leading = xor.leading_zeros() as u8;
            let meaningful_bytes = (64 - trailing - leading).div_ceil(8);
            (trailing, meaningful_bytes - 1)
        };

        let index_mod_128: u8 = (index % 128) as u8;
        let ref_index = index_mod_128.wrapping_sub(best_index + 1) % 128;
        debug_assert!(
            ref_index < 128,
            "ref_index must be between 0 and 127, got {} (index={}, best_index={})",
            ref_index,
            index,
            best_index
        );

        let header: u16 = ((ref_index as u16) << 9)
            | ((meaningful_bytes as u16) << 6)
            | (trailing & 0b111111) as u16;
        buf.put_u16(header);

        if xor != 0 {
            let meaningful = xor >> trailing;
            let meaningful_len = (meaningful_bytes + 1) as usize;
            let meaningful_buf = meaningful.to_be_bytes();
            buf.extend_from_slice(&meaningful_buf[8 - meaningful_len..]);
        }

        ringbuf[index % 128] = curr_bits;
        lookup[(curr_bits & 0x3FFF) as usize] = (index % 128) as u8;
        index += 1;
    }

    buf.into()
}

#[pyfunction]
pub fn decode(input: &[u8], count: usize) -> Vec<f64> {
    let mut result: Vec<f64> = Vec::with_capacity(count);

    if count == 0 {
        return result;
    }

    let mut buf = Bytes::copy_from_slice(input);

    let first = buf.get_f64();
    result.push(first);

    let mut ringbuf: [u64; 128] = [0; 128];
    let first_bits = first.to_bits();
    ringbuf[0] = first_bits;

    for index in 1..count {
        let header = buf.get_u16();
        let ref_index = (header >> 9) as usize + 1;
        let best_index = index - ref_index;

        let meaningful_bytes = (header >> 6) & 0b111;
        let trailing = header & 0b111111;

        let xor = if trailing == 0 && meaningful_bytes == 0 {
            0
        } else {
            let mut meaningful: u64 = 0;
            for _ in 0..(meaningful_bytes + 1) {
                meaningful = meaningful << 8 | (buf.get_u8() as u64);
            }
            meaningful << trailing
        };

        let best_bits = ringbuf[best_index % 128];
        let curr_bits = best_bits ^ xor;
        let curr = f64::from_bits(curr_bits);

        ringbuf[index % 128] = curr_bits;
        result.push(curr);
    }

    result
}
