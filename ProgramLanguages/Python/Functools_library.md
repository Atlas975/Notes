
# Functools_library
created: 2022-07-21 12:44
#Programming 

---

[[Python_language]]

- Python library for implementing [[Functional_programming]] 

## Reduce 
```python
import functools as ft

twodarray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

twodarray = ft.reduce(lambda x, y: x + y, twodarray)

print("Collapsed 2D array into 1D:", twodarray)
```