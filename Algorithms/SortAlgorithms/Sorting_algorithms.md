> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/AlgorithmConcepts
> **Created:** 26/12/2022 - 09:27
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Sorting algorithms
- The efficiency of several algorithms greatly depends on how data is distributed, meaning there's no one-size-fits-all approach to picking a sorting algorithm for a task.
## Sorting stability
- A sort is stable if two equal elements appear in the same relative order to each other.
- Binary insertion sort is stable, however an algorithm such as timsorts stability depends on the merge algorithm


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




# Heap sort
- Starts by representing the array as a regular tree (min heap) than constructs a max heap (a tree where the parent node is always larger than the child node). 
- This effectively builds the sorted array backwards

![[Pasted image 20220324120124.png|450|450]]
building a max heap starts from the furthest down parent node in this case 5 and then recursively calls other parents, each parent checks if order is maintained if its moved

- We then swap the root node of the max heap with the item at the end of the array, the previous root is then removed

![[Pasted image 20220324120816.png|100|300]]
![[Pasted image 20220324120918.png|100|300]]

- The heaping process is then repeated, the second largest number floats to the root node

![[Pasted image 20220324121135.png|450|450]]

- This process can then be iterated until the a full sorted list is created

![[Pasted image 20220324121304.png|100|300]]

- Code summary

![[Pasted image 20220324121537.png|500|500]]

# Quick sort
- An inplace recursive sorting algorithm, involves getting each item in its correct location one at a time. Works by selecting a pivot element and partitioning the other elements into sub arrays
- The pivot in quicksort aims to be the middlemost element but this is done in many ways such as:
1. Always selecting first/last element
2. Pick random last element
3. Pick random element
4. Pick median
- At the end of an iteration the pivot should be in its correct final position with all elements in front being larger and all elements behind being smaller

![[Pasted image 20220613114902.png|450|450]]

## Median of three partition method
- Selects the first middle and last element of the array, these are then sorted properly before the middle item is chosen as the pivot 

![[Pasted image 20220329134709.png|450|450]]
in this case 4 is chosen

# Tree sort
- Inserts all items in a binary tree using less / greater than comparisons to determine the branch to insert to.
- Once all items are inserted, in order traversal is used to retrieve items in a sorted list. Worst case occurs in both sorted and reverse sorted lists, algorithm is also not in place

![[Pasted image 20220519135523.png|450|450]]

# Radix / bucket sort
- Involves the concept of buckets rather than comparison through the use of repeatedly using the radix, most effective when there are a small number of keys (10 digits long is better than 100 digits)
- Works by comparing each digit one at a time resulting in a sorted list upon the final iteration
- Example LSD radix sort:

![[Pasted image 20220331234442.png|450|450]]

# Tim sort
- Hybrid algorithm optimized to perform well on real world data 
- Derived from merge sort and binary insertion sort 
- Adapts to size of data structure based on factors such as input size 
- This is done because the time complexity multiplied by the constant number of operations for insertion sort is less than that of nlogn algorithms for small inputs

>$$c_{i} \times n^2\leq c_{i}\times n\log n $$

# Common sorting algorithm time complexity
![[Pasted image 20220519014130.png|450|450]]
inplace means the algorithm only uses the data structure its given in the sorting process 


![[Pasted image 20220325120953.png|450|450]]
![[Pasted image 20220325121014.png|450|450]]
