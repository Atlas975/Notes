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
    if all(s[k] == s[-k - 1] for k in range(n // 2)):
        return s
    self.res = s[0]  # at least 1 char

    def exppali(l, r):
        for _ in range(min(l + 1, n - r)):
            if s[l] != s[r]:
                break
            l -= 1
            r += 1
        if r - l - 1 > len(self.res):
            self.res = s[l + 1 : r]

    exppali(0, 1)  # even length
    for i in range(1, n - 1):
        exppali(i - 1, i + 1)  # odd length
        exppali(i, i + 1)  # even length
    return self.res
```

## Palindrome partition
```python
def partition(self, s: str) -> List[List[str]]:
    # DYNAMIC PROGRAMMING (ITERATIVE)
    n = len(s)
    dp = [[] for _ in range(n + 1)]
    dp[n] = [[]]  # used when the substring extends to the end of s
    for l in reversed(range(n)):
        dp[l].extend([[s[l]] + sub2 for sub2 in dp[l + 1]])  # single char is a pali
        for r in range(l + 2, n + 1):
            sub1 = s[l:r]
            if all(sub1[k] == sub1[-k - 1] for k in range(len(sub1) // 2)):
                dp[l].extend([sub1] + sub2 for sub2 in dp[r])
    return dp[0]

    # DYNAMIC PROGRAMMING (RECURSIVE)
    n = len(s)
    isPali = lambda x: all(x[k] == x[-k - 1] for k in range(len(x) // 2))

    @cache
    def dfs(l):
        if l == n:
            return [[]]
        dp = []
        dp.extend([[s[l]] + sub2 for sub2 in dfs(l + 1)])
        for r in range(l + 2, n + 1):
            lsub = s[l:r]
            if isPali(lsub):
                dp.extend([[lsub] + rsub for rsub in dfs(r)])
        return dp
    return dfs(0)
```
## Decode ways
```python
def numDecodings(self, s: str) -> int:
    n = len(s)
    dp = ([0] * n) + [1]
    dp[-2] = int(s[-1] != "0")

    for i in reversed(range(n - 1)):
        if s[i] == "0":
            continue
        dp[i] += dp[i + 1]
        if int(s[i : i + 2]) <= 26:
            dp[i] += dp[i + 2]
    return dp[0]
```

## Coing change 
```python
def coinChange(self, coins: list[int], amount: int) -> int:
    coins = [c for c in coins if c <= amount]
    if len(coins) == 0:  # no coins needed if amt = 0, no coins available if amt > 0
        return 0 if amount == 0 else -1
    minc, maxc = min(coins), max(coins)
    n = maxc + 1
    dp = [float("inf")] * n

    dp[0], dp[minc], dp[maxc] = 0, 1, 1
    for a in range(minc + 1, maxc):  # only a - c combs where a may be less than c
        dp[a] = 1 + min(dp[a - c] for c in coins if a - c >= 0)
        
    for a in range(maxc + 1, amount + 1):  # all a - c combs from here on are valid
        dp[a % n] = 1 + min(dp[(a - c) % n] for c in coins)
    return dp[amount % n] if dp[amount % n] != float("inf") else -1
```
## Maximum product subarray 
```python
def maxProduct(self, nums: list[int]) -> int:
    a = b = res = nums[0]  # a: min, b: max
    for num in nums[1:]:
        if num < 0:  # a can be max if num < 0 twice
            a, b = b, a
        a, b = min(num, a * num), max(num, b * num)
        res = max(res, b)
    return res
```
## Partition equal subset sum **(0/1 knapsack)**
```python
def canPartition(self, nums: List[int]) -> bool:
    @cache
    def dfs(i, cursum) -> bool:
        if cursum == target:
            return True
        if cursum > target or i == 0:
            return False
        return dfs(i - 1, cursum + nums[i]) or dfs(i - 1, cursum)
    
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    nums.sort() # adding largest nums first speeds up dfs
    return dfs(len(nums) - 1, 0)
```
## Word break 
```python
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    ns = len(s)
    dp = [False] * (ns + 1)
    dp[-1] = True

    wordmp = defaultdict(set)
    for w in wordDict:
        wordmp[len(w)].add(w)

    for i in reversed(range(ns)):
        for wlen in wordmp:
            if (i + wlen > ns) or (s[i : i + wlen] not in wordmp[wlen]):
                continue
            dp[i] = dp[i + wlen]
            if dp[i]:
                break
    return dp[0]
```
## Longest increasing subsequence 
```python
def lengthOfLIS(self, nums: List[int]) -> int:
    dp = [nums[0]] # BINARY SEARCH (PATIENCE SORTING)
    for num in nums[1:]:
        i = bisect_left(dp, num)
        if i == len(dp):  # num > all vals in LIS
            dp.append(num)
        else:  
            dp[i] = num  
    return len(dp)
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
    n1, n2 = len(text1), len(text2)
    dp = [[0] * (n2 + 1) for _ in range(n1 + 1)]

    for i, j in product(range(n1), range(n2)):
        dp[i + 1][j + 1] = (
            dp[i][j] + 1
            if text1[i] == text2[j]
            else max(dp[i][j + 1], dp[i + 1][j])
        )
    return dp[-1][-1]
```

## Buy and sell stock with cooldown 
```python
def maxProfit(self, prices: List[int]) -> int:
    # ITERATIVE O(1) SPACE
    nstck = twodaypre = 0 # wo/ stock held maxprof, 2 day pre maxprof wo/ stock
    stck = -prices[0] # w/ stock held maxprof

    for p in prices[1:]:
        tmp = nstck
        nstck = max(nstck, stck + p)  # sell
        stck = max(stck, twodaypre - p) # buy
        twodaypre = tmp
    return nstck

    # RECURSIVE O(N) SPACE
    @cache
    def dfs(i, stockheld):
        if i >= len(prices):
            return 0
        skip = dfs(i + 1, stockheld)

        if stockheld:
            sell = dfs(i + 2, False) + prices[i]
            return max(sell, skip)
        buy = dfs(i + 1, True) - prices[i]
        return max(buy, skip)
    return dfs(0, False)
```

## Coin change II
```python
def change(self, amount: int, coins: List[int]) -> int:
    dp = [0] * (amount + 1)
    dp[0] = 1

    for c in coins: # can only use each coin once (combination)
        for a in range(c, amount + 1):
            dp[a] += dp[a - c]
    return dp[amount]
```

## Longest increasing path in matrix 
```python
def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
    n, m = len(matrix), len(matrix[0])
    dp = [[None] * m for _ in range(n)]

    def dfs(r, c, outbound=False, prev=float("-inf")):
        if outbound or prev >= matrix[r][c]:
            return 0
        if dp[r][c]:
            return dp[r][c]

        cur = matrix[r][c]
        dp[r][c] = 1 + max(
            dfs(r + 1, c, r == n - 1, cur),
            dfs(r - 1, c, r == 0, cur),
            dfs(r, c + 1, c == m - 1, cur),
            dfs(r, c - 1, c == 0, cur),
        )
        return dp[r][c]

    return max(starmap(dfs, product(range(n), range(m))))
```