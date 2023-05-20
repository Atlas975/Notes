---
aliases: "Prim's"
---

> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SearchAlgorithms
> **Created:** 20/05/2023 - 20:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Prims algorithm
-   Prim's algorithm is a greedy algorithm used to find the minimum spanning tree (**MST**) of a weighted **undirected** graph.
-   The algorithm starts with an arbitrary vertex and grows the MST by iteratively adding the edge with the minimum weight that connects a vertex in the MST to a vertex outside the MST.