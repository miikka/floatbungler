# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

import pytest
from floatbungler import chimp
from hypothesis import given
from hypothesis import strategies as st
from numpy.testing import assert_equal

from test.vector_cases import TEST_VECTORS, assert_f64_bits_equal


@pytest.mark.parametrize(
    "vector", TEST_VECTORS, ids=[vector.name for vector in TEST_VECTORS]
)
def test_chimp_vectors(vector):
    encoded = chimp.encode(vector.values)
    assert encoded == vector.encoded_bytes("chimp")
    result = chimp.decode(encoded, len(vector.values))
    assert_f64_bits_equal(result, vector.values)


@given(st.lists(st.floats(allow_nan=True)))
def test_chimp_encode_decode(data):
    result = chimp.decode(chimp.encode(data), len(data))
    assert_equal(result, data)
