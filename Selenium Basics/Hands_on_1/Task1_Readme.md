# Task 1: QA Concepts, Functional Testing & Defect Lifecycle

## 1. Testing Types with Examples

### Unit Testing
**Description:** Tests a single function independently.

**Example Test Case:**
- Function: `validate_course_data()`
- Input:
  - Course Name: "Python Programming"
  - Course Code: "CS101"
  - Credits: 4
- Expected Result:
  - Validation succeeds and returns true.

**Classification:** Functional Testing

---

### Integration Testing
**Description:** Tests interaction between API endpoint and database.

**Example Test Case:**
- Endpoint: `POST /api/courses/`
- Action:
  - Send a valid course creation request.
- Expected Result:
  - HTTP Status **201 Created**
  - Course is successfully stored in the database.

**Classification:** Functional Testing

---

### System Testing
**Description:** Tests the complete application workflow.

**Example Test Case:**
1. Send POST request to create a course.
2. Retrieve the course using GET endpoint.
3. Verify course details.
4. Delete the course.
5. Verify deletion.

**Expected Result:**
Complete workflow executes successfully.

**Classification:** Functional Testing

---

### User Acceptance Testing (UAT)

**Description:** Tests from the college administrator's perspective.

**Example Test Case:**
- Login as administrator.
- Create a new course.
- View the course list.
- Update course details.
- Delete the course.

**Expected Result:**
Administrator performs all operations successfully.

**Classification:** Functional Testing

---

## 2. Functional vs Non-Functional Testing

| Testing Type | Description |
|--------------|-------------|
| Functional Testing | Verifies whether the application performs the required functions correctly. |
| Non-Functional Testing | Verifies performance, security, reliability, scalability, and usability. |

### Non-Functional Test Example

**Performance Testing**

- Send **500 simultaneous POST requests** to `/api/courses/`.
- Expected Result:
  - Response time less than **2 seconds**
  - No server crash
  - API remains available

---

## 3. Black-Box Testing vs White-Box Testing

| Black-Box Testing | White-Box Testing |
|-------------------|------------------|
| No knowledge of source code is required. | Requires knowledge of source code and internal logic. |
| Focuses on input and output. | Focuses on code paths and logic. |
| Usually performed by QA Testers. | Usually performed by Developers. |

**QA Tester:** Black-Box Testing

**Developer:** White-Box Testing

---

## 4. Formal Test Cases for `POST /api/courses/`

| Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Pass/Fail |
|--------------|-------------|---------------|------------|-----------------|---------------|-----------|
| TC001 | Create course using valid data | API is running | Send POST request with valid course details | HTTP 201 Created and course saved successfully | | |
| TC002 | Create course without course name | API is running | Send POST request with missing course name | HTTP 400 Bad Request with validation message | | |
| TC003 | Create duplicate course code | Existing course code available | Send POST request with duplicate course code | HTTP 409 Conflict or duplicate validation error | | |
