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
# Interval algorithms 

## Meeting rooms 
```python
def canAttendMeetings(self, intervals):
    intervals.sort(key=lambda i: i[0])
    for i in range(1, len(intervals)):
        i1, i2 = intervals[i - 1], intervals[i]
        if i1[1] > i2[0]:
            return False
    return True
```

## Non-overlapping intervals 

```python
def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
    res, end = 0, float('-inf')
    for l,r in sorted(intervals, key=lambda x:x[1]):
        if l >= end:
            end = r
        else:
            res += 1
    return res
```

## Merge intervals
```python
def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort(key=lambda x: x[0])
    res_stack = deque([intervals[0]])

    for l, r in intervals[1:]:
        topr = res_stack[-1][1]
        if l <= topr:
            res_stack[-1][1] = max(r, topr)
        else:
            res_stack.append([l, r])

    return res_stack
```

## Insert intervals 
```python
def insert(self, intervals, newInterval) -> List[List[int]]:
    res = deque()

    for i, curr in enumerate(intervals):
        if curr[1] < newInterval[0]:
            res.append(curr)
        elif curr[0] > newInterval[1]:
            res.append(newInterval)
            res.extend(intervals[i:])
            return res
        else:
            newInterval = (
                min(curr[0], newInterval[0]),
                max(curr[1], newInterval[1]),
            )

    res.append(newInterval)
    return res
```


## Interval list intersection 
```python
def intervalIntersection(self, firstList, secondList) -> List[List[int]]:
    if not firstList or not secondList:
        return []

    res = []
    l1, l2 = len(firstList), len(secondList)
    i, j = 0, 0

    while i < l1 and j < l2:
        lmax = max(firstList[i][0], secondList[j][0])
        rmin = min(firstList[i][1], secondList[j][1])

        if lmax <= rmin:
            res.append([lmax, rmin])
        if firstList[i][1] < secondList[j][1]:
            i += 1
        else:
            j += 1
            
    return res
```

