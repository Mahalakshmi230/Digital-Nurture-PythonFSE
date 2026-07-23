# Task 1: V-Model Mapping

## 9. V-Model Diagram

```text
                 SDLC (Development)

              Requirements
                    |
                    |
             System Design
                    |
                    |
          Architecture Design
                    |
                    |
             Module Design
                    |
                    |
                 Coding
                    |
         -----------------------
                    |
               Unit Testing
                    |
          Integration Testing
                    |
             System Testing
                    |
          Acceptance Testing

             TDLC (Testing)
```

### SDLC ↔ TDLC Mapping

| SDLC Phase | Corresponding TDLC Phase |
|------------|--------------------------|
| Requirements | Acceptance Testing |
| System Design | System Testing |
| Architecture Design | Integration Testing |
| Module Design | Unit Testing |
| Coding | Implementation |

---

## 10. Test Artifacts Produced During Development

| Development Phase | Testing Phase | Test Artifact Produced |
|-------------------|--------------|------------------------|
| Requirements | Acceptance Testing | Acceptance Test Plan, Acceptance Test Cases |
| System Design | System Testing | System Test Plan, System Test Cases |
| Architecture Design | Integration Testing | Integration Test Plan, Integration Test Cases |
| Module Design | Unit Testing | Unit Test Cases, Unit Test Plan |
| Coding | Execution | Source Code and Unit Test Execution |

---

## 11. Entry and Exit Criteria

### Unit Testing

**Entry Criteria**
- Module is completely coded.
- Unit test cases are prepared.
- Development environment is ready.

**Exit Criteria**
- All unit test cases executed.
- No critical defects remain.
- Unit testing report completed.

---

### Integration Testing

**Entry Criteria**
- Unit testing completed successfully.
- Modules integrated.
- Integration test cases prepared.

**Exit Criteria**
- All integration test cases executed.
- Interfaces work correctly.
- No critical integration defects remain.

---

### System Testing

**Entry Criteria**
- Integration testing completed.
- Complete application deployed.
- System test cases prepared.

**Exit Criteria**
- Functional requirements verified.
- All planned system test cases executed.
- No Critical or High severity defects remain.

---

### Acceptance Testing

**Entry Criteria**
- System testing completed successfully.
- Application is stable.
- Acceptance test cases approved.

**Exit Criteria**
- Customer accepts the application.
- Business requirements satisfied.
- Product approved for release.

---

## 12. Early QA Engagement Points

### 1. Requirements Review

- Review requirements for clarity and completeness.
- Identify missing or ambiguous requirements.
- Suggest measurable acceptance criteria.

### 2. Design Review

- Review API design and database schema.
- Verify testability of endpoints.
- Identify potential risks before development begins.

These early QA activities help prevent defects instead of finding them after implementation.
