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
## Maximum subarray **(Kadane's algorithm)**
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

## Gas station
```python
def canCompleteCircuit(self, gas: list[int], cost: list[int]) -> int:
    if sum(cost) > sum(gas): # can't make a round trip
        return -1
    l = tank = 0

    for r, (co, ga) in enumerate(zip(cost, gas)):
        tank += ga - co
        if tank < 0: # gas is needed from earlier stations
            tank = 0
            l = r + 1
    return l
```

## Hand of straights
```python
def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
    if len(hand) % groupSize != 0:
        return False
    crdcnt = Counter(hand)
    keypq = list(crdcnt.keys())
    heapq.heapify(keypq)

    while keypq:
        strt = keypq[0]
        for i in range(strt, strt + groupSize):
            if i not in crdcnt:
                return False
            crdcnt[i] -= 1
            if crdcnt[i] == 0:
                if i != keypq[0]:  # not at top of heap, hole in other group
                    return False
                heapq.heappop(keypq)
    return True
```

## Merge triplets to form target triplet
```python
def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
    res = 0
    for t in triplets:
        if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:
            continue  # skip overszied triplets
        for i, v in enumerate(t):
            if target[i] == v:
                res |= 1 << i
                if res == 7: # all 3 bits are set
                    return True
    return False
```
## Partition labels 
```python
def partitionLabels(self, s: str) -> List[int]:
    res = []
    lstidx = [0] * 26
    for i, c in enumerate(s):
        lstidx[ord(c) - 97] = i

    l, r = 0, 0
    for i, c in enumerate(s):
        r = max(r, lstidx[ord(c) - 97])
        if i == r:
            res.append(r - l + 1)
            l = r + 1
    return res
```

## Valid parenthesis string 
```python
def checkValidString(self, s: str) -> bool:
    opmin = opmax = 0 # min/max number of open parens
    for c in s:
        match c:
            case "(": # 1 more open paren allowed
                opmin += 1
                opmax += 1
            case ")": # 1 less open paren allowed
                if opmax == 0: # too many closing parens
                    return False
                opmin = max(opmin - 1, 0) # ok, treat as empty string
                opmax -= 1
            case _: # is *, can be either open or close 
                opmin = max(opmin - 1, 0)
                opmax += 1
    return opmin == 0
```