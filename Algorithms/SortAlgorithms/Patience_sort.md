> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SortAlgorithms
> **Created:** 27/05/2023 - 15:34
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Patience sort
- A comparison-based sorting algorithm that is particularly efficient for sorting sequences with a large number of [[Dynamic_programming#Longest increasing subsequence|LIS]]
- Initially, an empty pile is created, and the first element of the sequence is placed on it. For each subsequent element, it is placed on the leftmost pile where it can be put, or a new pile is created.
