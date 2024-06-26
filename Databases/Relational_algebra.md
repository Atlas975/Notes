---
aliases: relational algebra 
---

> [!important]- Metadata
> **Tags:** #Databases #DiscreteMath 
> **Located:** Databases
> **Created:** 06/02/2023 - 01:36
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
# Relational algebra

- A mathematical language used to manipulate and query [[Database_relations|relational databases]], 
- Uses algebraic operations that are equivalent to those in [[SQL_language|SQL]]  
- Takes 1+ relations as input and outputs a new [[Relations|relation]] 

> $\sigma =\text{select} \color{#EBCB8B}\text{ (where clause)}$ 
> $\Pi=\text{project} \color{#EBCB8B}\text{ (select clause, specifies columns)}$
> $-=\text{set difference} \color{#EBCB8B}\text{ (except join)}$
> $\times=\text{cartesian product} \color{#EBCB8B}\text{ (from clause)}$ 
> $\cup=\text{union} \color{#EBCB8B}\text{ (union join)}$
> $\cap=\text{intersection}\color{#EBCB8B}\text{ (inner join)}$
> $\text{/}=division \color{#EBCB8B}\text{ (left join on cross product)}$
> $\Join=\text{join} \color{#EBCB8B}\text{ (standard join)}$
> $\rho=\text{rename} \color{#EBCB8B} \text{ (as command)}$

## Select

![[Pasted image 20230206124001.png|500|500]]

## Project

![[Pasted image 20230206124240.png|500|500]]

## Union

![[Pasted image 20230206124432.png|500|500]]

## Intersection

![[Pasted image 20230206130033.png|500|500]]

## Set difference

![[Pasted image 20230206124622.png|500|500]]

## Cartesian product

![[Pasted image 20230206125522.png|500|500]]

## Join

### Equi-join
- Used to join tables based on matching values in a specified column.
-  The most commonly used type of join and is useful for finding records that exist in both tables.

![[Pasted image 20230210190214.png|400|400]]

### Theta join
-   Allows for joining tables based on a condition that is not based on equality alone.
-   Can be used to join tables based on complex conditions like ranges, inequalities, or pattern matching etc
### Natural join
-  Combines data from two tables based on columns that have the same name and data type.
-   It simplifies the join process by automatically matching columns with the same name and data type, and returning only one copy of each matching column

## Division

![[Pasted image 20230210191422.png|400|400]]

## Rename
- Relationship algebra expressions do not output a relation with a name, the rename operation provides an alias for relations that are created 
- Using the previous example, the created relation can be named "Ins_Phy" by the following 

![[Pasted image 20230206125910.png|600|600]]

- Renaming can also be done for individual columns 

![[Pasted image 20230210185312.png|400|400]]
