# Assertions
- Assertions are run regardless of if there's an error but if active they terminate the program immediatlly 
```
assert!(n != 0 && m != 0);
```

- To skip assertions when the program is compiled for the sake of speed use:
```
debug_assert!();
```
