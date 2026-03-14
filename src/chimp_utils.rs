// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

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
    bin_count(x.leading_zeros() as u8)
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
