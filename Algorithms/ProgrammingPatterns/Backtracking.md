> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:26
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
# Backtracking 

## Subsets
```python
def subsets(self, nums: List[int]) -> List[List[int]]:
    def dfs(arr, sub) -> List[List[int]]:
        subsets = [sub]
        for i, num in enumerate(arr):
            subsets.extend(dfs(arr[i + 1 :], sub + [num]))
        return subsets
    return dfs(nums, [])
```
## Combination sum
```python
def combinationSum(self, candidates, target) -> List[List[int]]:
    res = []

    def bfs(cand, path, path_sum):
        for i, num in enumerate(cand):
            new_sum = path_sum + num
            if new_sum == target:
                res.append(path + [num])
            elif new_sum < target:
                bfs(cand[i:], path + [num], new_sum)

    bfs(candidates, [], 0)
    return res
```


## Permutations
![[Catalan_numbers#Permutations|Permutations formula]]

```python
def permute(self, nums: List[int]) -> List[List[int]]:
    res = []

    def dfs(nums, path):
        if not nums:
            res.append(path)
            return
        for i, cur in enumerate(nums):
            dfs(nums[:i] + nums[i+1:], path + [cur])

    dfs(nums, [])
    return res
```
## Subsets no duplicates
```python
def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
    res = []
    def dfs(i, path):
        if i == n:
            res.append(path.copy())
            return

        path.append(nums[i])
        dfs(i + 1, path) # comb with nums[i]
        path.pop()

        while i < n - 1 and nums[i] == nums[i + 1]: 
            i += 1
        dfs(i + 1, path) # comb without nums[i] (skip duplicates)

    nums.sort()
    n = len(nums)
    dfs(0, [])
    return res
```

## Combination sum no duplicates 

```python
def combinationSum2(self, cands: List[int], target: int) -> List[List[int]]:
    candMp = defaultdict(int)
    for c in cands:
        candMp[c] += 1
    keys = sorted(candMp.keys())
    res = []

    def dfs(remain, path, i):
        if remain == 0:
            res.append(path)
            return
        for j, cur in enumerate(keys[i:], i):
            if candMp[cur] == 0:
                continue
            if cur > remain:
                break
            candMp[cur] -= 1
            path.append(cur)
            dfs(remain - cur, path, j)
            path.pop()
            candMp[cur] += 1

    dfs(target, [], 0)
    return res
```


## Letter combinations in a phone number 
```python
def letterCombinations(self, digits: str) -> List[str]:
    if not digits:
        return []
    letmp = [
        [], [], ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"],
        ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"],
    ]

    def backtrack(i, s):
        if i >= len(digits):
            res.append(s)
            return
        for c in letmp[int(digits[i])]:
            backtrack(i + 1, s + c)
    res = []
    backtrack(0, "")
    return res
```

## Special permutations 
```python
def specialPerm(self, nums: List[int]) -> int:
    n = len(nums)
    edges = 0
    idxmp = defaultdict(list) # stores all potential paths at each idx
    for i in range(n):
        for j in range(i + 1, n):
            if (nums[i] % nums[j] == 0) or (nums[j] % nums[i] == 0):
                idxmp[i].append(j)
                idxmp[j].append(i)
                edges += 1
    if edges == n * (n - 1) / 2: # complete graph, all permutations valid
        return factorial(n) % (pow(10, 9) + 7)
    
    @cache
    def dfs(i, mask):
        if mask == (1 << n) - 1: # all bits are set
            return 1
        return sum(
            dfs(j, mask | (1 << j))
            for j in idxmp[i]
            if (mask & (1 << j) == 0)
        )
    return sum(dfs(i, 1 << i) for i in range(n)) % (pow(10, 9) + 7)
```

## Partition to k equal sum subsets 
```python
def canPartitionKSubsets(self, nums: list[int], k: int) -> bool:
    total = sum(nums)
    if total % k:
        return False
    target = total // k
    nums.sort(reverse=True)
    if nums[0] > target:
        return False
    seen = [False] * len(nums)
    seen[0] = True

    def dfs(i, cur, k):
        if cur == target:
            return k == 1 or dfs(1, 0, k - 1)
        for j in range(i, len(nums)):
            if seen[j] or cur + nums[j] > target: # pruning
                continue
            if not seen[j - 1] and nums[j] == nums[j - 1]: # failed before
                continue
            seen[j] = True
            if dfs(j + 1, cur + nums[j], k):
                return True
            seen[j] = False
            if cur == 0:
                return False
        return False

    return dfs(1, nums[0], k) if nums[0] < target else dfs(1, 0, k - 1)
```
## Word search 

```python
def exist(self, board: List[List[str]], word: str) -> bool:
    n, m, wrdlen = len(board), len(board[0]), len(word)
    if wrdlen > m * n:
        return False

    def dfs(r, c, i=0) -> bool:
        if board[r][c] != word[i]:
            return False
        if i == wrdlen - 1:
            return True
        
        board[r][c] = "#"
        i += 1
        valid = (
            (r > 0 and dfs(r - 1, c, i))
            or (r < n - 1 and dfs(r + 1, c, i))
            or (c > 0 and dfs(r, c - 1, i))
            or (c < m - 1 and dfs(r, c + 1, i))
        )
        board[r][c] = word[i - 1]
        return valid

    wordcnt, boardcnt = Counter(word), Counter(chain(*board))
    if any(wordcnt[c] > boardcnt[c] for c in wordcnt):
        return False
    if wordcnt[word[0]] > wordcnt[word[-1]]:
        word = word[::-1]
    return any(starmap(dfs, product(range(n), range(m))))
```
## N-Queens
```python
def solveNQueens(self, n: int) -> List[List[str]]:
    res = []

    def dfs(r, path, cols, pdiag, ndiag):
        for c in range(n):
            if cols & (1 << c) or pdiag & (1 << r + c) or ndiag & (1 << r - c + n):
                continue
            if r == n - 1:
                path.append(c)
                res.append("." * c + "Q" + "." * (n - c - 1) for c in path)
                return

            dfs(
                r + 1,
                path + [c],
                cols | 1 << c,
                pdiag | 1 << (r + c),
                ndiag | 1 << (r - c + n),
            )

    dfs(0, [], 0, 0, 0)
    return res
```
## Soduku solver 
```python
def solveSudoku(self, board: List[List[str]]) -> None:
    rows = [[False] * 9 for _ in range(9)]
    cols = [[False] * 9 for _ in range(9)]
    grid = [[False] * 9 for _ in range(9)]
    empty = deque()

    def fill(d, i, j, state):
        rows[d][i] = cols[d][j] = grid[d][(i // 3) * 3 + j // 3] = state

    for r, c in product(range(9), repeat=2):
        if (tile := board[r][c]) == ".":
            empty.append((r, c))
        else:
            fill(int(tile) - 1, r, c, True)

    def dfs():
        if not empty:
            return True
        r, c = empty.pop()

        for d in range(9):
            if rows[d][r] or cols[d][c] or grid[d][(r // 3) * 3 + c // 3]:
                continue # invalid insertion
            fill(d, r, c, True)
            board[r][c] = str(d + 1)
            if dfs():
                return True
            board[r][c] = "."
            fill(d, r, c, False)

        empty.append((r, c))
        return False

    dfs()
```
