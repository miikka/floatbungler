// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

// rustimport:pyo3

use crate::bit_utils::{count_leading, count_trailing};
use crate::bits::{Bitread, Bitwrite};
use bytes::{Bytes, BytesMut};

use pyo3::prelude::*;

pub fn encode_plain(input: &[f64]) -> Bytes {
    let buf = BytesMut::with_capacity(input.len() * 8);

    if input.len() == 0 {
        return buf.into();
    }

    let mut stream = Bitwrite::new(buf);

    stream.put_f64(input[0]);

    let mut prev_bits = input[0].to_bits();
    let mut prev_leading = 0;
    let mut prev_trailing = 0;

    for curr in input[1..].iter() {
        let curr_bits = curr.to_bits();
        let xor = prev_bits ^ curr_bits;
        if xor == 0 {
            stream.put_bit(0);
        } else {
            stream.put_bit(1);
            let leading = count_leading(xor);
            let trailing: u8 = count_trailing(xor);
            let meaningful = xor >> trailing;

            if leading >= prev_leading && trailing == prev_trailing {
                stream.put_bit(0);
                let meaningful_len = 64 - prev_leading - prev_trailing;
                stream.put_u64_lowest_bits(meaningful, meaningful_len);
            } else {
                stream.put_bit(1);

                stream.put_u64_lowest_bits(leading as u64, 5);

                let meaningful_len = 64 - leading - trailing;
                stream.put_u64_lowest_bits((meaningful_len - 1) as u64, 6);
                stream.put_u64_lowest_bits(meaningful, meaningful_len);

                prev_leading = leading;
                prev_trailing = trailing;
            }

            prev_bits = curr_bits;
        }
    }

    stream.to_bytes()
}

pub fn decode_plain(input: &[u8], count: usize) -> Vec<f64> {
    let mut result = vec![];

    if count == 0 {
        return result
    }

    let mut stream = Bitread::new(input);

    let mut prev = stream.read_f64();
    result.push(prev);

    let mut prev_bits = prev.to_bits();
    let mut prev_leading = 0;
    let mut prev_trailing = 0;

    for _ in 1..count {
        if stream.read_bit() == 0 {
            result.push(prev)
        } else if stream.read_bit() == 0 {
            let xor = stream.read_u64_lowest_bits(64 - prev_leading - prev_trailing);
            let curr_bits = prev_bits ^ (xor << prev_trailing);
            let curr = f64::from_bits(curr_bits);
            result.push(curr);
            prev = curr;
            prev_bits = curr_bits;
        } else {
            let leading = stream.read_u64_lowest_bits(5) as u8;
            let mut xor_length = stream.read_u64_lowest_bits(6) as u8;

            xor_length += 1;

            if xor_length == 0 {
                xor_length = 64;
            }

            let xor = stream.read_u64_lowest_bits(xor_length);

            let trailing = 64 - leading - xor_length;
            let curr_bits = prev_bits ^ (xor << trailing);
            let curr = f64::from_bits(curr_bits);
            result.push(curr);
            prev = curr;
            prev_bits = curr_bits;
            prev_leading = leading;
            prev_trailing = trailing;
        }
    }

    result
}

#[pyfunction]
pub fn encode(input: Vec<f64>) -> Vec<u8> {
    encode_plain(&input).into()
}

#[pyfunction]
pub fn decode(input: Vec<u8>, count: usize) -> Vec<f64> {
    decode_plain(&input, count).into()
}