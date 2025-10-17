from hypothesis import given, strategies as st
from numpy.testing import assert_equal

from floatbungler import chimp


@given(st.lists(st.floats(allow_nan=True)))
def test_chimp_encode_decode(data):
    result = chimp.decode(chimp.encode(data), len(data))
    assert_equal(result, data)
