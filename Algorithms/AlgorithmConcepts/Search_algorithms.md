> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/AlgorithmConcepts
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
# Search algorithms
## Common search algorithm time Complexity 
[[Time_complexity]]
![[Pasted image 20220612171916.png|450|450]]
# Sentinel search
- Check if last element is the element being searched for, if not replace it with the element being searched for
- Reduces the number of operations compared to linear search by removing the need for loop condition

## Complexity compared to linear search
![[Pasted image 20220217121917.png|450|450]]

# Binary search
![[Pasted image 20220217122641.png|450|450]]
![[Pasted image 20220217122747.png|450|450]]
