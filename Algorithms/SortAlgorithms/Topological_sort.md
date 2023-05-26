> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SortAlgorithms
> **Created:** 26/05/2023 - 20:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Topological sort
-   An algorithm used to order the vertices of a **directed** [[Graphs|graph]] such that for each edge (u, v), vertex u comes before vertex v in the ordering.
-   It is commonly used in [[Multi-Process_systems|scheduling]] problems, dependency resolution, and task ordering.


![[Pasted image 20230526205122.png|500|500]]
-   Topological sort can only be performed on directed acyclic graph (**DAG**) since cycles introduce contradictions in the ordering.
- Multiple possible result strings may exist for a topological sort

![[Pasted image 20230526205657.png|450|450]]

## Topological sort algorithm 
```python
def topological_sort(graph: dict[Any, set[Any]]) -> Optional[list[Any]]:
    inlinks = defaultdict(int)  # number of inlinks for each node
    for u in graph:
        for v in graph[u]:
            inlinks[v] += 1
    q = deque([u for u in graph if (u not in inlinks)]) # nodes with no inlinks
    res = []

    while q:
        u = q.popleft()
        res.append(u)
        for v in graph[u]:
            inlinks[v] -= 1  # decouple outlinks to u
            if inlinks[v] == 0:
                q.append(v)

    if any(inlinks[u] > 0 for u in graph):
        return None  # cycle detected
    return res
```