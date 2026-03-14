// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

use crate::bit_utils::{bin_count_leading, bin_decode, bin_encode, count_trailing};
use crate::bits::{Bitread, Bitwrite};
use bytes::{Bytes, BytesMut};
use pyo3::prelude::*;

#[pyfunction]
pub fn encode(input: Vec<f64>) -> Vec<u8> {
    encode_plain(&input).into()
}

fn encode_plain(input: &[f64]) -> Bytes {
    let buf = BytesMut::new();

    if input.len() == 0 {
        return buf.into();
    }

    let mut stream = Bitwrite::new(buf);
    stream.put_f64(input[0]);

    let mut prev_bits = input[0].to_bits();
    let mut prev_leading = bin_count_leading(prev_bits);

    for curr in input[1..].iter() {
        let curr_bits = curr.to_bits();
        let xor = prev_bits ^ curr_bits;

        let trailing = count_trailing(xor);

        if trailing > 6 {
            stream.put_bit(0);

            if xor == 0 {
                // println!("control 00");
                stream.put_bit(0);
            } else {
                // println!("control 01");
                stream.put_bit(1);
                let leading = bin_count_leading(xor);
                let meaningful_count = 64 - trailing - leading;
                stream.put_u64_lowest_bits(bin_encode(leading) as u64, 3);
                stream.put_u64_lowest_bits(meaningful_count as u64, 6);
                stream.put_u64_lowest_bits(xor >> trailing, meaningful_count);

                prev_leading = leading;
            }
        } else {
            stream.put_bit(1);
            let leading = bin_count_leading(xor);
            if leading == prev_leading {
                // println!("control 10");
                // println!("leading = {:2} xor = {:064b}", leading, xor);
                stream.put_bit(0);
                stream.put_u64_lowest_bits(xor, 64 - leading);
            } else {
                // println!("control 11");
                // println!("leading = {:2} xor = {:064b}", leading, xor);
                stream.put_bit(1);
                stream.put_u64_lowest_bits(bin_encode(leading) as u64, 3);
                stream.put_u64_lowest_bits(xor, 64 - leading);
            }
            prev_leading = leading;
        }

        prev_bits = curr_bits;
    }

    stream.to_bytes()
}

#[pyfunction]
pub fn decode(input: Vec<u8>, count: usize) -> Vec<f64> {
    decode_plain(&input, count)
}

fn decode_plain(input: &[u8], count: usize) -> Vec<f64> {
    let mut result = vec![];

    if count == 0 {
        return result;
    }

    let mut stream = Bitread::new(input);

    let first = stream.read_f64();
    result.push(first);

    let mut prev = first;
    let mut prev_bits = first.to_bits();
    let mut prev_leading = bin_count_leading(prev_bits);

    for _ in 1..count {
        if stream.read_bit() == 0 {
            if stream.read_bit() == 0 {
                // println!("control 00");
                result.push(prev);
            } else {
                // println!("control 01");
                let leading = bin_decode(stream.read_u64_lowest_bits(3) as u8);
                let meaningful_count = stream.read_u64_lowest_bits(6);
                let meaningful = stream.read_u64_lowest_bits(meaningful_count as u8);
                let trailing = 64 - leading - meaningful_count as u8;

                let curr_bits = prev_bits ^ (meaningful << trailing);
                let curr = f64::from_bits(curr_bits);
                result.push(curr);

                prev_bits = curr_bits;
                prev_leading = leading as u8;
                prev = curr;
            }
        } else {
            if stream.read_bit() == 0 {
                // println!("control 10");
                let xor = stream.read_u64_lowest_bits(64 - prev_leading);

                // println!("leading = {:2} xor = {:064b}", prev_leading, xor);

                let curr_bits = prev_bits ^ xor;
                let curr = f64::from_bits(curr_bits);
                result.push(curr);

                prev_bits = curr_bits;
                prev = curr;
            } else {
                // println!("control 11");
                let leading = bin_decode(stream.read_u64_lowest_bits(3) as u8);
                let xor = stream.read_u64_lowest_bits(64 - leading);
                // println!("leading = {:2} xor = {:064b}", leading, xor);
                let curr_bits = prev_bits ^ xor;
                let curr = f64::from_bits(curr_bits);
                result.push(curr);

                prev_bits = curr_bits;
                prev = curr;
                prev_leading = leading;
            }
        }
    }

    result
}
