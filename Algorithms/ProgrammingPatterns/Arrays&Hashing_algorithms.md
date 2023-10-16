
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

## Minimum operations to make the array alternating
```python
def minimumOperations(self, nums: List[int]) -> int:
    def duomx(freqs) -> tuple[int, int, int]:
        key = mx0 = mx1 = 0
        for k, v in freqs.items():
            if v > mx0:
                key = k
                mx0, mx1 = v, mx0
            elif v > mx1:
                mx1 = v
        return key, mx0, mx1

    ek, em0, em1 = duomx(Counter(nums[::2])) # even idx (key, max, 2nd max)
    ok, om0, om1 = duomx(Counter(nums[1::2])) # odd idx (key, max, 2nd max)
    return len(nums) - ((em0 + om0) if ek != ok else max(em0 + om1, em1 + om0))
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
[[Bit_manipulation]]
```rust
pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
    let (mut cols, mut rows, mut grids) = ([0u16; 9], [0u16; 9], [0u16; 9]);
    
    for r in 0..9 {
        for c in 0..9 {
            if board[r][c] == '.' {
                continue;
            }
            let tile = 1 << (board[r][c] as u8 - b'1');
            let g = r - r % 3 + c / 3;

            if cols[c] & tile != 0 || rows[r] & tile != 0 || grids[g] & tile != 0 {
                return false;
            }

            cols[c] |= tile;
            rows[r] |= tile;
            grids[g] |= tile;
        }
    }
    true
}
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

## Number of continuous  subarrays 
```python
def continuousSubarrays(self, nums: List[int]) -> int:
    l = 0
    preidx = {} # most recent index of each num
    res = len(nums) # all single elem subarrays

    for r, x in enumerate(nums):
        if x not in preidx: # l already in place if x in preidx 
            for k in [k for k in preidx if abs(k - x) > 2]:
                if preidx[k] >= l:
                    l = preidx[k] + 1
                del preidx[k]
        res += r - l # amount of new subarrays (exclude single elem)
        preidx[x] = r
    return res
```