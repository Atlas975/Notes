# Inheritance 
- Allows classes to be derived from other classes to add additional functionality, in python this is done by passing in the name of the class that's being inherited from 
```
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
```
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
```
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