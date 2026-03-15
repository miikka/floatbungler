# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

import pytest
from floatbungler import gorilla
from hypothesis import given
from hypothesis import strategies as st
from numpy.testing import assert_equal

from test.vector_cases import TEST_VECTORS, assert_f64_bits_equal


@pytest.mark.parametrize(
    "vector", TEST_VECTORS, ids=[vector.name for vector in TEST_VECTORS]
)
def test_gorilla_vectors(vector):
    encoded = gorilla.encode(vector.values)
    assert encoded == vector.encoded_bytes("gorilla")
    result = gorilla.decode(encoded, len(vector.values))
    assert_f64_bits_equal(result, vector.values)


@given(st.lists(st.floats(allow_nan=True)))
def test_gorilla_encode_decode(data):
    result = gorilla.decode(gorilla.encode(data), len(data))
    assert_equal(result, data)


@given(st.lists(st.floats(allow_nan=True), min_size=200, max_size=1000))
def test_gorilla_encode_decode_large(data):
    result = gorilla.decode(gorilla.encode(data), len(data))
    assert_equal(result, data)
