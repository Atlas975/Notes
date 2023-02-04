> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 04/02/2023 - 17:25
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Data relation model
- [[Database_fundamentals|Database]] [[Relations|relation]] models are formed from a set of tuples, this is made up of two parts 
	- **Relation instance**: a table with rows and columns consisting of a number of **Rows/tuples** (cardinality) and a number of **fields/attributes** (degree/arity)
	- **Relation schema**: highlights the relation name and type (domain) for each column 
> ![[Pasted image 20211112223946.png|450|450]]
> the relation schema for this would be $\text{People()}$

## Schema relationship model

## Data relation types
- There are 3 different types of relations in the database: **one-to-one**. **one-to-many, and**. **many-to-many** each with  an [[UML_diagrams|associated visual representations]]

> ![[Pasted image 20220618083239.png|350|350]]
