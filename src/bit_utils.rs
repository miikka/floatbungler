// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

/// Counts the trailing zeros in the binary representation of the given integer.
pub(crate) fn count_trailing(x: u64) -> u8 {
    if x == 0 {
        return 64;
    }

    let mut x = x;
    let mut count = 0;

    while x > 0 {
        if x & 1 == 1 {
            break;
        }

        count += 1;
        x >>= 1;
    }

    count
}

fn bin_count(count: u8) -> u8 {
    let bins = [0, 8, 12, 16, 18, 20, 22, 24];
    let mut prev = bins[0];

    for &bin in bins[1..].iter() {
        if count < bin {
            return prev;
        }
        prev = bin;
    }

    24
}

pub(crate) fn bin_count_leading(x: u64) -> u8 {
    bin_count(count_leading(x))
}

pub(crate) fn bin_encode(bin_count: u8) -> u8 {
    [0, 8, 12, 16, 18, 20, 22, 24]
        .iter()
        .position(|&r| r == bin_count)
        .unwrap() as u8
}

pub(crate) fn bin_decode(bin_index: u8) -> u8 {
    [0, 8, 12, 16, 18, 20, 22, 24][bin_index as usize]
}

/// Counst the leading zeros in the binary representation of the given integer.
pub(crate) fn count_leading(x: u64) -> u8 {
    if x == 0 {
        return 64;
    }

    let mut count = 0;
    let mut mask = 1 << 63;
    loop {
        if (x & mask) == mask {
            break;
        }
        mask >>= 1;
        count += 1;
    }

    count
}

