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
- [[Database_systems|Database]] [[Relations|relation]] models are formed from a set of tuples, this is made up of two parts 
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
A_{i}=\text{schema attribute}\\
n=arity
\end{align*}$$
- The function **$dom()$** denotes retrieving the domain/type of an attribute for example, the following can be used to retrieve the type of the name attribute: **$dom(Student(name))=string$**
- The tuple relations [[Sets|set]] in a schema also has it's own notation:
$$\begin{align*}
r(S)=\{t_{i},t_{2},t_{3}\dots t_{m}\}\\
r=relation \\
t=tuple\\
m=\text{cardinality}
\end{align*}$$
- Each tuple also has it's set of values:
$$\begin{align*}
t_{i}=(v_{1},v_{2},v_{3}\dots v_{n})\\
v=values
\end{align*}$$

> ![[Pasted image 20230204184506.png|350|350]]
> this schema allows for array like notation eg $t_{2}[name]=v_{2}$
## Data relation types
- There are 3 different types of relations in the database: **one-to-one**. **one-to-many, and**. **many-to-many** each with  an [[UML_diagrams|associated visual representations]]

> ![[Pasted image 20220618083239.png|350|350]]


# ER-to-relational mapping
- In order to obey [[Database_constraints|database constraints]] in an [[Entity_relationship_model|ER]], each relationship mapping requires keys to be managed differently depending on relation types 
- This mapping also impacts how [[SQL_deletion|deletion]] of a tuple should be handled  
## 1:1 Relationships
- Relation S should include the primary key of T as a foreign key (or vise versa)
> ![[Pasted image 20230205131826.png|450|450]]

## 1:N Relationships
- Relation S should include the primary key of T as a foreign key
- Each entity in relation S is related to at most one relation from T (primary key constraint)
> ![[Pasted image 20230205132656.png|450|450]]


## M:N Relationships
- Keys from both relations should form a unique tuple, forming a new relation R
- R acts as the primary key for T and S
> ![[Pasted image 20230205132931.png|450|450]]
