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
    res = []

    def dfs(arr, subset):
        res.append(subset[:])
        for i, num in enumerate(arr):
            dfs(arr[i + 1 :], subset + [num])

    dfs(nums, [])
    return res
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
[[Catalan_numbers#Permutations|Permutations formula]]

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
    nums.sort()
    res, n = deque(), len(nums)

    def dfs(i, path):
        if i == n:
            res.append(path.copy())
            return

        path.append(nums[i])
        dfs(i + 1, path)
        path.pop()

        while i < n - 1 and nums[i] == nums[i + 1]:
            i += 1
        dfs(i + 1, path)

    dfs(0, [])
    return res
```

## Combination sum no duplicates 

```python
def combinationSum2(self, candidates, target) -> List[List[int]]:
    res = []
    candidates.sort()

    def bfs(cand, path, path_sum):
        n = len(cand)

        def search(num, j):
            new_sum = path_sum + num
            if new_sum == target:
                res.append(path + [num])
            elif new_sum < target and (arr := cand[j + 1 :]):
                bfs(arr, path + [num], new_sum)

        search(cand[0], 0)
        for i in range(1, n):
            if cand[i] == cand[i - 1]:
                continue
            search(cand[i], i)

    bfs(candidates, [], 0)
    return res
```

## Word search 

```python
def exist(self, board: List[List[str]], word: str) -> bool:
    n, m, wrdlen = len(board), len(board[0]), len(word)
    if wrdlen > m * n:
        return False

    def dfs(r, c, i=0):
        if i == wrdlen - 1:
            return True
        board[r][c] = "#"
        i, ch = i + 1, word[i + 1]
        valid = (
            (r > 0 and board[r - 1][c] == ch and dfs(r - 1, c, i))
            or (r < n - 1 and board[r + 1][c] == ch and dfs(r + 1, c, i))
            or (c > 0 and board[r][c - 1] == ch and dfs(r, c - 1, i))
            or (c < m - 1 and board[r][c + 1] == ch and dfs(r, c + 1, i))
        )
        board[r][c] = word[i - 1]
        return valid

    cnts = sum(map(Counter, board), Counter())
    if cnts[word[0]] > cnts[word[-1]]:
        word = word[::-1]
    return any(
        dfs(r, c)
        for r, c in product(range(n), range(m))
        if board[r][c] == word[0]
    )
```
## N-Queens
```python
def solveNQueens(self, n: int) -> List[List[str]]:
    res = []

    def dfs(r, path, cols, pdiag, ndiag):
        for c in range(n):
            if (
                (cols & (1 << c))
                or (pdiag & (1 << (r + c)))
                or (ndiag & (1 << (r - c + n)))
            ):
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







