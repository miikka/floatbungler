# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

from hypothesis import given, strategies as st
from numpy.testing import assert_equal

from floatbungler import chimp128


@given(st.lists(st.floats(allow_nan=True)))
def test_chimp128_encode_decode(data):
    result = chimp128.decode(chimp128.encode(data), len(data))
    assert_equal(result, data)
