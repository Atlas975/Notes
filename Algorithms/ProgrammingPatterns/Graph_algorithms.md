> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:27
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
# Graph algorithms 
## Number of islands 
```python
def numIslands(self, grid: List[List[int]]) -> int:
    n, m = len(grid), len(grid[0])
    
    def dfs(r, c):
        if grid[r][c] != "1":
            return 0
        grid[r][c] = "0"
        for dr, dc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
            if 0 <= dr < n and 0 <= dc < m:
                dfs(dr, dc)
        return 1

    return sum(starmap(dfs, product(range(n), range(m))))
```

## Clone graph 
```python
def cloneGraph(self, node: "Node") -> "Node":
    visited = {}

    def cloneNode(node):
        if node in visited:
            return visited[node]
        visited[node] = Node(node.val)
        visited[node].neighbors = [cloneNode(n) for n in node.neighbors]
        return visited[node]

    return cloneNode(node) if node else None
```

## Max area of island 
```python
def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
    n, m = len(grid), len(grid[0])

    def dfs(r, c):
        grid[r][c] = 0
        return 1 + sum(
            dfs(dr, dc)
            for dr, dc in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1))
            if 0 <= dr < n and 0 <= dc < m and grid[dr][dc]
        )

    return max(
        (dfs(r, c) for r, c in product(range(n), range(m)) if grid[r][c]),
        default=0,
    )
```

## Pacific Atlantic water flow **(path intersection)**
```python
def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
    n, m = len(heights), len(heights[0])
    pac, atc = set(), set()

    def bfs(r, c, visited):
        visited.add((r, c))
        node = heights[r][c]
        for dr, dc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
            if (
                0 <= dr < n
                and 0 <= dc < m
                and (dr, dc) not in visited
                and heights[dr][dc] >= node
            ):
                bfs(dr, dc, visited)

    for r in range(n):
        bfs(r, 0, pac)
        bfs(r, m - 1, atc)
    for c in range(m):
        bfs(0, c, pac)
        bfs(n - 1, c, atc)
    return pac & atc
```

## Surrounded regions 
```python
def solve(self, board: List[List[str]]) -> None:
    n, m = len(board), len(board[0])

    def capture(r, c):
        if board[r][c] != "O":
            return
        board[r][c] = "C"
        for dr, dc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
            if 0 <= dr < n and 0 <= dc < m:
                capture(dr, dc)

    for r in range(n):
        capture(r, 0)
        capture(r, m - 1)

    for c in range(m):
        capture(0, c)
        capture(n - 1, c)

    for r, c in product(range(n), range(m)):
        if board[r][c] == "O":
            board[r][c] = "X"
        elif board[r][c] == "C":
            board[r][c] = "O"
```

## Rotting oranges **(level order expansion)**
```python
def orangesRotting(self, grid: List[List[int]]) -> int:
    n, m = len(grid), len(grid[0])
    q = deque()
    fresh = time = 0

    for r,c in product(range(n), range(m)):
        if grid[r][c] == 1:
            fresh += 1
        elif grid[r][c] == 2:
            q.append((r, c))

    while fresh and q:
        for _ in range(len(q)):
            r, c = q.popleft()
            for dr, dc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
                if 0 <= dr < n and 0 <= dc < m and grid[dr][dc] == 1:
                    grid[dr][dc] = 2
                    fresh -= 1
                    q.append((dr, dc))
        time += 1
    return -1 if fresh else time
```

## Walls and gates 
```python
def walls_and_gates(self, rooms: List[List[int]]):
    n, m = len(rooms), len(rooms[0])
    q = deque((r, c) for r, c in product(range(n), range(m)) if rooms[r][c] == 0)

    def expand(r, c, dist, valididx):
        if valididx and (dist + 1) < rooms[r][c]:
            rooms[r][c] = dist + 1
            q.append((r, c))

    while q:
        r, c = q.popleft()
        expand(r - 1, c, rooms[r][c], r > 0)
        expand(r + 1, c, rooms[r][c], r < n - 1)
        expand(r, c - 1, rooms[r][c], c > 0)
        expand(r, c + 1, rooms[r][c], c < m - 1)
```
## Course schedule 
```python
def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
    preMp = [[] for _ in range(numCourses)]
    for crs, pre in prerequisites:
        preMp[crs].append(pre)
    seen = set()

    def dfs(crs):
        if len(preMp[crs]) == 0:
            return True
        if crs in seen:
            return False

        seen.add(crs)
        if any(not dfs(pre) for pre in preMp[crs]):
            return False
        seen.remove(crs)

        preMp[crs].clear() # caching result as True is also valid
        return True

    return all(map(dfs, range(numCourses)))
```

