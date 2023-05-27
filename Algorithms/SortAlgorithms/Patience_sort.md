> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SortAlgorithms
> **Created:** 27/05/2023 - 15:34
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Patience sort
- A comparison-based sorting algorithm that is particularly efficient for sorting sequences with a large number of [[Dynamic_programming#Longest increasing subsequence|LIS]]
- Initially, an empty pile is created, and the first element of the sequence is placed on it. For each subsequent element, it is placed on the leftmost pile where it can be put, or a new pile is created.
```python
def patience_sort(data):
    piles = []

    def bisect_left_piles(num):
        l, r = 0, len(piles)
        while l < r:
            m = (l + r) // 2
            if num > piles[m][-1]:
                l = m + 1
            else:
                r = m
        return l

    for num in data:
        i = bisect_left_piles(num)
        if i == len(piles):
            piles.append([])
        piles[i].append(num) # decreasing order

    res = []
    while piles:
        mini = 0 
        for pile in piles:
            if pile[-1] < piles[mini][-1]:
                mini = piles.index(pile)
        res.append(piles[mini].pop())
        if not piles[mini]:
            piles.remove(piles[mini])
    return res
```