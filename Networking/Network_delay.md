> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 10/02/2023 - 17:01
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
# Network delay
- 4 types of [[Network_architecture|network]] delay exist 
    • Processing Delay
    • Queuing Delay
    • Transmission Delay
    • Propagation Delay

