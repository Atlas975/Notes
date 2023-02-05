---
alias: ER
---

> [!important]- Metadata
> **Tags:** #DesignTheory #Databases 
> **Located:** SoftwareDesign
> **Created:** 17/01/2023 - 16:59
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
# Entity relationship model
- A [[UML_diagrams|graphical representation]] of [[Database_systems|database]] logic 

> ![[Pasted image 20230117172112.png|450|450]]

- ERM's consist of the following distinct components:

> ![[Pasted image 20230204134303.png|550|550]]

## Entity
- Represented by **rectangles**
- Each entity has distinguishable properties

> ![[Pasted image 20230117172337.png|500|500]]

## Attributes
- Represented by **ovals**, every entity must have attributes 

> ![[Pasted image 20230117172615.png||s]]

### Primary key attributes
- Represented by an **underline**
- Compound keys may also exists

> ![[Pasted image 20230204133831.png]]

- Note that not every entity set has a primary key, these are known as **weak entity sets**
- These sets must be mapped with total participation

> ![[Pasted image 20230122151257.png|450|450]]

### Derived / weak-key attributes
- Represented by **dashed outline**

> ![[Pasted image 20230204133758.png]]

### Multi-valued attributes
- Represented by **double outline**

> ![[Pasted image 20230204133726.png||s]]

## Relation set
- Represented by a **diamond**
- A [[Relations|relation]] set relates two entity sets

> ![[Pasted image 20230117173444.png|500|500]]
> this is known as a binary relationship set with arity 2

- Relation sets can also have attributes 
- The [[Graphs|degree]] of a relationship set is the number of entity sets connected to it
- Relationships may also exists between a single entity set through with different roles

> ![[Pasted image 20230117174247.png|250|250]] degree 1 relation set

## Relationship cardinalities
- Data can follow any of the following [[Functions#Injective / Surjective mapping|mapping types]]:

> ![[Pasted image 20230122145936.png|350|350]]

 - **Chen's notation** is used to represent this in diagrams

> $$\begin{align*}
> 1:1 \text{ one to one}\\
> 1:N \text{ one to many}\\
> N:1 \text{ many to one}\\
> N:M \text{ many to many}
> \end{align*}$$

- Example: 

> ![[Pasted image 20230122150328.png|500|500]]

## Participation constraints
- Used in scenarios where the entire participation set may not be used 
- **Total participation** is indicated by a double line
- **Partial participation** is indicated by a single line

> ![[Pasted image 20230122150827.png|500|500]]

## ISA hierarchies
- Inheritance style data relations with subclasses 

> ![[Pasted image 20230122151630.png|350|350]]
