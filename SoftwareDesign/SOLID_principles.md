---
alias: SOLID
---

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
# SOLID principles
- A set of design principles useful for software [[Software_planning|planning]] and [[Software_architecture|architecture]] with the intention of making [[OOP_principles|OOP]] based code bases more maintainable, flexible and understandable
- These principles define how various functions and data structures should interact

![[Pasted image 20221030100141.png|500|500]]
- Exceptions on any low level components can potentially propagate up to main, changes towards the top of the tree force lower level components to recompile
- The SOLID principles consist of:
	- Single Responsibility Principle (SRP)
	- Open-Closed Principle (OCP)
	- Liskov Substitution Principle (LSP)
	- Interface Segregation Principle (ISP)
	- Dependency Inversion Principle (DIP)
- System implementation with all principles:

![[Pasted image 20230130182724.png|600|600]]

## Single responsibility (SRP)
- Component functionality should be loosely coupled,  class modification should ripple to as few external classes as possible
- All components should be independent and serve a very specific functionality, this also helps avoid **volatility** (components that potentially require frequent modification) 

![[Pasted image 20230128132715.png|350|350]]

## Open-Closed (OCP)
- Classes should be open for extension but closed for modification 
- This means that a component needs to be extensible without having to make changes to the underlying class, vital for [[OOP_principles|inheritance]]

![[Pasted image 20230128133139.png|350|350]]

## Liskov substitution (LSP)
- All derived / subclass of a parent class should be able to subsistiture for their parent class 
- In other word a subclass should be [[Sets|superset]] of its parent, including functions that take in the same input arguments 
- Function overriding should be limited as not to break this, which should be the case if component design obeys [[#Single responsibility (SRP)|SRP]]

![[Pasted image 20230128134510.png||t]]

## Interface segregation (ISP)
- Classes should not have unused functionality, especially if this functionality adds additional dependencies to this component
- This also ensures that changes to a component will require minimal amount recompilation to external components  

![[Pasted image 20230128135141.png|350|350]]

## Dependency inversion (DIP)
- Emphasises [[OOP_principles#Composition vs inheritance|composition]] to avoid tightly coupled code, high level modules should not depend on low level modules but should instead depend on the abstract functionality 
- An object should not take in volatile modules and concrete functions should not be overridden, this allows for a layer of abstraction and ensures class backwards compatibility 

![[Pasted image 20230128140444.png|550|550]]
