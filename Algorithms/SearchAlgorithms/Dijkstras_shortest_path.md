---
aliases: "Dijiksta's"
---

> [!important]- Metadata
> **Tags:** #Algorithms #Networking 
> **Located:** Algorithms/SearchAlgorithms
> **Created:** 19/03/2023 - 10:55
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Dijkstra's shortest path
- A [[Graphs|graph]] [[Search_algorithms|search algorithm]] for finding the shortest path in a weighted graph
-  Works by maintaining a list of the shortest distances from the origin vertex to every other vertex in the graph and  expanding this list until it includes all vertices
-   At each step of the algorithm, the vertex with the smallest distance from the origin is chosen and its neighbours are explored in a DFS fashion. If the distance to a neighbour can be improved through the current vertex, the neighbour is updated and added to the explore list 
## Dijkstra's algorithm 
```python
def dijkstra(graph, origin) -> dict: # O(ElogV) time, O(V) space
    distmp = {vertex: float('inf') for vertex in graph}
    distmp[origin] = 0
    pq = [(0, origin)]

    while pq:
        udist, u = heapq.heappop(pq)
        if udist > distmp[u]:
            continue
        for v, weight in graph[u].items():
            if (vdist := udist + weight) < distmp[v]:
                distmp[v] = vdist
                heapq.heappush(pq, (vdist, v))
    return distmp
```

## Dijkstra's pitfalls
-   The algorithm can be slow on large graphs, and there are more efficient algorithms for certain types of graphs, such as those with negative edge weights.
-   Additionally, the algorithm assumes that there are no cycles of negative weight in the graph, as such cycles can cause the algorithm to fail.

