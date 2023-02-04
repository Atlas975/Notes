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
- [[Relations]] are formed from a set of tuples 

> ![[Pasted image 20211112223946.png|500|500]]

## Relation types
- There are 3 different types of relations in the database: **one-to-one**. **one-to-many, and**. **many-to-many** each with  and [[UML_diagrams|associated visual representations]] in [[Entity_relationship_model|entity relationship models]]

> ![[Pasted image 20220618083239.png]]
