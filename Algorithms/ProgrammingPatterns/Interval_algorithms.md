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

## Insert intervals
```python
def insert(self, intervals, newInterval) -> List[List[int]]:
    res = []

    for i, curr in enumerate(intervals):
        if curr[1] < newInterval[0]: # new interval comes after
            res.append(curr)
        elif curr[0] > newInterval[1]: # empty spot for interval exists
            res.append(newInterval)
            res.extend(intervals[i:])
            return res
        else: # cur[0] <= newInterval[1] & cur[1] >= newinterval[0]
            newInterval = (
                min(curr[0], newInterval[0]),
                max(curr[1], newInterval[1]),
            )
    res.append(newInterval)
    return res
```
## Merge intervals
```python
def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort(key=lambda x: x[0])
    res = deque([intervals[0]])

    for l, r in intervals[1:]:
        topr = res[-1][1]
        if l <= topr: # overlap occurs, merge
            res[-1][1] = max(r, topr)
        else:
            res.append([l, r])
    return res
```

## Non-overlapping intervals

```python
def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
    intervals.sort(key=lambda x: x[1])
    res, end = 0, intervals[0][0]

    for l, r in intervals[1:]:
        if l >= end: # no overlap, keep this interval
            end = r
        else: # overlap, 1 more interval to remove
            res += 1
    return res
```

## Meeting rooms
```python
def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
    intervals.sort(key=lambda i: i[0])
    return all(m1[1] <= m2[0] for m1, m2 in zip(intervals, intervals[1:]))
```

## Minimum meeting rooms
```python
def min_meeting_rooms(self, intervals: List[List[int]]) -> int:
    staptrs = sorted(m[0] for m in intervals)
    endptrs = sorted(m[1] for m in intervals)
    sptr, eptr = 1, 0
    rooms = mxrooms = 1

    while sptr < len(staptrs):
        if staptrs[sptr] >= endptrs[eptr]: # no overlap
            eptr += 1
            rooms -= 1
        else:
            sptr += 1
            rooms += 1
            mxrooms = max(mxrooms, rooms)
    return mxrooms
```


## Minimum interval to include each query
```python
def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
    intervals.sort(key=lambda x: x[0])
    cache = {}
    pq = []
    l, r = 0, len(intervals)

    for query in sorted(set(queries)):
        for sta, end in (intervals[i] for i in range(l, r)):
            if sta > query:
                break
            heapq.heappush(pq, (end - sta + 1, end))
            l += 1
        while pq and query > pq[0][1]: # intervals that are too small
            heapq.heappop(pq)
        cache[query] = pq[0][0] if pq else -1

    return [cache[q] for q in queries]
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
