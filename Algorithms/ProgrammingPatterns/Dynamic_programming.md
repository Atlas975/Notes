---
aliases: DP
---
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
# Dynamic programming
## Climbing stairs 
```python
def climbStairs(self, n: int) -> int:
    if n <= 3:
        return n
    a, b = 2, 3
    for _ in range(4, n + 1):
        a, b = b, a + b
    return b
```

## Min cost climbing stairs 
```python
def minCostClimbingStairs(self, cost: List[int]) -> int:
    a, b = cost[0], cost[1]
    for c in cost[2:]:
        a, b = b, min(a, b) + c
    return min(a, b)
```
## House robber
```python
def rob(self, nums: List[int]) -> int:
    a, b = 0, 0
    for num in nums:
        a, b = b, max(a + num, b)
    return b
```

## House robber II 
```python
def rob(self, nums: List[int]) -> int:
    def rob_group(start, end):
        a, b = 0, 0
        for num in nums[start:end]:
            a, b = b, max(a + num, b)
        return b

    n = len(nums)
    if n < 2: return nums[0]
    return max(rob_group(0, n - 1), rob_group(1, n))
```

## Longest palindromic substring
```python
def longestPalindrome(self, s: str) -> str:
    n = len(s)
    res = ""

    def exppali(l, r):
        nonlocal res
        while l >= 0 and r < n and s[l] == s[r]:
            l -= 1
            r += 1
        res = s[l + 1 : r] if r - l - 1 > len(res) else res

    for i in range(n):
        exppali(i, i)
        exppali(i, i + 1)
    return res
```

## Palindrome partition
```python
def partition(self, s: str) -> List[List[str]]:
    n = len(s)
    dp = [[] for _ in range(n + 1)]
    dp[n] = [[]]  # used when the substring extends to the end of s
    for l in reversed(range(n)):
        dp[l].extend([[s[l]] + sub2 for sub2 in dp[l + 1]])  # single char is pali
        for r in range(l + 2, n + 1):
            sub1 = s[l:r]
            if all(sub1[k] == sub1[-k - 1] for k in range(len(sub1) // 2)):
                dp[l].extend([sub1] + sub2 for sub2 in dp[r])
    return dp[0]
```
## Decode ways
```python
def numDecodings(self, s: str) -> int:
    # ITERATIVE
    n = len(s)
    dp = [0] * (n + 1)
    dp[-1] = 1
    for i in range(n - 1, -1, -1):
        if s[i] == "0":
            continue
        dp[i] = dp[i + 1]
        if i < n - 1 and int(s[i : i + 2]) <= 26:
            dp[i] += dp[i + 2]
    return dp[0]

    # RECURSIVE
    @cache
    def dfs(i):
        if i == n:
            return 1
        if s[i] == "0":
            return 0
        res = dfs(i + 1)
        if i < n - 1 and int(s[i : i + 2]) <= 26:
            res += dfs(i + 2)
        return res
    return dfs(0)
```

## Coing change 
```python
def coinChange(self, coins: List[int], amount: int) -> int:
    coins = {coin for coin in coins if coin <= amount}  # remove coins > amt
    if len(coins) == 0:  # no coins needed if amt = 0, no coins available if amt > 0
        return 0 if amount == 0 else -1

    dp = [float("inf")] * (amount + 1)
    minc, maxc = min(coins), max(coins)
    dp[0], dp[minc], dp[maxc] = 0, 1, 1  # no coins, amt = min coin, amt = max coin
    for a in range(minc + 1, maxc):  # only a - c combs where a may be less than c
        dp[a] = 1 + min(dp[a - c] for c in coins if a - c >= 0)

    for a in range(maxc + 1, amount + 1):  # all a - c combs from here on are valid
        dp[a] = 1 + min(dp[a - c] for c in coins)
    return dp[-1] if dp[-1] != float("inf") else -1
```
# 2D dynamic programming 
## Unique paths 
```python
def uniquePaths(self, m: int, n: int) -> int:
    dp = [[1] * n for _ in range(m)]
    for x, y in product(range(1, m), range(1, n)):
        dp[x][y] = dp[x - 1][y] + dp[x][y - 1]
    return dp[-1][-1]
```
## Longest common subsequence 
```python
def longestCommonSubsequence(self, text1: str, text2: str) -> int:
    # ITERATIVE
    n1, n2 = len(text1), len(text2)
    dp = [[0] * (n2 + 1) for _ in range(n1 + 1)]

    for i, j in product(range(n1), range(n2)):
        dp[i + 1][j + 1] = (
            dp[i][j] + 1
            if text1[i] == text2[j]
            else max(dp[i][j + 1], dp[i + 1][j])
        )
    return dp[-1][-1]

    # RECURSIVE
    @cache
    def helper(i, j):
        if i < 0 or j < 0:
            return 0
        if text1[i] == text2[j]:
            return helper(i - 1, j - 1) + 1
        return max(helper(i - 1, j), helper(i, j - 1))

    return helper(len(text1) - 1, len(text2) - 1)
```


## Longest increasing path in matrix 
```python
def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
    n, m = len(matrix), len(matrix[0])

    @cache
    def dfs(r, c):
        cur = matrix[r][c]
        return 1 + max(
            dfs(r + 1, c) if r + 1 < n and matrix[r + 1][c] > cur else 0,
            dfs(r - 1, c) if r >= 1 and matrix[r - 1][c] > cur else 0,
            dfs(r, c + 1) if c + 1 < m and matrix[r][c + 1] > cur else 0,
            dfs(r, c - 1) if c >= 1 and matrix[r][c - 1] > cur else 0,
        )

    return max(starmap(dfs, product(range(n), range(m))))
```