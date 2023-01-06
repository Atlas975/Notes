
# Numpy_library
created: 2022-06-23 08:15
#Programming 

---
[Numpy docs](https://numpy.org/doc/)
[[Numpy Handbook.pdf]]
## Numpy array functions
```python
import numpy as np
matrix=np.array(([1,2,3],[4,5,6]))
print(f"Standard matrix\n{matrix}")
matrix=np.array(([1,2,3],[4,5,6]),ndmin=5)
print(f"Minimum dimensions set\n {matrix}")
matrix=np.array([(1,2),(3,4),(5,6)],dtype=[('a','<i4'),('b','<i4')])
print(f"Matrices of more than one type \n{matrix['a']} , {matrix['b']} ")
```
