

# Abstract_data_types
#ADTs     created: 2022-12-22 08:28

---
[[Sets]][[Functions]][[OOP_principles]] 
- An ADT defines what operations a data structure can perform, abstracting how the data type is implemented.
- Does not specify algorithms used to perform operations or how data is organized in memory.


# Data structures vs abstract data
- Data structures are the physical representation of the structure of data that's stored.
- Abstract data types is both the data structure and the procedures/functions that manipulate the data.

>![[Pasted image 20211115121905.png]]

# Queue
- Works on a first in first out principle (FIFO)
- It is an ordered collection of items where items are added on the rear and removed at the front
- Operating systems make use of queues to allocate resources fairly.
- Main functions:

> ![[Pasted image 20211114173521.png]]
# Stack
- Works on a first in last out principle (FILO)
- Use of stack include: function call stacks in a running program, navigating a maze, reversing a list

## Stack API
>void push(item)  
item pop()  
item peek()

# Priority queue
- Adds another level of complexity to queues where the priority of an item can override its position
- In this case the queue mains a set of queues for each priority, where the first item in each priority is kept in front
## Starvation problem
- Starvation: too many elements in a higher priority means lower priority queues never get accessed

# Arrays 
## Array pros
- A single name can be used to represent multiple data types
- Index positions can be used to quickly access values stored at different positions, faster than sequential searching.
## Array cons
- Arrays are of fixed size that can't be extended.
- Inserting and deleting from arrays is difficult 

## Method of direct access to array element
>![[Pasted image 20211213185052.png]]
- Visual example:

>![[Pasted image 20211213185148.png]]

# Strings
- Strings can be seen as a 1D array of characters. Characters literals (AKA letters) are encoded in ASCII.
- ASCII is 7 bit integer code, so it can comfortably be stored in a byte.
## Num of bytes needed for 'Hello World!'
![[Pasted image 20211118105446.png]]
- 14 bytes are needed a byte is dedicated at the end called a 'null byte' (\0). All string in C end with it.
- The null byte acts as a terminating condition for a string to know when to stop reading it.


# ADT vs Data structure

[[Abstract_data_types]]

- An ADT is typically defined by its behavior in the users point of view, excluding implementation details
- Data structures are typically the concrete representations of data from the implementer point of view

## ADT example with sets
[[Sets]]
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