# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

from floatbungler import patas
from hypothesis import example, given
from hypothesis import strategies as st
from numpy.testing import assert_equal


@example([1.0, 2.0, 3.0] * 200)
@example([42.0] * 1000)
@given(st.lists(st.floats(allow_nan=True), min_size=10))
def test_patas_encode_decode(data):
    data = list(data)
    result = patas.decode(patas.encode(data), len(data))
    assert_equal(result, data)
