#Programming 
# Sorting algorithms
- The efficiency of several algorithms greatly depends on how data is distributed, meaning theres no one-size-fits-all approach to picking a sorting algorithm for a task

# Bubble sort
- Builds the sorted array in place by having an element float to the top up until it encounters an element larger than itself, this is process is repeated n times

>![[Pasted image 20220325121320.png]]
>![[Pasted image 20220325121338.png]]

# Insertion sort
- Array is split inplace between the first and second element, the sorted end and the unsorted end. If the next element in the unsorted array is smaller than the element in the sorted array, it iterates through the sorted end until it finds an element its smaller than. It then takes its place and shifts all elements ahead of it by one index forward

>![[Pasted image 20220321115859.png|400|500]]
>![[Pasted image 20220321115929.png|400|500]]

# Selection sort
- Also uses an inplace sorted and unsorted region, finds the smallest remaining element in the unsorted region and then proceeds to place it at the end of the sorted region until no elements are left, unlike insertion it searches the whole unsorted region each iteration.
>![[Pasted image 20220321120049.png|400|500]]
>![[Pasted image 20220321120434.png|400|500]]

# Merge sort
- Recursively splits the dataset in half until single cells are reached, these cells are then merged and sorted in the process, each sublist requires less iterations than the previous to sort, making merge sort stronger on large datasets

>![[Pasted image 20220324121825.png|400|500]]
recursive version
>![[Pasted image 20220321123512.png|400|500]]

# Heap sort
- Starts by representing the array as a regular tree (min heap) than constructs a max heap (a tree where the parent node is always larger than the child node). 
- This effectively builds the sorted array backwards

>![[Pasted image 20220324120124.png]]
building a max heap starts from the furthest down parent node in this case 5 and then recursively calls other parents, each parent checks if order is maintained if its moved

- We then swap the root node of the max heap with the item at the end of the array, the previous root is then removed

>![[Pasted image 20220324120816.png|100|300]]
>![[Pasted image 20220324120918.png|100|300]]

- The heaping process is then repeated, the second largest number floats to the root node

>![[Pasted image 20220324121135.png]]

- This process can then be iterated until the a full sorted list is created

>![[Pasted image 20220324121304.png|100|300]]

- Code summary

>![[Pasted image 20220324121537.png|500|500]]

# Quick sort
- An inplace recursive sorting algorithm, involves getting each item in its correct location one at a time. Works by selecting a pivot element and partitioning the other elements into sub arrays
- The pivot in quicksort aims to be the middlemost element but this is done in many ways such as:
1. Always selecting first/last element
2. Pick random last element
3. Pick random element
4. Pick median
- At the end of an iteration the pivot should be in its correct final position with all elements in front being larger and all elements behind being smaller

>![[Pasted image 20220613114902.png]]

## Median of three partition method
- Selects the first middle and last element of the array, these are then sorted properly before the middle item is chosen as the pivot 

>![[Pasted image 20220329134709.png]]
in this case 4 is chosen

# Tree sort 
- Inserts all items in a binary tree using less / greater than comparisons to determine the branch to insert to.
- Once all items are inserted, in order traversal is used to retrieve items in a sorted list. Worst case occurs in both sorted and reverse sorted lists, algorithm is also not in place

>![[Pasted image 20220519135523.png]]

# Radix / bucket sort
- Involves the concept of buckets rather than comparison through the use of repeatedly using the radix, most effective when there are a small number of keys (10 digits long is better than 100 digits)
- Works by comparing each digit one at a time resulting in a sorted list upon the final iteration
- Example LSD radix sort:

>![[Pasted image 20220331234442.png]]
# Common sorting algorithm time complexity
>![[Pasted image 20220519014130.png]]
inplace means the algorithm only uses the data structure its given in the sorting process 


>![[Pasted image 20220325120953.png]]
>![[Pasted image 20220325121014.png]]