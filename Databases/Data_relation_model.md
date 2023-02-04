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
> the relation schema for this would be:
>  $$\text{People(personID: int, firstName: string, lastName: string)}$$

## Relation schema notation
- The schema can be taught of as having its own notation 
$$\begin{align*}
S(A_{1},A_{2},A_{3}\dots A_{n})\\
S=\text{schema name}\\
A_{i}=\text{schema attribute}
\end{align*}$$
- The function **$dom()$** denotes retrieving the domain/type of an attribute for example, the following can be used to retrieve the type of the name attribute: **$dom(Student(name))=string$**
- The tuple relations in a schema also has it's own notation:
$$\begin{align*}
r(S)=\{t_{i},t_{2},t_{3}\dots t_{m}\}\\\\


\end{align*}$$


## Data relation types
- There are 3 different types of relations in the database: **one-to-one**. **one-to-many, and**. **many-to-many** each with  an [[UML_diagrams|associated visual representations]]

> ![[Pasted image 20220618083239.png|350|350]]
