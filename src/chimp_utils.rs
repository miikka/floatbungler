// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

fn bin_count(count: u8) -> u8 {
    match count {
        0..=7 => 0,
        8..=11 => 8,
        12..=15 => 12,
        16..=17 => 16,
        18..=19 => 18,
        20..=21 => 20,
        22..=23 => 22,
        _ => 24,
    }
}

pub(crate) fn bin_count_leading(x: u64) -> u8 {
    bin_count(x.leading_zeros() as u8)
}

pub(crate) fn bin_encode(bin_count: u8) -> u8 {
    match bin_count {
        0 => 0,
        8 => 1,
        12 => 2,
        16 => 3,
        18 => 4,
        20 => 5,
        22 => 6,
        24 => 7,
        _ => unreachable!("invalid bin_count: {bin_count}"),
    }
}

pub(crate) fn bin_decode(bin_index: u8) -> u8 {
    match bin_index {
        0 => 0,
        1 => 8,
        2 => 12,
        3 => 16,
        4 => 18,
        5 => 20,
        6 => 22,
        7 => 24,
        _ => unreachable!("invalid bin_index: {bin_index}"),
    }
}

#[inline]
pub(crate) fn bin_leading_and_code(x: u64) -> (u8, u8) {
    match x.leading_zeros() as u8 {
        0..=7 => (0, 0),
        8..=11 => (8, 1),
        12..=15 => (12, 2),
        16..=17 => (16, 3),
        18..=19 => (18, 4),
        20..=21 => (20, 5),
        22..=23 => (22, 6),
        _ => (24, 7),
    }
}
