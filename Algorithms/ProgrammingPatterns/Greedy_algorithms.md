> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:23
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
# Greedy algorithms
- Greedy algorithms always approach the immediate best option, ignoring its effect on the quality of future choices or outcome 
- This is not guaranteed to result in the optimal outcome.
- Examples include [[Selection_sort|selection sort]] and [[Dijkstras_shortest_path|Dijkstras shortest path]]
## Maximum subarray 
```python
def maxSubArray(self, nums: List[int]) -> int:
    mxsub = cursum = nums[0]

    for num in nums[1:]:
        cursum = (cursum + num) if cursum > 0 else num
        mxsub = max(mxsub, cursum)
    return mxsub
```
## Jump game 
```python
def canJump(self, nums: List[int]) -> bool:
    n = len(nums)
    goal = n - 1
    
    for i in reversed(range(n - 1)):
        if i + nums[i] >= goal:
            goal = i
    return goal == 0
```
## Jump game II
```python
def jump(self, nums: List[int]) -> int:
    res = r = l = 0
    lastidx = len(nums) - 1

    while r < lastidx:
        l, r = r + 1, max(i + nums[i] for i in range(l, r + 1))
        res += 1
    return res
```

## Partition labels 
```python
def partitionLabels(self, s: str) -> List[int]:
    res = []
    lstidx = [0] * 26
    for i, c in enumerate(s):
        lstidx[ord(c) - ord("a")] = i

    l, r = 0, 0
    for i, c in enumerate(s):
        r = max(r, lstidx[ord(c) - ord("a")])
        if i == r:
            res.append(r - l + 1)
            l = r + 1
    return res
```