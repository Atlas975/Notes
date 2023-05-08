---
aliases: [OOP]
---

> [!important|inIL]- Metadata
> **Tags:** #DesignTheory #Programming 
> **Located:** SoftwareEngineering
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks)
>    .array().map(p => p.path);
>let paths = new Set(links.
>    filter(p => !p.endsWith(".png"))
>);
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(
>    Array.from(paths))
>    .map(p => [
>        dv.fileLink(p),
>        dv.page(p).file.tags.join("")
>    ])
>    .slice(0, 20)
>);
> ```

___
# OOP principles
- A programming paradigm that is based on the concept of "objects", which can contain data and code to manipulate that data. OOP has the following benefits:


## Composition vs inheritance
- Inheritance is a procedure that involves an object inheriting the attributes and procedures of another class. These are referred to as the parent and child class respectively 
- Composition involves referencing one or more classes through the use of instance variables, allowing for code to be repurposed for other scenarios 
- The **this** keyword returns an object reference to the instance object the method is currently being executed in
![[Pasted image 20220221093807.png|300|300]]

## Abstract signature  

- Abstract classes and methods cannot be instantiated themselves but are instead built for inheritance. 
- Unlike interfaces, abstract classes can be used to share code between other classes, these still require that the child class implements all abstract methods themselves
- Abstract signatures are best used for objects that are closely related such as via inheritance 


```java 
abstract class GraphicObject {
    int x, y;
    ...
    void moveTo(int newX, int newY) {
        ...
    }
    abstract void draw();
    abstract void resize();
}

abstract class ChessPiece {
    abstract boolean canMoveTo(ChessSquare s);
} 
```


## Interface signature 

- Interfaces are completely abstract classes that can only group methods together with no bodies of their own. Including no constructor. This means all methods have the abstract signature built in.
- Interfaces are best used to label common functionality between unrelated classees to allow for [[SOLID_principles#Dependency inversion (DIP)|loose coupling]] of functionality

```java
// Interface
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method (does not have a body)
}

// Pig "implements" the Animal interface
class Pig implements Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
  public void sleep() {
    // The body of sleep() is provided here
    System.out.println("Zzz");
  }
}
```

## Immutability 

-   Refers to the state of an object whose value cannot be changed once it is created.
- Not common in OOP but vital in [[Functional_programming|functional programming]]

```java
public final class Person {
   private final String name;
   private final int age;
   
   public Person(String name, int age) {
      this.name = name;
      this.age = age;
   }
   
   public String getName() {
      return name;
   }
   
   public int getAge() {
      return age;
   }
}
```
## Encapsulation:

- The practice of hiding an object's data and methods from outside access, and only allowing access through designated methods.
-   This can protect the object's integrity and improve maintainability by limiting the effects of changes to the object's implementation.

```java
public class BankAccount {
    private double balance;
    
    public BankAccount(double balance) {
        this.balance = balance;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        balance += amount;
    }
    
    public void withdraw(double amount) { // hides implementation details from user
        if (balance >= amount) {
            balance -= amount;
        }
    }
}

BankAccount account = new BankAccount(1000.0);
account.deposit(500.0);
account.withdraw(200.0);
```

##  Polymorphism:
-   The ability of an object to take on many forms, such as through inheritance and interfaces.
-   Allows different objects to be treated as  the same type, as long as they share a common supertype.

```java
public abstract class Animal {
    public abstract void makeSound();
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

Animal animal1 = new Dog();
Animal animal2 = new Cat();
animal1.makeSound(); // calls the makeSound method of Dog, prints "Woof!"
animal2.makeSound(); // calls the makeSound method of Cat, prints "Meow!"
```