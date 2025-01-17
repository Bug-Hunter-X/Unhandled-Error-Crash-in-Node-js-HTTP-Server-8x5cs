# Unhandled Error Crash in Node.js HTTP Server

This repository demonstrates a common issue in Node.js where unhandled errors can cause the server to crash without providing sufficient information for debugging.  The `bug.js` file contains the problematic code, while `bugSolution.js` offers a robust solution that handles errors gracefully.

## Problem

The original code lacks error handling.  If an error occurs during request processing (e.g., a database connection failure), the server will crash without logging any details, making it hard to pinpoint the cause.

## Solution

The solution involves using `try...catch` blocks to handle potential errors and logging error details for debugging.  This ensures that the server remains operational even if an error occurs, and provides valuable information to troubleshoot the problem.

## How to reproduce:
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the server crash (no error logs are provided).
4. Run `node bugSolution.js`. Attempt to trigger the error (this is intentionally simulated for this example)
5. Observe the handled error and logged details.