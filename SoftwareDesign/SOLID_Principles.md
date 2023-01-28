> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign
> **Created:** 28/01/2023 - 11:56
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# SOLID Principles
- A set of design principles useful for software [[Software_planning|planning]] and [[Software_architecture|architecture]] with the intention of making [[OOP_principles|OOP]] based code bases more maintainable, flexible and understandable
- These principles define how various functions and data structures should interact

> ![[Pasted image 20221030100141.png|500|500]]
> Exceptions on any low level components can potentially propagate up to main, changes towards the top of the tree force lower level components to recompile

- The SOLID principles consist of:
	- Single Responsibility Principle (SRP)
	- Open-Closed Principle (OCP)
	- Liskov Substitution Principle (LSP)
	- Interface Segregation Principle (ISP)
	- Dependency Inversion Principle (DIP)

## Single responsibility (SRP)
- Focuses on loose coupling of functionality,  component modification should ripple to as few other components as possible
- Components should be independent and serve a very specific functionality.

> ![[Pasted image 20221030104521.png|250]]
example of bad coupling, all actors require different behaviour from the same component 
> ![[Pasted image 20221030104724.png|600]]
in general a solution will involve decoupling specific methods 

## Open-Closed (OCP)
- Classes should be open for extension but closed for modification 
- An example of an extensible calculator 

> ![[Pasted image 20221030105030.png|600]]

## Liskov substitution (LSP)
- Objects of a superclass should be replaceable with objects of its subclass without breakage 

> ![[Pasted image 20221030105539.png]]
a square can be a rectangle but not vise versa 

## Interface segregation (ISP)
- An actor should not depend on unused methods 

> ![[Pasted image 20221030105738.png|400]]
changes for one client should not force all clients to recompile 
solution:
> ![[Pasted image 20221030105903.png|400]]

## Dependency inversion (DIP)
- Based on creating reusable object-oriented software 
- Favors composition over inheritance 
- As a rule of thumb dont inherit volatile (frequently changing) classes 
- Dont override concrete classes or mentioning anything concrete 

> ![[Pasted image 20221030110619.png|500]]
solution:
> ![[Pasted image 20221030110731.png|500|600]]
