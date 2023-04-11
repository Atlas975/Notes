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
# Merge sort
- Recursively splits the dataset in half until single cells are reached, these cells are then merged and sorted in the process, each sublist requires less iterations than the previous to sort, making merge sort stronger on large datasets

![[Pasted image 20220324121825.png|400|500]]
recursive version
![[Pasted image 20220321123512.png|400|500]]