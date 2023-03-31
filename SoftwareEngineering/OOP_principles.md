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
# Composition vs inheritance
![[Pasted image 20220221093807.png|300|300]]

- Inheritance is a procedure that involves an object inheriting the attributes and procedures of another class. These are referred to as the parent and child class respectively 
- Composition involves referencing one or more classes through the use of instance variables, allowing for code to be repurposed for other scenarios 
- The **this** keyword returns an object reference to the instance object the method is currently being executed in

# Encapsulation
![[Pasted image 20220525212148.png|350|350]]
- In OOP, this involves grouping data and its operators in a single unit making programming much more secure.
- Good encapsulation completely hides how data is stored from the users, giving users only an abstract view of how it works.
- Note that like arrays, objects are pass by reference instead of pass by value like primitive types [[Computer_memory]]

# Functions 
- Usage benefits include:
    1. Re-usability
    2. Modular design, making code easy to maintain
    3. Improved readability 

# Abstract signature  

- Abstract classes and methods cannot be instantiated themselves but are instead built for inheritance. 
- Unlike interfaces, abstract classes can be used to share code between other classes, these still require that the child class implements all abstract methods themselves
- Abstract signatures are best used for objects that are closely related such as via inheritance  

```ad-example

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


# Interface signature 
- Interfaces are completely abstract classes that can only group methods together with no bodies of their own. Including no constructor. This means all methods have the abstract signature built in.
- Interfaces are best used to label common functionality between unrelated classes
```ad-example 
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

# Class Polymorphism
- Sub-classes contain all methods an variables of their parents 
- This gives full backwards-compatibility of a subclass with its code from a super-class 
- This allows casting a subclass back into its parent
```ad-example
```java
ChessPiece c;
Pawn p, p2;
p = new Pawn();
c = p;
p2 = (Pawn) c;
```
- Casting between subclasses of the same parent ie pawn -> queen is not possible