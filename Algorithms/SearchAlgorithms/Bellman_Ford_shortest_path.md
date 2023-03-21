> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SearchAlgorithms
> **Created:** 21/03/2023 - 21:01
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bellman Ford shortest path
```python
def bellman_ford(graph, origin) -> dict:  # O(VE) time, O(V) space
    distmp = {vertex: float("inf") for vertex in graph}
    distmp[origin] = 0

    for _ in range(len(graph) - 1): # V-1, max number of edges in minimum spanning tree
        for u in filter(lambda u: distmp[u] != float("inf"), graph): # filter unreachable vertices
            for v, weight in graph[u].items():
                if (vdist := distmp[u] + weight) < distmp[v]:
                    distmp[v] = vdist

    for u in filter(lambda u: distmp[u] != float("inf"), graph):
        for v, weight in graph[u].items(): # if we can still relax, then there is a negative cycle
            if (vdist := distmp[u] + weight) < distmp[v]:
                raise ValueError("negative cycle detected")

    return distmp
```