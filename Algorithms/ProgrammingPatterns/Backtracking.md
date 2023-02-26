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
## Subsets without duplicates
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
## Word search 

```python
def exist(self, board: List[List[str]], word: str) -> bool:
        n, m, wrdlen = len(board), len(board[0]), len(word)
        if wrdlen > m * n:
            return False

        def dfs(r, c, i = 0):
            if i == wrdlen - 1:
                return True
            board[r][c] = '#'
            i += 1
            valid = (
                (dfs(r - 1, c, i) if r > 0 and board[r - 1][c] == word[i] else False) or
                (dfs(r + 1, c, i) if r < n - 1 and board[r + 1][c] == word[i] else False) or
                (dfs(r, c - 1, i) if c > 0 and board[r][c - 1] == word[i] else False) or
                (dfs(r, c + 1, i) if c < m - 1 and board[r][c + 1] == word[i] else False)
            )

            board[r][c] = word[i - 1]
            return valid

        cnts = sum(map(Counter, board), Counter())
        if cnts[word[0]] > cnts[word[-1]]:
            word = word[::-1]
        return any(dfs(r, c) for r, c in product(range(n), range(m)) if board[r][c] == word[0])
```
## N-Queens
```python
def solveNQueens(self, n: int) -> List[List[str]]:
    cols, pdiag, ndiag = set(), set(), set()
    res = []

    def dfs(r, path):
        for c in range(n):
            if (c in cols) or (r + c in pdiag) or (r - c in ndiag):
                continue
            if r + 1 == n:
                path.append(c)
                res.append(('.'*i) + 'Q' + ('.'*(n-i-1)) for i in path)
                return 
                
            cols.add(c)
            pdiag.add(r + c)
            ndiag.add(r - c)
            dfs(r + 1, path + [c])
            cols.remove(c)
            pdiag.remove(r + c)
            ndiag.remove(r - c)

    dfs(0, [])
    return res
```







