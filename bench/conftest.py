# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

import numpy as np
import pytest

SIZES = [100, 1_000, 10_000, 100_000]

PATTERNS = ["constant", "monotonic", "random", "sine", "walk"]


def generate_data(pattern: str, size: int) -> list[float]:
    rng = np.random.default_rng(seed=42)

    if pattern == "constant":
        return [42.0] * size
    elif pattern == "monotonic":
        return list(np.arange(size, dtype=np.float64))
    elif pattern == "random":
        return rng.standard_normal(size).tolist()
    elif pattern == "sine":
        noise = rng.standard_normal(size) * 0.01
        return (np.sin(2 * np.pi * np.arange(size) / 100) + noise).tolist()
    elif pattern == "walk":
        steps = rng.standard_normal(size) * 0.01
        return np.cumsum(steps).tolist()
    else:
        raise ValueError(f"Unknown pattern: {pattern}")


@pytest.fixture(params=SIZES, ids=[f"n={s}" for s in SIZES])
def size(request):
    return request.param


@pytest.fixture(params=PATTERNS)
def pattern(request):
    return request.param


@pytest.fixture
def bench_data(pattern, size):
    return (pattern, size, generate_data(pattern, size))
