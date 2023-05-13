---
aliases: SR latch
---
> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems/LogicGates
> **Created:** 13/05/2023 - 16:07
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Set reset latch

