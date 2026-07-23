# Task 2: Defect Lifecycle & Severity Classification

## 5. Defect Lifecycle

```
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed
```

### Additional States

### Rejected
The reported issue is not considered a defect or cannot be reproduced.

### Deferred
The defect is valid but postponed to a future release due to lower priority or project constraints.

---

## 6. Severity and Priority Classification

### a) POST /api/courses/ returns 500 Internal Server Error for all requests

- **Severity:** Critical
- **Priority:** P1

**Justification:**
The API cannot create courses, making the core functionality unusable.

---

### b) Course names longer than 150 characters are silently truncated

- **Severity:** Medium
- **Priority:** P2

**Justification:**
Data is lost, but the application remains functional.

---

### c) Swagger documentation contains a typo

- **Severity:** Low
- **Priority:** P4

**Justification:**
Only documentation is affected; application functionality is not impacted.

---

### d) Login occasionally returns 401 despite correct credentials

- **Severity:** High
- **Priority:** P1

**Justification:**
Intermittent login failures affect user access and indicate possible system instability.

---

## 7. Defect Report

**Defect ID:** DEF-001

**Title:**
POST `/api/courses/` returns 500 Internal Server Error for all requests.

**Environment:**
Development Environment

**Build Version:**
v1.0.0

**Severity:**
Critical

**Priority:**
P1

### Steps to Reproduce

1. Start the Course Management API.
2. Open Postman.
3. Send a POST request to `/api/courses/` using valid course details.
4. Click **Send**.

### Expected Result

Course should be created successfully with **HTTP 201 Created**.

### Actual Result

API returns **HTTP 500 Internal Server Error**.

### Attachments

Screenshot of 500 Internal Server Error.

---

## 8. Difference Between Severity and Priority

| Severity | Priority |
|----------|----------|
| Measures the impact of the defect on the application. | Measures how urgently the defect should be fixed. |

### Example

A spelling mistake on the CEO's dashboard.

- **Severity:** Low (does not affect functionality)
- **Priority:** High (must be fixed immediately because it is visible to senior management)

This example shows that a defect can have **Low Severity** but **High Priority**.
