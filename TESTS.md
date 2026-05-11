# Tests

## Automated Tests

### File: `tests/audit.test.ts`

This file contains automated tests for the audit engine in `lib/audit.ts`.

### What It Covers

1. Calculates default 30% savings when no specific rule matches.
2. Recommends Plus plan for ChatGPT Team with two or fewer seats.
3. Recommends Claude Pro as an alternative for ChatGPT.
4. Returns zero savings when monthly spend is zero.
5. Calculates annual savings as monthly savings multiplied by 12.

### How to Run

```bash
npm test