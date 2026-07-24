from selenium.webdriver.common.by import By
from .base_page import BasePage


class CheckboxPage(BasePage):

    OPTIONS = (By.CSS_SELECTOR, "input.cb-element")

    def check_option(self, index):
        boxes = self.driver.find_elements(*self.OPTIONS)
        if not boxes[index].is_selected():
            boxes[index].click()

    def uncheck_option(self, index):
        boxes = self.driver.find_elements(*self.OPTIONS)
        if boxes[index].is_selected():
            boxes[index].click()

    def is_option_checked(self, index):
        boxes = self.driver.find_elements(*self.OPTIONS)
        return boxes[index].is_selected()