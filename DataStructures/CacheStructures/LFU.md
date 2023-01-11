> [!important]- Metadata
> **Tags:** #ADTs #Algorithms 
> **Located:** DataStructures/CacheStructures
> **Created:** 02/01/2023 - 08:24
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
# LFU
- [[Caching|Cache]] eviction algorithm based on the **least frequently used** principle
- Ideal when item access is repetitive
- Not ideal when 