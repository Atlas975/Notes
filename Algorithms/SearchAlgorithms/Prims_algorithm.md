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
-   A [[Greedy_algorithms|greedy algorithm]] used to find the min spanning tree (**MST**) of a weighted **undirected** graph.
-   The algorithm starts with an arbitrary vertex and grows the MST by iteratively adding the edge with the minimum weight that connects a vertex in the MST to a vertex outside the MST.

## Prims algorithm
```python
def primsMST(graph, start) -> int:
    need = set(graph.keys())
    pq = [(0, start)]  
    mst_cost = 0 # use a stack to backtrack
    while need:
        while pq[0][1] not in need:
            heapq.heappop(pq)
        udist, u = heapq.heappop(pq)
        need.remove(u)
        mst_cost += udist
        for v, weight in graph[u].items():
            if v in need:
                heapq.heappush(pq, (weight, v)) # append origin to backtrack
    return mst_cost
```
## Prims vs Dijikstras 
- Unlike [[Dijkstras_shortest_path|Dijikstas]], prims only count individual costs rather than costs from a specific node 
- Take the following traversal for both Dijiksta and Prim:

![[Pasted image 20230520221634.png|350|350]]

```
Dijkstra's Algorithm takes edges { (a,b), (a,c), (a,d) }.
Thus, the total weight of this spanning tree is 5 + 5 + 5 = 15.

Prim's Algorithm takes edges { (a,d), (b,d), (c,d) }.
Thus, the total weight of this spanning tree is 5 + 1 + 1 = 7.
```