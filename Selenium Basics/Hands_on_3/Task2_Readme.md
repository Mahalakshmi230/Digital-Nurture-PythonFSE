# Task 2: Compare Automation Framework Types

## 21. Comparison of Automation Framework Types

### Linear Framework

**Description**

Linear Framework executes test cases sequentially without reusable components.

**Advantage**

- Easy to create and understand.

**Disadvantage**

- Difficult to maintain for large projects.

**Example**

Automating only the login functionality.

---

### Modular Framework

**Description**

Application is divided into independent modules, and reusable functions are created for each module.

**Advantage**

- High code reusability.

**Disadvantage**

- Initial framework setup requires more effort.

**Example**

Separate modules for Login, Course Management, Student Management, and Enrollment.

---

### Data-Driven Framework

**Description**

Test data is stored separately in files such as Excel, CSV, or JSON while the same test script executes multiple datasets.

**Advantage**

- Supports multiple test inputs using one script.

**Disadvantage**

- Test data management becomes complex.

**Example**

Testing course creation using hundreds of different course details.

---

### Keyword-Driven Framework

**Description**

Test actions are represented using keywords such as Login, Click, Enter Text, and Logout.

**Advantage**

- Non-technical testers can create tests.

**Disadvantage**

- Framework implementation is more complex.

**Example**

Business users create login test scenarios using predefined keywords.

---

### Hybrid Framework

**Description**

Hybrid Framework combines Modular, Data-Driven, and Keyword-Driven approaches to provide maximum flexibility.

**Advantage**

- Highly reusable, scalable, and maintainable.

**Disadvantage**

- Requires experienced team members to design and maintain.

**Example**

Automating the complete Course Management application with reusable Page Objects and multiple datasets.

---

## 22. Recommended Framework

### Recommendation

A **Hybrid Framework** combining:

- Modular Framework
- Data-Driven Framework
- Keyword-Driven Framework

### Justification

- Login steps can be reused across multiple test cases.
- Data-Driven testing supports 50 username/password combinations.
- Keyword-driven design allows non-technical team members to create tests.
- Modular structure improves maintainability and scalability.

---

## 23. Hybrid Framework Folder Structure

```text
CourseManagementAutomation/
│
├── config/
│   ├── config.properties
│
├── testdata/
│   ├── loginData.xlsx
│   ├── courseData.xlsx
│
├── pages/
│   ├── LoginPage.java
│   ├── CoursePage.java
│   ├── DashboardPage.java
│
├── utilities/
│   ├── DriverFactory.java
│   ├── ExcelUtils.java
│   ├── WaitUtils.java
│   ├── ScreenshotUtils.java
│
├── tests/
│   ├── LoginTest.java
│   ├── CourseTest.java
│   ├── SmokeTest.java
│
├── reports/
│
├── screenshots/
│
└── pom.xml
```

### Folder Description

| Folder | Purpose |
|---------|---------|
| config | Stores framework configuration files. |
| testdata | Contains Excel, CSV, or JSON test data. |
| pages | Implements Page Object Model classes. |
| utilities | Stores reusable helper classes. |
| tests | Contains Selenium test scripts. |
| reports | Stores execution reports. |
| screenshots | Stores screenshots captured during failures. |
| pom.xml | Maven project configuration and dependencies. |
