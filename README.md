# AUTOMATED TEST DEVELOPER – TECHNICAL EXERCISE

## Summary and Documentation

### Page Tested:

"https://tvolearn.com/pages/grade-6-mathematics"

### Test Cases Covered:

"should be able to visit website"
"h1 header says 'Grade 6'"
"h2 header says 'Mathematics'"

### Test Approach

### Assumptions

this error is ignored:
Cannot read properties of undefined (reading 'style')

### Results

- working locally consistently using:

```.sh
npx cypress run --record --key <INSERT KEY HERE>
```

- some tests worked inconsistently in GitHub Actions
- tests in GitHub actions failed to find specific elements
- errors when attempted to run in parallel in GitHub Actions
