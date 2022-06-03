# Useful method
>max()
>min()
>str() 
>int()

# List comprehension 

- Example all evens:
```python
arr=[i for i in range(100) if i % 2 == 0]
print(arr)
```
- Boolean example:
>![[Pasted image 20220211134837.png]]
- Dictionary comprehension
>![[Pasted image 20220211150722.png]]
append key/value in dictionary:  CountryCodeDict.update( {'Germany' : 49} )

# Simultaneous assignment
> a=1
> b=2
> a,b = a+b, a
- a will equal 3 and b will equal 1, removes the need for a temp variable when switching values.
# Global variables
- Variables on a local scope can be made global through the following
>Def spam:
global eggs
eggs = 32
- Makes all eggs variables = 32

# Try/Except
- Python exaple:
```python
number=input()
try:
	if int(number)>0:
		print("positive")
	else:
		print("Negative")
	except ValueError:
		print("That is not a number")
```

# Dictionaries methods
## values()
## keys()
## items()
- Assigning a default value for a dictionary item:
> MyDict.setdefault('color','white')

#### A list of dictionaries is also possible

# Advanced Strings
## Escape characters
>![[Pasted image 20211123084840.png|500|500]]
- To ignore these, use raw string
> r"This is a \\' raw string"

## Indexing
- Returns character at index location
>'Hello World!'[5] = ' '

#### Python compilation 
- Python is compiled in [[C_basics]]