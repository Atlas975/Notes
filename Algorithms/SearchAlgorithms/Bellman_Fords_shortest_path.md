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
# Bellman Ford's shortest path
- Slower than [[Dijkstras_shortest_path|Dijkstras]] but is able to handle negative edges
- V - 1 times is the maximum number of edges of a minimum spanning tree in the [[Graphs|graph]], this also represents the furthest distance relaxing may need tdgeso propagate.
- One more loop can be done to detect negative cycles, this is indicated if a path is still able to relax after V - 1 iterations. The algorithm fails in this scenario

![[Pasted image 20230321211616.png|500|500]]
## Graph relaxation 
```python
if (d[u] + c(u, v)) < d[v]:
    d[v] = d[u] + c(u, v)
```

## Bellman Ford's algorithm
```python
def bellman_ford(graph, origin) -> dict:  # O(VE) time, O(V) space
    distmp = {vertex: float("inf") for vertex in graph}
    distmp[origin] = 0

    for _ in range(len(graph) - 1): 
        for u in filter(lambda u: distmp[u] != float("inf"), graph): 
            for v, weight in graph[u].items():
                if (vdist := distmp[u] + weight) < distmp[v]:
                    distmp[v] = vdist

    for u in filter(lambda u: distmp[u] != float("inf"), graph):
        for v, weight in graph[u].items(): 
            if (vdist := distmp[u] + weight) < distmp[v]:
                raise ValueError("negative cycle detected")
    return distmp
```