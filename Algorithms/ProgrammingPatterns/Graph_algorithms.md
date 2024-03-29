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

    def dfs(r, c, outbound=False):
        if outbound or grid[r][c] == "0":
            return 0
        grid[r][c] = "0"
        dfs(r - 1, c, r == 0)
        dfs(r + 1, c, r == n - 1)
        dfs(r, c - 1, c == 0)
        dfs(r, c + 1, c == m - 1)
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
        if grid[r][c] == 0:
            return 0
        grid[r][c] = 0
        return (
            1
            + (dfs(r + 1, c) if r < n - 1 else 0)
            + (dfs(r - 1, c) if r > 0 else 0)
            + (dfs(r, c + 1) if c < m - 1 else 0)
            + (dfs(r, c - 1) if c > 0 else 0)
        )

    return max(starmap(dfs, product(range(n), range(m))), default=0)
```

## Pacific Atlantic water flow **(path intersection)**
```python
def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
    n, m = len(heights), len(heights[0])
    pac, atc = set(), set()

    def bfs(r, c, ocean):
        ocean.add((r, c))
        for nr, nc, outbound in (
            (r - 1, c, r == 0),
            (r + 1, c, r == n - 1),
            (r, c - 1, c == 0),
            (r, c + 1, c == m - 1),
        ):
            if outbound or heights[nr][nc] < heights[r][c] or (nr, nc) in ocean:
                continue
            bfs(nr, nc, ocean)

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

    for r, c in product(range(n), range(m)):
        if grid[r][c] == 1:
            fresh += 1
        elif grid[r][c] == 2:
            q.append((r, c))

    def neigh_iter(r, c) -> Generator:
        (yield r + 1, c) if r < n - 1 else None
        (yield r - 1, c) if r > 0 else None
        (yield r, c + 1) if c < m - 1 else None
        (yield r, c - 1) if c > 0 else None

    while (fresh > 0) and q:
        for r, c in (q.popleft() for _ in range(len(q))):
            for nr, nc in neigh_iter(r, c):
                if grid[nr][nc] == 1:
                    fresh -= 1
                    grid[nr][nc] = 2
                    q.append((nr, nc))
        time += 1

    return -1 if (fresh > 0) else time
```

## Walls and gates 
```python
def walls_and_gates(self, rooms: List[List[int]]):
    n, m = len(rooms), len(rooms[0])
    q = deque((r, c) for r, c in product(range(n), range(m)) if rooms[r][c] == 0)

    def expand(r, c, dist, inbound):
        if inbound and (dist + 1) < rooms[r][c]:
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
    crsMp = [[] for _ in range(numCourses)]
    needCnt = [0] * numCourses

    for crs, pre in prerequisites:
        crsMp[pre].append(crs)
        needCnt[crs] += 1

    q = deque([i for i in range(numCourses) if needCnt[i] == 0])  # no preq
    valid = 0

    while q:
        pre = q.popleft()
        valid += 1
        for crs in crsMp[pre]:
            needCnt[crs] -= 1
            if needCnt[crs] == 0:
                q.append(crs)
    return valid == numCourses
```

## Course schedule II
```python
def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    crsMp = [[] for _ in range(numCourses)]
    needCnt = [0] * numCourses

    for crs, pre in prerequisites:
        crsMp[pre].append(crs)
        needCnt[crs] += 1

    q = deque([i for i in range(numCourses) if needCnt[i] == 0]) # no preq
    res = []

    while q:
        pre = q.popleft()
        res.append(pre)
        for crs in crsMp[pre]:
            needCnt[crs] -= 1
            if needCnt[crs] == 0: # no more preq
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

    def bidirect_bfs(bdist: int, w: str) -> Optional[int]:
        for st, c, en in ((w[:i], c, w[i + 1 :]) for i, c in enumerate(w)):
            for nw in (f"{st}{l}{en}" for l in ascii_lowercase if l != c):
                if edist := epos.get(nw): # BFS from both ends converge
                    return bdist + edist
                if nw in word_set:
                    bpos[nw] = bdist + 1
                    bq.append((bdist + 1, nw))
                    word_set.remove(nw)

    while bq and eq:
        for bdist, w in (bq.popleft() for _ in range(len(bq))):
            if res := bidirect_bfs(bdist, w):
                return res
        if len(bq) > len(eq): # swap to minimize BFS tree
            bq, bpos, eq, epos = eq, epos, bq, bpos
    return 0