## Course schedule II
```python
def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    crsMp = [[] for _ in range(numCourses)]
    needCnt = [0] * numCourses

    for crs, pre in prerequisites:
        crsMp[pre].append(crs)
        needCnt[crs] += 1

    q = deque(filter(lambda x: needCnt[x] == 0, range(numCourses)))
    res = []

    while q:
        pre = q.popleft()
        res.append(pre)
        for crs in crsMp[pre]:
            needCnt[crs] -= 1
            if needCnt[crs] == 0:
                q.append(crs)

    return res if len(res) == numCourses else []
```
## Number of connected components

![[Union_find#Union find algorithm]]


## Redundant connections

```python
def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    n = len(edges)
    parent = {i: i for i in range(1, n + 1)}
    rank = defaultdict(int)

    def find(u):
        while (u := parent[u]) != parent[u]:
            parent[u] = parent[parent[u]]
        return u

    def union(u, v):
        root_u, root_v = find(u), find(v)
        if root_u == root_v:
            return True
        if rank[root_u] > rank[root_v]:
            parent[root_v] = root_u
        elif rank[root_u] < rank[root_v]:
            parent[root_u] = root_v
        else:
            parent[root_v] = root_u
            rank[root_u] += 1
        return False

    return next((n1, n2) for n1, n2 in edges if union(n1, n2))
```

## Graph is a valid tree 
```python
def valid_tree(self, n: int, edges: List[List[int]]) -> bool:
    parent = list(range(n))
    rank = [1] * n

    def find(u):
        while (u := parent[u]) != parent[u]:
            parent[u] = parent[parent[u]]
        return u

    def union(u, v):
        ru, rv = find(u), find(v)
        if ru == rv:
            return False # union found, not a valid tree
        if rank[ru] > rank[rv]:
            parent[rv] = ru
        elif rank[ru] < rank[rv]:
            parent[ru] = rv
        else:
            parent[rv] = ru
            rank[ru] += 1
        return True

    return len(edges) == n - 1 and all(starmap(union, edges))
```

## Word ladder **(Bi-directional BFS)**
```python
def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    word_set = set(wordList)
    if endWord not in word_set:
        return 0
    bq, eq = deque([(1, beginWord)]), deque([(1, endWord)])
    bpos, epos = {beginWord: 1}, {endWord: 1}

    def bfs(bq: deque, bp: dict, ep: dict) -> Optional[int]:
        for bdist, w in (bq.popleft() for _ in range(len(bq))):
            for st, c, en in ((w[:i], c, w[i + 1 :]) for i, c in enumerate(w)):
                for nw in (st + l + en for l in ascii_lowercase if l != c):
                    if edist := ep.get(nw):
                        return bdist + edist
                    if nw in word_set:
                        bp[nw] = bdist + 1
                        bq.append((bdist + 1, nw))
                        word_set.remove(nw)

    while bq and eq:
        if res := bfs(bq, bpos, epos) if len(bq) < len(eq) else bfs(eq, epos, bpos):
            return res
    return 0
```
## Network delay time 
```python
def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
    edges = [[] for _ in range(n)]
    for u, v, w in times:
        edges[u - 1].append((v - 1, w))
    distmp = [float('inf')] * n
    distmp[k - 1] = 0
    pq = [(0, k - 1)]

    while pq:
        udist, u = hq.heappop(pq)
        if udist > distmp[u]:
            continue
        for v, weight in edges[u]:
            if (vdist := udist + weight) < distmp[v]:
                distmp[v] = vdist
                hq.heappush(pq, (vdist, v))
    return res if (res := max(distmp)) < float('inf') else -1
```