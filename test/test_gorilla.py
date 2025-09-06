from hypothesis import given, strategies as st

from floatbungler import gorilla


# TODO(miikka) Make NaNs work!
@given(st.lists(st.floats(allow_nan=False)))
def test_gorilla_encode_decode(data):
    assert gorilla.decode(gorilla.encode(data), len(data)) == data