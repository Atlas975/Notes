---
aliases: binary search
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
# Binary search
- A search algorithm used in ordered data 
- The units of time taken to search for a record using binary search in an ordered file vs unordered is: 
$$\log_{2}N$$
$$N= \text{number of records}$$
## Binary search algorithm 
```python
def search(self, nums: List[int], target: int) -> int:
    l, r = 0, len(nums) - 1
    while l <= r:
        m = l + (r - l) // 2
        if target == nums[m]:
            return m
        elif target < nums[m]:
            r = m - 1
        else:
            l = m + 1
    return -1
```

## Search a 2D matrix
```python
def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
    nr, nc = len(matrix), len(matrix[0])
    l, r = 0, nr * nc - 1

    while l <= r:
        m = l + (r - l) // 2
        mval = matrix[m // nc][m % nc]

        if mval < target:
            l = m + 1
        elif mval > target:
            r = m - 1
        else:
            return True
    return False
```

## Koko eating bananas **(optimization)**
```python
def minEatingSpeed(self, piles: List[int], h: int) -> int:
    lo, hi = 1, max(piles)
    
    while lo<hi:
        k = (lo + hi)//2
        time = sum(ceil(p/k) for p in piles)
        if time > h:
            lo = k+1
        else:
            hi = k
    return hi
```

## Search in rotated sorted array
```python
def search(self, nums: List[int], target: int) -> int:
    def binary_search(l, r) -> int:
        if l > r:
            return -1
        m = l + (r - l) // 2
        if nums[m] == target:
            return m
        
        if nums[l] <= nums[m]:
            if target > nums[m] or target < nums[l]:
                return binary_search(m + 1, r)
            else:
                return binary_search(l, m - 1)
        if target < nums[m] or target > nums[r]:
            return binary_search(l, m - 1)
        return binary_search(m + 1, r)

    return binary_search(0, len(nums) - 1)
```

## Find minimum in rotated sorted array
```python
def findMin(self, nums: List[int]) -> int:
    l, r = 0, len(nums) - 1
    while l < r:
        m = l + (r - l) // 2
        if nums[m] > nums[r]:
            l = m + 1
        else:
            r = m # cap at m
    return nums[l]
```

## Time based key-value storage
```python
class TimeMap:
    def __init__(self):
        self.tmap = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.tmap[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        vals = self.tmap[key]
        if vals and timestamp >= vals[-1][1]:
            return vals[-1][0]

        l, r = 0, len(vals) - 1
        while l < r:
            m = (l + r) // 2
            if vals[m][1] > timestamp:
                r = m
            else:
                l = m + 1

        return vals[r-1][0] if r > 0 else ""
```

## Median of two sorted arrays
```python
def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]):
    if len(nums1) < len(nums2):
        nums1, nums2 = nums2, nums1
    INF, NEG_INF = float("inf"), float("-inf")
    nA, nB = len(nums1), len(nums2)
    total = nA + nB
    half = total // 2
    l, r = 0, nB

    while l <= r:
        mB = (l + r) // 2
        mA = half - mB

        lA = nums1[mA - 1] if (mA != 0) else NEG_INF
        rA = nums1[mA] if (mA != nA) else INF
        lB = nums2[mB - 1] if (mB != 0) else NEG_INF
        rB = nums2[mB] if (mB != nB) else INF

        if lA > rB:
            l = mB + 1
        elif lB > rA:
            r = mB - 1
        else:  # lA <= rB and lB <= rA
            midr = min(rA, rB)
            return midr if total % 2 else (midr + max(lA, lB)) / 2
    return -1
```
