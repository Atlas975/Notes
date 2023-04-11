> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SortAlgorithms
> **Created:** 11/04/2023 - 13:20
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Quick sort
