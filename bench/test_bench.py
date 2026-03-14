# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

import pytest

from floatbungler import chimp, chimp128, gorilla, patas

ALGOS = [
    ("gorilla", gorilla),
    ("chimp", chimp),
    ("chimp128", chimp128),
    ("patas", patas),
]


@pytest.mark.parametrize("algo_name,algo", ALGOS, ids=[name for name, _ in ALGOS])
def test_encode(benchmark, bench_data, algo_name, algo):
    pattern, size, data = bench_data

    result = benchmark(algo.encode, data)

    uncompressed_bytes = size * 8
    compressed_bytes = len(result)
    benchmark.extra_info["compressed_bytes"] = compressed_bytes
    benchmark.extra_info["compression_ratio"] = uncompressed_bytes / compressed_bytes


@pytest.mark.parametrize("algo_name,algo", ALGOS, ids=[name for name, _ in ALGOS])
def test_decode(benchmark, bench_data, algo_name, algo):
    pattern, size, data = bench_data

    encoded = algo.encode(data)
    benchmark(algo.decode, encoded, size)
