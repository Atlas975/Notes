---
aliases: DSU
---
> [!important|inIL]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/AlgorithmConcepts
> **Created:** 26/12/2022 - 09:23
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Union find
- The union find algorithm counts the number of connected components in a graph 
>$$\text{time complexity: }O(\log n)$$
>$$\text{space complexity: } O(n)$$
## Union find algorithm 

```python
def union_find(edges) -> int:
    nodes = set(n for u, v in edges for n in (u, v))
    parent = {n: n for n in nodes}
    rank = {n: 1 for n in nodes}

    def find(u):
        while u != parent[u]:
            parent[u] = parent[parent[u]]
            u = parent[u]
        return u

    def union(u, v):
        root_u, root_v = find(u), find(v)
        if root_u == root_v:
            return 0

        if rank[root_u] > rank[root_v]:
            parent[root_v] = root_u
        elif rank[root_u] < rank[root_v]:
            parent[root_u] = root_v
        else:
            parent[root_v] = root_u
            rank[root_u] += 1
        return 1

    res = len(nodes)
    for u, v in edges:
        res -= union(u, v)
    return res

print("(0->1->2) (3->4)\nNo of connected:", union_find([[0, 1], [1, 2], [3, 4]]))
```
## Union find API 
### Union

![[Pasted image 20221031072853.png|450|450]]

### Find 
![[Pasted image 20221031073258.png|350|350]]

### Parent set 
![[Pasted image 20221031073731.png|450|450]]

## Union find for cycle length detection 
```python
def findShortestCycle(self, n: int, edges: list[list[int]]) -> int:
    def bfs(u, end):
        seen = {u}
        q = deque([u])
        dist = 0
        while q:
            dist += 1
            if dist > self.res:  # early stopping
                return float("inf")
            for u in (q.popleft() for _ in range(len(q))):
                for v in graph[u]:
                    if v not in seen:
                        if v == end:
                            return dist + 1  # +1 for unactivated
                        seen.add(v)
                        q.append(v)
        return float("inf")

    def find(u):
        while u != par[u]:
            par[u] = par[par[u]]
            u = par[u]
        return u

    graph = [[] for _ in range(n)]
    self.res = float("inf")
    par = list(range(n))

    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv:
            self.res = min(self.res, bfs(u, v))
        else:
            par[ru] = rv
        graph[u].append(v)
        graph[v].append(u)
    return -1 if self.res == float("inf") else self.res
```