# ADT

- An ADT only defines what operations are performed not how they're implemented.
- Does not specify algorithms used to perform operations or how data is organized in memory.
- Called abstract due to being independent of how its implemented. Abstraction is the process of only providing the essentials.

# Data structures vs abstract data
- Data structures are the physical representation of the structure of data that's stored.
- Abstract data types is both the data structure and the procedures/functions that manipulate the data.
>![[Pasted image 20211115121905.png]]

# Encapsulation 
[[Java]] [[Python_basics]]
>![[Pasted image 20211115120906.png]]
- In OOP, this involves grouping data and its operators in a single unit making programming much more secure.
- Good encapsulation completely hides how data is stored from the users, giving users only an abstract view of how it works.
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
## Challenges
- Starvation: too many elements in a higher priority means lower priority queues never get accessed
# Programming application
- C does not offer encapsulation, Java does (everything is a class due to OOP)
# Arrays
>![[Pasted image 20211115123922.png|400|400]]
- Arrays in C and Java
>![[Pasted image 20211115123959.png|400|400]]
- Java will compile if going index out of bounds but will give an exception, C does not care.
- Some languages such as pascal allow for incrementing from a different lower bound, eg 5-10 with 5 corresponding to whats usually index 0
>ageCounts : array [18 .. 65] of integer;


# Min and max heap 
>![[Pasted image 20220614092249.png]]

# Strings
- Strings can be seen as a 1D array of characters. Characters literals (AKA letters) are encoded in ASCII.
- ASCII is 7 bit integer code, so it can comfortably be stored in a byte.
## Num of bytes needed for 'Hello World!'
![[Pasted image 20211118105446.png]]
- 14 bytes are needed a byte is dedicated at the end called a 'null byte' (\0). All string in C end with it.
- The null byte acts as a terminating condition for a string to know when to stop reading it.