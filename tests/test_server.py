import pytest

@pytest.fixture
def test_dummy():
    assert 2 * 3 == 6
    assert 2 + 3 == 5
    assert 2 * 2 == 4
    assert 2 - 2 == 0
    assert 2 + 12 == 14
    assert 5 + 25 == 30
    assert 5 + 35 == 40

