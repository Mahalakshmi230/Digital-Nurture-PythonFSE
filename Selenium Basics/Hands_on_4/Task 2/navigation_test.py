from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install())
)

driver.implicitly_wait(10)

driver.get("https://www.lambdatest.com/selenium-playground/")

driver.find_element(By.LINK_TEXT, "Simple Form Demo").click()

assert "simple-form-demo" in driver.current_url

driver.back()

driver.execute_script('window.open("https://www.google.com");')

print("Window Handles:")
print(driver.window_handles)

driver.switch_to.window(driver.window_handles[1])

print("Google Title:", driver.title)

driver.switch_to.window(driver.window_handles[0])

driver.save_screenshot("playground_screenshot.png")

print("Screenshot saved successfully.")

print("Current Window Size:")
print(driver.get_window_size())

driver.set_window_size(1280, 800)

"""
Using a consistent browser window size ensures that the UI behaves
the same way during every test execution. This improves the reliability
of responsive web application testing.
"""

print("Updated Window Size:")
print(driver.get_window_size())

driver.quit()