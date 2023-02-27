---
aliases: [UML]
---

> [!important|inIL]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign
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
# UML diagrams

- Unified modelling language (UML) is a standard for visualizing software design 

![[Pasted image 20221024163920.png|500|500]]

- UML diagram types include: [[OOP_principles]]
1. Conceptual: focus on domain topics
2. Specification: abstract view of a class, often paired with interfaces
3. Implementation: focus on implementation details 

![[Pasted image 20221024164038.png|550|550]]

## UML relationship types

![[Pasted image 20221024164549.png|350|350]]

- Association just means that the classes communicate 
- Aggregation implies a person **MAY** exist without a company 
- Composition implies a room **MUST** exist with a house
## Interfaces (implements) UML
- Also known as the [[OOP_principles#Interface signature|implements signature]]

![[Pasted image 20221025125150.png|500|500]]

## Relationship multiplicity
- The number of objects a class utilizes can be represented by relationship numbers

![[Pasted image 20221025125308.png|500|500]]

## Grammatical approach

![[Pasted image 20221025125539.png|450|450]]
![[Pasted image 20221025125552.png|550|550]]

# State machines
- Useful for representing [[Concurrency]] and [[Multiagent_systems]]
- State machines model dynamic behavior specifying the states through an objects lifetime
- Objects have both a behavior and state, state machines are meant to help understand this
- Bank account example:

![[Pasted image 20221124002741.png|500|500]]

- State concepts:
	- **State**: condition object stays in where it behaves in a fixed way 
	- **Transition**: move from one state to another 
	- **Trigger**: external stimulus through a signal or event 
	- **Guard**: a condition that must be true fro a trigger to cause transition 
	- **Event**: action occurred as result of transition 
- Transition syntax:
```
    trigger (list of input data) [guard] / effect
```
- Example class state change 

![[Pasted image 20221124145816.png|500]]

- Events can be signal driven (message sent through and action such as a a click), call driven (action performed such as registering) or time driven (time based state transition at a specific timestamp)
- Human 
## Composite state system
- State machines can be nested with individual subsystems

![[Pasted image 20221124150328.png|150|150]]

## Concurrent state system
- State machine may have two or more regions operating concurrently

![[Pasted image 20221124150436.png|250|250]]

## Activity diagram
- Used to model the flow of control 

![[Pasted image 20221124150920.png|450]]

## Sequence diagram
- Used to specify interactions in a system via protocols 

![[Pasted image 20221105003324.png|450]]
