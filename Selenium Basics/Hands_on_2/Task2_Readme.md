# Task 2: Agile QA and Shift-Left Testing

## 13. Problems with Waterfall Testing

### Problem 1: Late Defect Detection

Defects are discovered only after development is complete, making them more expensive to fix.

---

### Problem 2: Requirement Misunderstandings

If business requirements are misunderstood, the entire feature may need to be redesigned.

---

### Problem 3: Delayed Product Delivery

Fixing defects late in the project delays testing, deployment, and release schedules.

---

## 14. QA Role in Agile Ceremonies

### Sprint Planning

- Review user stories.
- Define acceptance criteria.
- Estimate testing effort.
- Identify testing risks.

---

### Daily Standup

- Report testing progress.
- Discuss blockers.
- Coordinate with developers on defect fixes.

---

### Sprint Review

- Verify completed user stories.
- Demonstrate tested features.
- Validate acceptance criteria with stakeholders.

---

### Sprint Retrospective

- Discuss testing challenges.
- Suggest process improvements.
- Recommend automation opportunities.

---

## 15. Shift-Left Testing Practices

### a) Review Requirements for Testability

QA reviews requirements before development begins to identify ambiguities and missing details.

---

### b) Write Test Cases Before Coding (TDD/BDD)

Prepare test cases and scenarios before implementation to ensure clear expectations.

---

### c) Static Code Analysis

Use static analysis tools to detect coding issues without executing the application.

---

### d) API Contract Testing Before Integration

Validate API request and response formats against the API specification before integrating with other modules.

---

## 16. Acceptance Criteria (Given-When-Then)

### Scenario 1: Successful Course Creation

**Given**
The college administrator is logged in.

**When**
The administrator submits valid course details.

**Then**
The course is created successfully and a confirmation message is displayed.

---

### Scenario 2: Duplicate Course Code

**Given**
A course with the same course code already exists.

**When**
The administrator submits the duplicate course code.

**Then**
The system displays an error message indicating that the course code already exists.

---

### Scenario 3: Missing Required Fields

**Given**
The administrator opens the Create Course form.

**When**
Required fields such as Course Name or Course Code are left blank.

**Then**
The system displays validation messages and prevents course creation.
