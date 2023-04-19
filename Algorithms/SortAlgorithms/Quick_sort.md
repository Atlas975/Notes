> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SortAlgorithms
> **Created:** 11/04/2023 - 13:20
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Quick sort
- An inplace recursive sorting algorithm, involves getting each item in its correct location one at a time. Works by selecting a pivot element and partitioning the other elements into sub arrays
- The pivot in quicksort aims to be the middlemost element but this is done in many ways such as:
    1. Pick first/last/middle element
    3. Pick random element
    4. Pick median
- At the end of an iteration the pivot should be in its correct final position with all elements in front being larger and all elements behind being smaller (quicksort is an unstable sorting algorithm)

```python
def quicksort(data, l, r):
    if l < r:
        pidx = partition(data, l, r)
        quicksort(data, l, pidx - 1)
        quicksort(data, pidx + 1, r)
    return data

def partition(data, l, r):
    pivot = data[r]
    for i in range(l, r):
        if data[i] < pivot:
            data[l], data[i] = data[i], data[l]
            l += 1
    data[l], data[r] = data[r], data[l]
    return l
```

![[Pasted image 20220613114902.png|400|400]]

## Median of three partition method
```python
def partition(data, l, r):
    m = (l + r) // 2   
    if data[l] > data[r]:
        data[l], data[r] = data[r], data[l]
    if data[l] > data[m]:
        data[l], data[m] = data[m], data[l]
    if data[m] < data[r]:
        data[m], data[r] = data[r], data[m]
        
    pivot = data[r]
    for i in range(l, r):
        if data[i] < pivot:  
            data[l], data[i] = data[i], data[l]  
            l += 1  
    data[l], data[r] = data[r], data[l]  
    return l
```
- Selects the first middle and last element of the array, these are then sorted properly before the middle item is chosen as the pivot 

![[Pasted image 20220329134709.png|400|400]]