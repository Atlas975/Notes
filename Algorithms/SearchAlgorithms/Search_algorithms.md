---
aliases: search algorithm
---
> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** Algorithms/SearchAlgorithms
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Search algorithms
## Common search algorithm time Complexity 
[[Time_complexity]]
![[Pasted image 20220612171916.png|450|450]]
# Sentinel search
- Check if last element is the element being searched for, if not replace it with the element being searched for
- Reduces the number of operations compared to linear search by removing the need for loop condition


