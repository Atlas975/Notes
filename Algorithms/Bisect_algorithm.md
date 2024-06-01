> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms
> **Created:** 27/05/2023 - 14:47
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bisect algorithm
- A technique which utilises [[Binary_search|binary search]] on a sorted sequence to find the index an element should be inserted at. 
- A left bisect places this to the left of equal elements a right bisect does this to the right 
- The bisect functionality is useful in sorted sequences to maintain the sorted property 


## Bisect left algorithm 
```python
def bisect_left(data, element):
    l, r = 0, len(data)
    while l < r:
        m = (l + r) // 2
        if data[m] < element:
            l = m + 1
        else:
            r = m
    return l
```

## Bisect right algorithm 
```python
def bisect_right(data, element):
    l, r = 0, len(data)
    while l < r:
        m = (l + r) // 2
        if data[m] <= element:
            l = m + 1
        else:
            r = m
    return l
```

