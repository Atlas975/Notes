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

## Unique binary search trees 
![[Catalan_numbers#Catalan number sequence|Catalan number sequence]]
```python
def numTrees(self, n: int) -> int:
    # ITERATIVE
    dp = [1] * (n + 1)
    for i in range(2, n+1):
        dp[i] = sum(dp[j] * dp[i-j-1] for j in range(i))
    return dp[-1]

    # RECURSIVE
    @cache
    def fact(x):
        return 1 if x <= 1 else (x * fact(x - 1))
    return fact(2 * n) // (fact(n) * fact(n + 1))
```
# 2D dynamic programming 
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
        else:
            return max(helper(i - 1, j), helper(i, j - 1))

    return helper(len(text1) - 1, len(text2) - 1)

```