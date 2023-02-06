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

> $\sigma =\text{select} \color{gold}\text{ (where clause)}$ 
> $\Pi=\text{project} \color{gold}\text{ (select clause, specifies columns)}$
> $-=\text{set difference} \color{gold}\text{ (left join where null)}$
> $\times=\text{cartesian product} \color{gold}\text{( from)}$ 
> $\cup=\text{union}$ 
