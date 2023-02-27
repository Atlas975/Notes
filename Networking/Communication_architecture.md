> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 16/02/2023 - 14:45
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
# Communication architecture
- Two core type of communication architecture: 


## Client server architecture 
![[Pasted image 20230216145332.png|500|500]]

## P2P architecture 
![[Pasted image 20230216145421.png|500|500]]