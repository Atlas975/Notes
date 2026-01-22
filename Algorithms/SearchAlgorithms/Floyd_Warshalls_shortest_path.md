> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SearchAlgorithms
> **Created:** 19/03/2023 - 15:32
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Floyd Warshall's shortest path
- Finds the shortest path between all pairs of vertices in a [[Graphs|graph]], works with negative edges but is not able to work with negative cycles 
- The goal of the algorithm is to eventually consider going through all possible intermediate nodes on paths of differing lengths
## Floyd Warshall's algorithm

```python
def floyd_warshall(graph) -> dict: # O(V^3) time, O(V^2) space
    dist = {u: {v: float('inf') for v in graph} for u in graph}

    for u in graph:
        for v, weight in graph[u].items():
            dist[u][v] = weight
        dist[u][u] = 0

    for k, i, j in product(graph.keys(), repeat=3):
        if dist[i][j] > (weight := dist[i][k] + dist[k][j]):
            dist[i][j] = weight
    return dist
```