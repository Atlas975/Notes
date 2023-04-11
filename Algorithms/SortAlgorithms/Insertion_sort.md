> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/SortAlgorithms
> **Created:** 11/04/2023 - 18:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Insertion sort
- Array is split inplace between the first and second element, the sorted end and the unsorted end. If the next element in the unsorted array is smaller than the element in the sorted array, it iterates through the sorted end until it finds an element its smaller than. It then takes its place and shifts all elements ahead of it by one index forward
```python
def insertion_sort(data): # O(n^2)
    for r in range(1, len(data)):
        l = r
        while l > 0 and data[l-1] > data[l]:
            data[l - 1], data[l] = data[l], data[l - 1]
            l -= 1
```
![[Pasted image 20220321115929.png|350|350]]