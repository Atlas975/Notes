
# Python_language
created: 2022-06-27 07:16
#Programming 

---
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
> values()
> keys()
> items()
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

# Python Inheritance 
- Allows classes to be derived from other classes to add additional functionality, in python this is done by passing in the name of the class that's being inherited from 
```python
class Dog:
    def __init__(self,name,breed,age):
        self.name=name
        self.breed=breed
        self.age=age
		
    def calculate_human_age(self):
        return self.age*7
		
 class Poodle(Dog):
 	def (self,length):
		if(length<10):
			return "You have a long dog"
		else
			return "You have a short dog"
```
- Inherited methods can also be overwritten by calling a method of the same name
```python
class Dog:
    def __init__(self,name,breed,age):
        self.name=name
        self.breed=breed
        self.age=age
		
    def calculate_human_age(self):
        return self.age*7
		
 class Poodle(Dog):
 	def (self,length):
		if(length<10):
			return "You have a long dog"
		else
			return "You have a short dog"
			
	def calculate_human_age(self):
		return self.age*100
```
- Attributes can also be added on to the inherited class via the following
```python
class Dog:
    def __init__(self,name,breed,age):
        self.name=name
        self.breed=breed
        self.age=age
		
    def calculate_human_age(self):
        return self.age*7
		
 class Poodle(Dog):
 	def __init__(self,name,breed,age,length)
		Dog.__init__(self,name,breed,age)
		self.length=length
	
 	def (self):
		if(self.length<10):
			return "You have a long dog"
		else
			return "You have a short dog"
			
	def calculate_human_age(self):
		return self.age*100
```



# Python try accept blocks
- Pythons built in functions for error handling 
- Example of standard try-catch block:
```python
try:
	print(10+"10")
except IOError:
	print("IO error occured")
except:
	print("I dont know this IOError")
```
- An else statement only executes if the try block successfully runs
```python
try:
	print(10+"10")
except IOError:
	print("IO error occured")
except:
	print("I dont know this IOError")
else:
	new_function()
```
- Finally statements run regardless of if theres an error 
```python
def new_function():
	print("Function ran")
	
try:
	print(10+"10")
except IOError:
	print("IO error occured")
except:
	print("I dont know this IOError")
finally:
	new_function()
	
```


# Args
- Allows optional parameters to be passed in, these are treated as a list, to pass in an actual list, a star is needed before it
>![[Pasted image 20220325132144.png]]
all approaches valid
- Example with values other than args
>![[Pasted image 20220325132246.png]]

# Kwargs 
- Acts as a python dictionary of args inputs, also requiring a key to access variables
- Passing in an actual dictionary requires double stars:
>![[Pasted image 20220325132914.png]]
- Passing in regular inputs requires a key to be given too
>![[Pasted image 20220325133048.png]]

# Count letters
```python
message="It was a bright cold day in April"
count={}
for character in message.upper():
	count.setdefault(character,0)
	count[character]=count[character]+1
print(count)
```


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



# Regular expressions
- Example, prints first occurrence:
```python
import re
phoneNumReg=re.compile(r'\d\d\d-\d\d\d\-\d\d\d')
mo=phoneNumReg.search('Call me 415-555-321')
print(mo)
```
>print (mo.group())
## findall()
- Replace search(), returns all occurrences in a list
## group(anyNum)
>(r'(\d\d\d)-(\d\d\d\-\d\d\d'))
- Same regular expression, but passing a num will return groups. No num returns the whole things
- To insert literal brackets use \\(
>(r'\\((\d\d\d)\\)-(\d\d\d\-\d\d\d'))
# Pipe character
- Includes variant ends of same word:
>re.compile(r"Bat(man|mobile|plane)")
# Greedy matches
- Includes variant middle of same word:
>re.compile(r"Bat(wo)?man")
- wo can occur 1 or 0 times, so either batman or batwoman will satisfy
## 0 or more (optional)
- Same logic, but allows more than one occurrence by using star
>re.compile(r"Bat(wo)\*man")   
## 1 or more
>re.compile(r"Bat(wo)+man")
## Literal greedy match character
- Start and proceed with backslash
>re.compile(r"\\+\\\*\\")   
returns +\\\*
## Duplicate expressions
>re.compile(r'(Ha){3}')
- This can also be done in a range:
>re.compile(r'(Ha){3,5})
- By default this will look for as many dupes as possible, doing the following will try keep it to a minimum: 
>re.compile(r'(Ha){3,5}?)
- Minimum dupes:
>re.compile(r'(Ha){3,}')

# Python Broadcasting
- Describes how dumpy treats shapes of different dimensions, the smaller array is broadcast across the larger array so that they are compatible.
- This only works if the elements are compatible, which is only true if their dimensions are compatible when:
1. they are the same dimensions
2. Multiplication is being done with a scaler
>![[Pasted image 20220302154117.png]]
- Broadcasting use example, calculating the percentage each element in a vector contributes to the total of its column
>![[Pasted image 20220302154945.png]]
>![[Pasted image 20220302155004.png]]
reshape isnt necessary in this scenario but is a good method of ensuring compatibility
- Matrix decomposition:
>![[Pasted image 20220302155342.png]]


# With statement
- The width statement helps with resource management, ensuring resources aren't accidentally left open
```python
with open("example.txt", "w") as file:
    file.write("Hello World!")
```
- Prevents the need for calling a close() method