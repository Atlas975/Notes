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
# Merge sort
- Recursively splits the dataset in half until single cells are reached, these cells are then merged and sorted in the process, each sublist requires less iterations than the previous to sort, making merge sort stronger on large datasets
```python
def merge_sort(data): # O(n log n) time O(n) space 
    if len(data) < 2:
        return data
    split = len(data) // 2
    left = merge_sort(data[:split])
    right = merge_sort(data[split:])
    return merge_segement(left, right, data)

def merge_segement(left, right, data):
    i, j, k = 0, 0, 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            data[k] = left[i]
            i += 1
        else:
            data[k] = right[j]
            j += 1
        k += 1
    for i, num in enumerate(left[i:]):
        data[k] = num
        k += 1
    for j, num in enumerate(right[j:]):
        data[k] = num
        k += 1
    return data
```
![[Pasted image 20220321123512.png|400|400]]