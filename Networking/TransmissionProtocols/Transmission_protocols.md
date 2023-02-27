---
aliases: transmission protocol 
---
> [!important]- Metadata
> **Tags:** #OperatingSystems #Networking 
> **Located:** Networking
> **Created:** 19/02/2023 - 14:39
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
# Transmission protocols
![[Pasted image 20230219143920.png|500|500]]