---
aliases: priority queue
---

> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** DataStructures
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# BinaryHeaps
## Min and max heap 
![[Pasted image 20220614092249.png|450|450]]

## Binary heap data structure 
```python
class MaxHeap:
    def __init__(self, data):
        self.heap = data
        n = len(self.heap)
        for i in range(n // 2, -1, -1):
            self.heapify(i)

    def heapify(self, i):
        m = i
        l = i * 2 + 1
        r = i * 2 + 2
        n = len(self.heap)

        if l < n and (self.heap[m] < self.heap[l]):
            m = l
        if r < n and (self.heap[m] < self.heap[r]):
            m = r
        if m != i:
            self.heap[i], self.heap[m] = self.heap[m], self.heap[i]
            self.heapify(m)

    def heappush(self, val):
        self.heap.append(val)
        i = len(self.heap) - 1
        par = (i - 1) // 2

        while i != 0 and (self.heap[par] < self.heap[i]):
            self.heap[par], self.heap[i] = self.heap[i], self.heap[par]
            i = par
            par = (i - 1) // 2

    def heappop(self):
        if not self.heap:
            Raise(ValueError("Heap is empty"))
        self.heap[0], self.heap[-1] = self.heap[-1], self.heap[0]

        val = self.heap.pop()
        self.heapify(0)
        return val
        
    def heappushpop(self, val): # more efficient than heappush followed by heappop 
        if not self.heap:
            Raise(ValueError("Heap is empty"))
        if val >= self.heap[0]:
            return val
        self.heap[0], val = val, self.heap[0]
        self.heapify(0)
        return val
        
    def heapreplace(self, val): # more efficient than heappop followed by heappush
        if not self.heap:
            Raise(ValueError("Heap is empty"))
        self.heap[0], val = val, self.heap[0]
        self.heapify(0)
        return val
```