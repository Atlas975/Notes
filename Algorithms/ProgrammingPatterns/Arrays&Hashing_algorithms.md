
> [!important]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Arrays & hashing algorithms
## Contains duplicate 
```python
def containsDuplicate(self, nums: List[int]) -> bool:
    cache=set()
    for i in nums:
        if i in cache:
            return True
        cache.add(i)
    return False
```

## Valid anagram 
```python
def isAnagram(self, s: str, t: str) -> bool:
    return len(s) == len(t) and Counter(s) == Counter(t)
```

## Two sum 
```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
    dp = {}
    for i, num in enumerate(nums):
        if (target - num) in dp:
            return (dp[target - num], i)
        dp[num] = i
    return -1
```

## Group anagrams 
```python
def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    res = defaultdict(list)
    for s in strs:
        letcnt = [0] * 26
        for c in s:
            letcnt[ord(c) - ord('a')] += 1
        res[tuple(letcnt)].append(s)
    return res.values()
```

## Top K frequent elements 
```python
def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    freq = [[] for _ in nums]
    for num, count in Counter(nums).items():
        freq[count - 1].append(num)

    res = []
    for f in freq[::-1]:
        for num in f:
            res.append(num)
            if len(res) == k:
                return res
```

## Product of array except self **(prefix sum)**
```python
def productExceptSelf(self, nums: List[int]) -> List[int]:
    n = len(nums)
    res = [1] * n
    lprod = rprod = 1
    r = n - 1
    
    for l in range(n):
        res[l] *= lprod
        res[r - l] *= rprod
        lprod *= nums[l]
        rprod *= nums[r - l]

    return res
```

## Valid Sudoku
```python
def isValidSudoku(self, board):
    cols, rows, grid = defaultdict(set), defaultdict(set), defaultdict(set)

    for r, c in product(range(9), repeat=2):
        tile = board[r][c]
        if tile == ".":
            continue
        if tile in (cols[c] | rows[r] | grid[r // 3, c // 3]):
            return False
        cols[c].add(tile)
        rows[r].add(tile)
        grid[r // 3, c // 3].add(tile)
    return True
```

## Longest consecutive sequence
```python
def longestConsecutive(self, nums: List[int]) -> int:
    mxlen = 0
    dp = set(nums)
    for num in dp:
        if (num - 1) not in dp:
            size = 1
            while (num + size) in dp:
                size += 1
            mxlen = max(mxlen, size)
    return mxlen
```