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
# Selection sort
- Also uses an inplace sorted and unsorted region, finds the smallest remaining element in the unsorted region and then proceeds to place it at the end of the sorted region until no elements are left, unlike insertion it searches the whole unsorted region each iteration.
```python
def selection_sort(data): # O(n^2)
    n = len(data)
    for i in range(n):
        low = i
        for j in range(i + 1, n):
            if data[j] < data[low]:
                low = j
        data[low], data[i] = data[i], data[low]
```
![[Pasted image 20220321120434.png|350|350]]