```
## Min cost to connect all points 
```python
def minCostConnectPoints(self, points: List[List[int]]) -> int:
    need = set(range(len(points)))
    pq = [(0, 0)]  # (dist, node)
    res = 0

    while need:
        while pq[0][1] not in need:
            heapq.heappop(pq)
        udist, u = heapq.heappop(pq)
        need.remove(u)
        res += udist
        x1, y1 = points[u]
        for v, (x2, y2) in ((i2, points[i2]) for i2 in need):
            heapq.heappush(pq, (abs(x1 - x2) + abs(y1 - y2), v))
    return res
```

## Network delay time 
```python
def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
    edges = [[] for _ in range(n + 1)] # 1-indexed, do not count 0 in result
    for u, v, w in times:
        edges[u].append((v, w))
    distmp = [float("inf")] * (n + 1)
    distmp[k] = 0
    pq = [(0, k)]

    while pq:
        udist, u = hq.heappop(pq)
        if udist > distmp[u]:
            continue
        for v, weight in edges[u]:
            if (vdist := udist + weight) < distmp[v]:
                distmp[v] = vdist
                hq.heappush(pq, (vdist, v))
    return res if (res := max(distmp[1:])) < float("inf") else -1
```
## Swim in rising water
```python
def swimInWater(self, grid) -> int:
    # BINARY SEARCH
    n = len(grid)
    l, r = grid[-1][-1], max(map(max, grid)) # min and max time

    def dfs(i, j, t, seen, outbound):
        if outbound or (grid[i][j] > t) or ((i, j) in seen):
            return False
        seen.add((i, j))

        if i == j == n - 1:
            return True
        return (
            dfs(i + 1, j, t, seen, i == n - 1)
            or dfs(i, j + 1, t, seen, j == n - 1)
            or dfs(i - 1, j, t, seen, i == 0)
            or dfs(i, j - 1, t, seen, j == 0)
        )

    while l < r:
        m = l + (r - l) // 2
        if dfs(0, 0, m, set(), False):
            r = m
        else:
            l = m + 1
    return l

    # DIJKSTRA ALGORITHM + BIDIRECTIONAL BFS
    n = len(grid)
    mxt = max(grid[0][0], grid[n - 1][n - 1])  # result will always be >= to this
    spq, dpq = [(mxt, 0, 0)], [(mxt, n - 1, n - 1)]  # pops lowest from src and dst
    spos, dpos = [[None] * n for _ in range(n)], [[None] * n for _ in range(n)]
    spos[0][0] = dpos[n - 1][n - 1] = mxt

    def bfs_exp(mxt, i, j, outbound):
        if outbound or spos[i][j]:
            return
        if grid[i][j] > mxt:
            spos[i][j] = grid[i][j]
            heapq.heappush(spq, (grid[i][j], i, j))
        else:
            spos[i][j] = mxt
            bfs.append((i, j))

    while spq and dpq:
        for t, i, j in (heapq.heappop(spq) for _ in range(len(spq))):
            mxt = t
            bfs = deque([(i, j)])
            while bfs:
                nr, nc = bfs.popleft()
                if emxt := dpos[nr][nc]:
                    return max(mxt, emxt)
                bfs_exp(mxt, nr - 1, nc, nr == 0)
                bfs_exp(mxt, nr + 1, nc, nr == n - 1)
                bfs_exp(mxt, nr, nc - 1, nc == 0)
                bfs_exp(mxt, nr, nc + 1, nc == n - 1)

        if len(spq) > len(dpq):  # swap to minimize BFS tree
            spq, spos, dpq, dpos = dpq, dpos, spq, spos
    return mxt
