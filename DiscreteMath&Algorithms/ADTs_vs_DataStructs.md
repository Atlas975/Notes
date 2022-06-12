# ADT vs Data structure

[[Abstract_data_types]]

%%- An ADT is typically defined by its behavior in the users point of view, excluding implementation details
- Data structures are typically the concrete representations of data from the implementer point of view.%% 

## ADT example with sets
- Every item must be unique
- An equality check must exist to prevent duplicates
- Set content must be unordered (implementation does not need to use the order in which items were added)
- Set examples:
>![[Pasted image 20220224104749.png]]
## ADT example with lists
- Lists must be ordered
- Must be able to retrieve data in an ordered way corresponding to how data was added
- Unlike sets, a list does not know anything about the data as long as it is of valid type, the same item can appear multiple times
- List examples:
>![[Pasted image 20220224105459.png]]

## ADT Arrays vs linked lists
- Arrays work by asking the operating system to allocate continuous blocks of memory, array elements can be accessed in O(1) given their position.
- A linked list works by separately allocating memory for each individual cell in a data structure, they do not have to be continuous. It asks for the memory equivalent of a cell + enough memory to store a reference to next cell 