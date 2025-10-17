from hypothesis import given, strategies as st
from numpy.testing import assert_equal

from floatbungler import gorilla


@given(st.lists(st.floats(allow_nan=True)))
def test_gorilla_encode_decode(data):
    result = gorilla.decode(gorilla.encode(data), len(data))
    assert_equal(result, data)