```
## Alien dictionary **(Topological sort)**
```python
def alienOrder(words: list[str]) -> str:
    graph = {c : set() for c in chain(*words)}
    for w1, w2 in zip(words, words[1:]):
        ordinal = False
        for c1, c2 in zip(w1, w2):
            if c1 != c2:
                graph[c1].add(c2) # c1 < c2
                ordinal = True
                break
        if not ordinal and len(w1) > len(w2):
            return ""
        
    inlinks = {u: 0 for u in graph} # topological sort
    for vertices in graph.values():
        for v in vertices:
            inlinks[v] += 1
    pq = [u for u in graph if inlinks[u] == 0]
    heapq.heapify(pq) # sorts in normal lexical order if multiple roots
    res = []

    while pq:
        u = heapq.heappop(pq)
        res.append(u)
        for v in graph[u]:
            inlinks[v] -= 1
            if inlinks[v] == 0:
                heapq.heappush(pq, v)
    return "".join(res) if len(res) == len(graph) else ""
```

## Create components with same values
```python
def componentValue(self, nums: List[int], edges: List[List[int]]) -> int:
    n = len(nums)
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)

    def dfs(u: int, prev: int, target: int) -> Optional[int]:
        res = nums[u]
        if res > target:
            return None
        for v in graph[u]: # all neighbours
            if v == prev:
                continue
            sub = dfs(v, u, target)
            if sub is None or res + sub > target:
                return None
            res += sub
        return 0 if res == target else res # 0 means component is done

    tot = sum(nums)
    for x in range(n, 1, -1):
        if tot % x == 0 and dfs(0, -1, tot // x) == 0:
            return x - 1 # no of edge cuts = no of components - 1
    return 0
```


## Cheapest flights within K stops 
```python
def findCheapestPrice(self, n, flights, src, dst, k) -> int:
    graph = [[] for _ in range(n)]
    for u, v, weight in flights:
        graph[u].append((v, weight))
    distmp = [float("inf")] * n
    distmp[src] = 0
    q = deque([(src, 0)])

    for _ in range(k):
        for u, udist in (q.popleft() for _ in range(len(q))):
            for v, weight in graph[u]:
                if (vdist := udist + weight) < distmp[v]:
                    distmp[v] = vdist
                    q.append((v, vdist))

    for u, udist in q:
        for v, weight in graph[u]:
            distmp[v] = min(distmp[v], udist + weight)
    return res if (res := distmp[dst]) != float("inf") else -1
```

## Shortest path in grid with obstacle elimination
```python
def shortestPath(self, grid: List[List[int]], k: int) -> int:
    n, m = len(grid), len(grid[0])
    mdist = lambda r, c: n - r + m - c - 2  # manhattan distance finder

    def neigh_iter(r, c) -> Generator:
        (yield r + 1, c) if r < n - 1 else None
        (yield r - 1, c) if r > 0 else None
        (yield r, c + 1) if c < m - 1 else None
        (yield r, c - 1) if c > 0 else None

    state = (0, 0, k)  # row, col, remaining obstacles
    pq = [(n + m - 2, state, 0)]  # distance, state, steps (pops min dist)
    seen = {state}

    while pq:
        dist, (r, c, tk), steps = heappop(pq)
        if dist - steps <= tk:  # distance to target <= possible removals
            return dist  # return remaining distance + steps taken
        if (r, c) == (n - 1, m - 1):
            return steps

        for nr, nc in neigh_iter(r, c):
            nk = tk - grid[nr][nc]
            state = (nr, nc, nk)
            if nk >= 0 and (state not in seen):
                seen.add(state)
                heappush(pq, ((mdist(nr, nc) + steps + 1), state, steps + 1))
    return -1
```