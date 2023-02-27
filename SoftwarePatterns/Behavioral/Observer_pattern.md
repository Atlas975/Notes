---
aliases: [observer]
---

> [!important]- Metadata
> **Tags:** #DesignPatterns
> **Located:** SoftwareDesign/DesignPatterns
> **Created:** 26/12/2022 - 09:23
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
# Observer pattern
- A behavioral [[Design_patterns#Design pattern categories|design pattern]] meant to notify multiple objects (**observers**) of a change to an object thats being observed (**publisher**)
- A subscription mechanism gives individual objects permission to be informed of an event 

![[Pasted image 20230130134658.png|600|600]]