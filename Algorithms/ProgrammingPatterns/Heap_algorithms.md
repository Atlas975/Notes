> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:27
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
# Heap algorithms 
## Kth largest element  in stream
```python
class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.minheap, self.k = nums, k
        heapq.heapify(self.minheap)
        while len(self.minheap) > self.k:
            heapq.heappop(self.minheap)

    def add(self, val: int) -> int:
        heapq.heappush(self.minheap, val)
        if len(self.minheap) > self.k:
            heapq.heappop(self.minheap)
        return self.minheap[0]
```

## Last stone weight

```python
def lastStoneWeight(self, stones: List[int]) -> int:
    stones = [-stone for stone in stones]
    heapq.heapify(stones)
    while len(stones) > 1:
        s1, s2 = heapq.heappop(stones), heapq.heappop(stones)
        if s1 != s2:
            heapq.heappush(stones, s1 - s2)
    return -stones[0] if stones else 0
```

## Kth closest points to origin 
```python
def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
    distances = [(dist((0, 0), point), point) for point in points]
    heapq.heapify(distances)
    return (heapq.heappop(distances)[1] for _ in range(k))
```

## Kth largest element in array 
```python
def findKthLargest(self, nums: List[int], k: int) -> int:
    nums = [-num for num in nums]
    heapq.heapify(nums)
    for _ in range(k - 1):
        heapq.heappop(nums)
    return -nums[0]
```

## Task scheduler 
```python
def leastInterval(self, tasks: List[str], n: int) -> int:
    q, time = deque(), 0
    mxheap = [-cnt for cnt in Counter(tasks).values()]
    hq.heapify(mxheap)

    while mxheap:
        time += 1
        if tasks := hq.heappop(mxheap) + 1:
            q.append((tasks, time + n))
        if q:
            if not mxheap:
                time = q[0][1]
            if time == q[0][1]:
                hq.heappush(mxheap, q.popleft()[0])
    return time
```

## Design Twitter 
```python
class User:
    def __init__(self, userId):
        self.userId = userId
        self.tweets = deque()
        self.follows = {self.userId}

class Twitter:
    def __init__(self):
        self.timestamp = 0
        self.idmap = {}
        self.getUser = lambda k: self.idmap.setdefault(k, User(k))

    def postTweet(self, userId: int, tweetId: int) -> None:
        tweets = self.getUser(userId).tweets
        tweets.append((self.timestamp, tweetId))
        if len(tweets) > 10:
            tweets.popleft()
        self.timestamp += 1

    def getNewsFeed(self, userId: int) -> List[int]:
        mxheap = []
        for followeeId in self.getUser(userId).follows:
            if tweets := self.getUser(followeeId).tweets:
                last = len(tweets) - 1
                time, tweetId = tweets[last]
                mxheap.append((-time, tweetId, tweets, last - 1))
        hq.heapify(mxheap)

        feed = []
        while mxheap and len(feed) < 10:
            _, tweetId, tweets, last = hq.heappop(mxheap)
            feed.append(tweetId)
            if last >= 0:
                time, tweetId = tweets[last]
                hq.heappush(mxheap, (-time, tweetId, tweets, last - 1))
        return feed

    def follow(self, followerId: int, followeeId: int) -> None:
        self.getUser(followerId).follows.add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.getUser(followerId).follows.discard(followeeId)
```

## Median from data stream 
```python
class MedianFinder:
    def __init__(self):
        self.lmax, self.rmin = [], []
        self.iseven = 1

    def addNum(self, num: int) -> None:
        if self.iseven:
            hq.heappush(self.rmin, -hq.heappushpop(self.lmax, -num))
        else:
            hq.heappush(self.lmax, -hq.heappushpop(self.rmin, num))
        self.iseven ^= 1

    def findMedian(self) -> float:
        midr = self.rmin[0]
        return (midr - self.lmax[0]) / 2 if self.iseven else midr
```

## Design a number container system 
```python
class NumberContainers:
    def __init__(self):
        self.i_n = {}
        self.n_i, self.n_iheap = defaultdict(set), defaultdict(list)

    def change(self, index: int, number: int) -> None:
        if oldnum := self.i_n.get(index):
            self.n_i[oldnum].remove(index)
            iheap = self.n_iheap[oldnum]
            while iheap and (iheap[0] not in self.n_i[oldnum]):
                heapq.heappop(iheap)

        self.i_n[index] = number
        self.n_i[number].add(index)
        heapq.heappush(self.n_iheap[number], index)

    def find(self, number: int) -> int:
        return iheap[0] if (iheap := self.n_iheap[number]) else -1
```
[[Multi-Process_systems]]