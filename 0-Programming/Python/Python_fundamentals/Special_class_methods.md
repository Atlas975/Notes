# Special class methods
- Special class methods allows a class to be compatible with some of pythons built in functions 

## __str__ 
- Returns the string representation of an object eg used when printing

```
def __str__
	return "Hello this is a class"
```

## __len__
- Only returns an integer eg used with the len() function 
```
def __len__
	return len(self.array)
```