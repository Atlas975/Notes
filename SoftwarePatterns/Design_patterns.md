---
alias: design pattern
---

> [!important|inIL]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwareDesign/DesignPatterns
> **Created:** 26/12/2022 - 09:23
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Design patterns

- Software design patterns are reusable solutions to common problems in software development 
- Good design patterns embody best practices in software and are proven solutions to reoccurring problems that occur in SDE 
- Address situations that arise in variety of applications eg [[OOP_principles|object initialization]], simplifying complex interfaces or  [[Concurrency|providing controlled access to objects]]

![[Pasted image 20221213092417.png|500|500]]

## Design pattern elements
- **Pattern name**: handle used to describe design problem and a solution summary 
- **Problem**: describes context and when to apply the pattern 
- **Solution**: describes the elements that make up the design pattern as well as their relation to one another. Does not describe concrete solution
- **Consequences**: results and trade-offs of applying pattern
## Design pattern categories
- **Creational**: focuses on the creation of objects and classes,  abstracts the instantiation process
- **Structural:** focuses on composition and organisation of objects and classes 
- **Behavioural**: focuses on the communication and coordination of objects and classes

![[Pasted image 20230127125603.png|550|550]]
