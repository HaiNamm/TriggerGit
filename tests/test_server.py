import pytest

@pytest.fixture
def test_dummy():
    assert 2 * 3 == 99
    assert 2 + 3 == 10
    assert 2 * 2 == 4
    assert 2 - 2 == 0

