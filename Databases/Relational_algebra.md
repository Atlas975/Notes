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

> $\sigma =\text{select} \color{gold}\text{ (where clause)}$ 
> $\Pi=\text{project} \color{gold}\text{ (select clause, specifies columns)}$
> $-=\text{set difference} \color{gold}\text{ (except join)}$
> $\times=\text{cartesian product} \color{gold}\text{ (from clause)}$ 
> $\cup=\text{union} \color{gold}\text{ (union join)}$
> $\cap=\text{intersection}\color{gold}\text{ (inner join)}$
> $\text{/}=division \color{gold}\text{ (left join on cross product)}$
> $\Join=\text{join} \color{gold}\text{ (standard join)}$
> $\rho=\text{rename} \color{gold} \text{ (as command)}$

## Select

> ![[Pasted image 20230206124001.png|500|500]]

## Project

> ![[Pasted image 20230206124240.png|500|500]]

## Union

> ![[Pasted image 20230206124432.png|500|500]]

## Intersection

> ![[Pasted image 20230206130033.png|500|500]]

## Set difference

> ![[Pasted image 20230206124622.png|500|500]]

## Cartesian product

> ![[Pasted image 20230206125012.png|500|500]]
> ![[Pasted image 20230206125522.png|500|500]]

## Join

### Equi-join
- Joins where condition only has equalities  

> ![[Pasted image 20230210190214.png|400|400]]

### Natural join
- Equi-join on ALL common fields, only returns rows present in both tables 

## Division

> ![[Pasted image 20230210191422.png|400|400]]

## Rename
- Relationship algebra expressions do not output a relation with a name, the rename operation provides an alias for relations that are created 
- Using the previous example, the created relation can be named "Ins_Phy" by the following 

>![[Pasted image 20230206125910.png|600|600]]

- Renaming can also be done for individual columns 

> ![[Pasted image 20230210185312.png|400|400]]
