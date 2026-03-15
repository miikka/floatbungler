# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

import pytest
from floatbungler import chimp128
from hypothesis import given
from hypothesis import strategies as st
from numpy.testing import assert_equal

from test.vector_cases import TEST_VECTORS, assert_f64_bits_equal


@pytest.mark.parametrize(
    "vector", TEST_VECTORS, ids=[vector.name for vector in TEST_VECTORS]
)
def test_chimp128_vectors(vector):
    encoded = chimp128.encode(vector.values)
    assert encoded == vector.encoded_bytes("chimp128")
    result = chimp128.decode(encoded, len(vector.values))
    assert_f64_bits_equal(result, vector.values)


@given(st.lists(st.floats(allow_nan=True)))
def test_chimp128_encode_decode(data):
    result = chimp128.decode(chimp128.encode(data), len(data))
    assert_equal(result, data)


@given(st.lists(st.floats(allow_nan=True), min_size=200, max_size=1000))
def test_chimp128_encode_decode_large(data):
    result = chimp128.decode(chimp128.encode(data), len(data))
    assert_equal(result, data)
