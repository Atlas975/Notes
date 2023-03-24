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
# Graph traversal
[[Graphs]][[Search_algorithms]]
- Two core methods of traversal, depth-first and breadth-first
- Both have challenges in the way loops are dealt with in a way that traversal isn't endless

## Depth-first traversal
- Involves attempting to visit every node once
- Requires recording the nodes have already been visited
- An order for routes need to be established when there are multiple edges
![[Pasted image 20220310120801.png|550|550]]
- if a node is reached with no edges, we backtrack to a previous node
- Algorithm summary using [[Recursion]]
![[Pasted image 20220310121107.png|450|450]]
- Recording each node results in a [[Graphs#Spanning trees]]

![[Pasted image 20220310122036.png|450|450]]

## Breadth-first traversal
- Involves visiting neighbors first before going deeper into the tree
- Requires moving through each available edge simultaneously 

![[Pasted image 20220310122303.png|450|450]]

