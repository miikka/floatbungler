# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

import pytest
from floatbungler import patas
from hypothesis import example, given
from hypothesis import strategies as st
from numpy.testing import assert_equal

from test.vector_cases import TEST_VECTORS, assert_f64_bits_equal


@pytest.mark.parametrize(
    "vector", TEST_VECTORS, ids=[vector.name for vector in TEST_VECTORS]
)
def test_patas_vectors(vector):
    encoded = patas.encode(vector.values)
    assert encoded == vector.encoded_bytes("patas")
    result = patas.decode(encoded, len(vector.values))
    assert_f64_bits_equal(result, vector.values)


@example([1.0, 2.0, 3.0] * 200)
@example([42.0] * 1000)
@given(st.lists(st.floats(allow_nan=True), min_size=10))
def test_patas_encode_decode(data):
    data = list(data)
    result = patas.decode(patas.encode(data), len(data))
    assert_equal(result, data)


@given(st.lists(st.floats(allow_nan=True), min_size=200, max_size=1000))
def test_patas_encode_decode_large(data):
    result = patas.decode(patas.encode(data), len(data))
    assert_equal(result, data)
