from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

driver.get("https://www.lambdatest.com/selenium-playground/table-sort-search-demo")

wait = WebDriverWait(
    driver,
    timeout=10,
    poll_frequency=0.5,
    ignored_exceptions=[NoSuchElementException]
)

row = wait.until(
    EC.presence_of_element_located(
        (By.XPATH, "//table[@id='example']/tbody/tr")
    )
)

print("First Row:")
print(row.text)

input("Press Enter to close...")

driver.quit()