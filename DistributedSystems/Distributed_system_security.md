> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 25/10/2023 - 14:37
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distributed system security
- Involves the securing of a computer system to protect services and their data 
- Requires secure communication and authorisation 
- 