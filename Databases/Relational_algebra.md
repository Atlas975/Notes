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
> $\sigma =\text{select}$
> $\Pi=\text{project}$
> $-=\text{set difference}$
> $\times=\text{cartesian product}$
> $\cup=\text{union}$
> 