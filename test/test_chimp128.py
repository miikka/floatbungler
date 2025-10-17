from hypothesis import given, strategies as st

from floatbungler import chimp128


# TODO(miikka) Make NaNs work!
@given(st.lists(st.floats(allow_nan=False)))
def test_chimp128_encode_decode(data):
    assert chimp128.decode(chimp128.encode(data), len(data)) == data
