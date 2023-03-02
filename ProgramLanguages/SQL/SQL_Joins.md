> [!important]- Metadata
> **Tags:** #Programming #Databases 
> **Located:** ProgramLanguages/SQL
> **Created:** 02/03/2023 - 15:23
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
# SQL Joins
- Multiple [[SQL_language|SQL]] join types exists, each select group can be taught of as a [[Sets|set]]

![[Pasted image 20220120173210.png|550|550]]