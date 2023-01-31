> [!important]- Metadata
> **Tags:** #DesignPatterns #Networking 
> **Located:** SoftwarePatterns/Structural
> **Created:** 30/01/2023 - 13:13
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
# Proxy pattern
- Adds a layer of abstraction from client to source, can act as a firewall / filter / cache and more 
- This [[Design_patterns|design pattern]] is vital in [[Network_basics|networking]], to speed up requests and provide security, the proxy acts as a substitute for another object whilst controlling access to that object

> ![[Pasted image 20230130132227.png|550|550]]

- Example of a proxy providing a cache for a video download service

> ![[Pasted image 20230130131852.png|500|500]]
