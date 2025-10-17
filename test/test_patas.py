from hypothesis import given, strategies as st
from numpy.testing import assert_equal

from floatbungler import patas


@given(st.lists(st.floats(allow_nan=True)))
def test_patas_encode_decode(data):
    result = patas.decode(patas.encode(data), len(data))
    assert_equal(result, data)
