> [!important]- Metadata
> **Tags:** #DesignTheory #Databases 
> **Located:** SoftwareDesign
> **Created:** 17/01/2023 - 16:59
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Entity relationship model
- A [[UML_diagrams|graphical representation]] of [[Database_fundamentals|database]] logic 

> ![[Pasted image 20230117170111.png]]