import pytest
from server import __version__, app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_dummy():
    assert 2 * 3 == 9
    assert 2 + 3 == 5
    assert 2 * 2 == 4
    assert 2 - 2 == 0

