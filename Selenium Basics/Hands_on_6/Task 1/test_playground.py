from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_simple_form_submission(driver):
    driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "user-message"))
    )

    driver.find_element(By.ID, "user-message").send_keys("Hello Selenium")
    driver.find_element(By.ID, "showInput").click()

    output = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "message"))
    )

    assert output.text == "Hello Selenium"


def test_checkbox_demo(driver):
    driver.get("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    checkbox = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "input[type='checkbox']"))
    )

    checkbox.click()
    assert checkbox.is_selected()

    checkbox.click()
    assert not checkbox.is_selected()