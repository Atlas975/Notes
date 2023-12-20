> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 20/12/2023 - 22:49
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Time keeping
- Computers need to keep track of time