# Task 1: Automation Decision and Test Case Selection

## 17. Criteria for Deciding Whether a Test Case Should Be Automated

### 1. Repetitive Execution
Tests that are executed frequently should be automated.

**Application:**
The `POST /api/courses/` endpoint is tested after every code change, making it a good automation candidate.

---

### 2. Regression Testing
Regression tests ensure existing functionality continues to work after updates.

**Application:**
The API endpoint should be automated because it is part of the core functionality and must be verified after every release.

---

### 3. Stable Functionality
Automation works best for features that do not change frequently.

**Application:**
The course creation endpoint has stable functionality, making it suitable for automation.

---

### 4. Data-Driven Testing
Tests requiring multiple input combinations are ideal for automation.

**Application:**
The endpoint can be tested with different course names, codes, credits, and departments automatically.

---

### 5. High Business Impact
Critical business functionality should always be automated.

**Application:**
Creating courses is a primary feature of the Course Management API, so automation helps prevent critical failures.

---

## 18. Automate or Manual

| Test Case | Decision | Justification |
|-----------|----------|---------------|
| Regression test for all CRUD endpoints | Automate | Executed frequently after every code change. |
| Exploratory testing of a new search feature | Manual | Requires human observation and creativity. |
| Performance test with 100 concurrent users | Automate | Load testing tools execute this efficiently. |
| UI test for the login form | Automate | Stable UI functionality tested repeatedly. |
| Verify Swagger documentation | Manual | Requires human review for correctness and readability. |
| Smoke test after deployment | Automate | Quick validation performed after every deployment. |

---

## 19. Test Automation ROI

### Definition

Test Automation ROI (Return on Investment) measures whether the time and cost spent creating automated tests are recovered through reduced manual testing effort.

### Calculation

- Automation Development Time = **4 hours**
- Manual Execution Time = **30 minutes (0.5 hour)**

Break-even point:

```
4 ÷ 0.5 = 8 runs
```

After the **10th run**, maintenance overhead is:

```
20% of 4 hours = 0.8 hours
```

Maintenance per run:

```
0.8 ÷ 10 = 0.08 hour
```

Even with maintenance, automation provides significant time savings after the break-even point.

**Automation pays for itself after approximately 8 executions.**

---

## 20. Flaky Tests

### Definition

A flaky test is a test that sometimes passes and sometimes fails without any changes to the application.

### Example

A Selenium test clicks the Login button before the page finishes loading, causing intermittent failures.

### Strategies to Prevent Flaky Tests

1. Use Explicit Waits instead of fixed delays.
2. Use reliable element locators such as ID or Name.
3. Keep the test environment stable and independent of external systems.
