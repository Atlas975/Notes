# Try accept blocks
- Pythons built in functions for error handling 
- Example of standard try-catch block:
```
try:
	print(10+"10")
except IOError:
	print("IO error occured")
except:
	print("I dont know this IOError")
```
- An else statement only executes if the try block successfully runs
```
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
```
try:
	print(10+"10")
except IOError:
	print("IO error occured")
except:
	print("I dont know this IOError")
finally:
	new_function()
	
```