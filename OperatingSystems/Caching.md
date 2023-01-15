---
aliases: [cache]
---

> [!important]- Metadata
> **Tags:** #OperatingSystems #Algorithms #Databases
> **Located:** OperatingSystems
> **Created:** 02/01/2023 - 11:37
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
# Caching
- Processes typically do not requir


# Caching pitfalls 
## Coldstart problem
- AKA the "new item problem" ,  when requests are being made before enough information is gathered to pick an effective eviction scheme such as [[LRU]] or [[LFU]] 
- This can happen when the cache is empty or there's a sudden burst of new requests not already present in the cache 
- Since the cache has no knowledge of how these new items are going to be used, **random replacement** may be more optimal due to it's reduced overhead and the lack of a need for more complex algorithmic eviction schemes
- Other useful ways to combat this issue include:
    - Increased cache size, gives cache more time to determine optimal eviction scheme before items begin to be removed
    - Hybrid algorithm that uses, random replacement or another low overhead eviction method when cache is empty while switching to an algorithm like [[LRU]] / [[LFU]] when filled