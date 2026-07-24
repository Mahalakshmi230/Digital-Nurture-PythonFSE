import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options


@pytest.fixture(scope="function")
def driver():
    options = Options()
    driver = webdriver.Chrome(service=Service(), options=options)
    driver.maximize_window()

    yield driver

    driver.quit()