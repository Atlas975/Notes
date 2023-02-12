
# Python_OOP
created: 2022-10-31 13:53
#Programming [[Python_language]] [[OOP_principles]]

---
# Abstract base class (ABC)

```python
from datetime import date
  
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
  
    # a class method to create a person object by birth year.
    @classmethod
    def fromBirthYear(cls, name, year):
        return cls(name, date.today().year - year)
  
    # a static method to check if a person is adult or not.
    @staticmethod
    def isAdult(age):
        return age > 18
  
person1 = Person('mayank', 21)
person2 = Person.fromBirthYear('mayank', 1996)
  
print(person1.age)
print(person2.age)
  
# print the result
print(Person.isAdult(22))
```

- Python does not have formal interfaces, but abstract classes can be implemented with the @abstractclass decorator, this is enforced by the interpreter  

```python
from abc import ABC, abstractmethod

class AccountingSystem(ABC):
    @abstractmethod
    def create_purchase_invoice(self, purchase): pass

    @abstractmethod
    def create_sale_invoice(self, sale): pass

class GizmoAccountingSystem(AccountingSystem):
    def create_purchase_invoice(self, purchase):
        print(purchase + 1)
    def create_sale_invoice(self, sale):
        print(sale + 1)
```
