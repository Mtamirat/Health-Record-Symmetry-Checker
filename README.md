# Health Record Symmetry Checker

## Overview

This project checks whether a patient health record stored as a singly linked list forms a symmetric pattern (palindrome).

Example:


90 → 120 → 140 → 120 → 90


Output:


true

---

## Approach

Steps used:

1. Find the middle using slow and fast pointers
2. Reverse the second half
3. Compare both halves
4. Return true or false

This keeps the solution memory efficient.

---

## Diagram

Flowchart located in:

<img width="1024" height="1536" alt="0c74b00c-3104-4267-aee6-42ba404b961e" src="https://github.com/user-attachments/assets/3b6244b5-b775-4264-9f71-e04e4bc13f3f" />


---

## Clarifying Questions

- Can the list be empty? → Yes
- Can values repeat? → Yes
- Should odd and even lists work? → Yes
- Is optimization important? → Yes, optimized for O(1) space

---

## Test Cases

### Normal Cases

90 → 120 → 140 → 120 → 90
Expected: true

80 → 100 → 120 → 110
Expected: false

70 → 85 → 85 → 70
Expected: true


### Edge Cases


[]
Expected: true



95
Expected: true



88 → 99
Expected: false


---

## Running the Project

Install dependencies:


npm install


Run tests:


npm test


Run program:


node healthRecord.js


---

## Complexity

Time Complexity:


O(n)


Space Complexity:


O(1)


---

## Project Structure


health-record-palindrome/
│
├── healthRecord.js
├── healthRecord.test.js
├── README.md
└── diagrams/
    └── flowchart.png
