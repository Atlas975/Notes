> [!important]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwarePatterns/Structural
> **Created:** 31/01/2023 - 14:36
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
# Bridge pattern
- Splits a large class into separate hierarchies to allow for decoupled, independent development of various components 
