> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 09:28
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Computer memory

![[Pasted image 20211116110439.png|450|450]]

## Primary memory
- **Volatile memory**
- Primary memory is a device designed for [[DigitalSystem_design|storing information]] (bits) for immediate use in a computer.
- Not part of the CPU.
- The CPU uses a program counter to get an address and then sends it to the memory to access this instruction.
- Memory is usually organised into multiple memory chips

### Volatile memory
- Only used while computer is active, data wipes when computer is shutdown making it volatile.
- In contrast to ROM, which contains the computers start up instructions.
- RAM is an example of volatile memory, but cache memory is faster as its closer to the CPU.
- There are two types of volatile memory:
### Dynamic (main) memory
- Slower than static but cheaper.
- Bits stored by charging and discharging a device
- Bits are read by sensing the presence/absence of stored charge.
- Looks like pigeon holes, where each hole stores one unit of data and each location having an address. These addresses are usually linear: 1,2,3.
### Static memory
- Involves the allocation of memory during compile time before actual program execution.
- A network of logic circuits are used to build storage of individual bits.

## Secondary memory
- **Non-volatile**
- Stores data that the computer is not currently using 
- Slower than primary memory and cannot be directly accessed by processors 
- Used by hard drives, USBs etc
## Swap space
- A portion of computers hard drive used to store data temporarily when a system runs out of physical / primary memory (RAM)
- This frees up RAM for other uses, essential in [[Paging|paging]]
# Data standards
## Data scale

![[Pasted image 20220607213658.png|600]]

## Byte ordering in multi-byte words
- [[Bitwise_arithmatic|Multi-byte words (eg 8*4=32 bits)]] can be organised in different ways.

![[Pasted image 20211110124619.png|450|450]]

- This needs to be accounted for when performing operation on words or when transferring from one Endian to another.
### Big-endian
- The byte with the lowest memory address holds the most significant byte
### Little-endian
- The byte with the lowest memory address holds the least significant byte

## Data type sizes

![[Pasted image 20220607214052.png|500]]

note that null terminated languages like c will allocate an additional byte for strings to include a null character
## Data alignment
- Data is read and written through chunks, a chunk is a 4 byte word on a 32 bit system,
- **Data alignment** is used to preserve FDE performance, therefore data is put at a memory offset equal to the largest datatype in a struct, using padding when necessary
- Note that unions will only allocate the size of its largest member
- Example with a  [[C_language]] struct

```c
struct student {  // struct is 16 bytes (8 byte alligned)
	char *name;   // pointer is 8 bytes
	int id;       // int is 4 bytes 
};
```

![[Pasted image 20220608082511.png|450|450]]

- A **double** will be 8-byte aligned on Windows and 4-byte aligned on Linux (8-byte with _-malign-double_ compile time option).
- Any **pointer** (eight bytes) will be 8-byte aligned. (e.g.: char*, int*) ( 64 bit systems)
## Alignment problems
- Data alignment can be problematic between different devices, namely the difference in architecture when data is stored or transmitted. The packed attribute helps solve this

```c
struct student {  // struct is 12 bytes (allignment disabled)
	char *name;   // pointer is 8 bytes 
	int id;       // int is 4 bytes
} __attribute__((packed));
```

![[Pasted image 20220608082333.png|450|450]]

# Memory distribution
- When a program is loaded it can be taught of as having two sections, **data & instructions**
- Program memory consists of the stack, heap, static data and code, each of which handles different components of a program. Variables can be of global, local or pointer

![[Pasted image 20211216140228.png|500]]

1. **Stack** function parameters, local variables
2. **Heap** dynamically allocated memory
3. **Data** global variables and initialized data (also known as **BSS** memory)
4. **Text** executable code

- Mapped example

![[Pasted image 20221124235515.png|500]]

- The process stack is a common way of implementing function call, parameters and return addresses are placed on stack before call
- Heap is typically used for data that persists over time such as dynamic structures
## Memory storage
- Where data is stored can influence its content in unpredictable ways
- The stack will naturally deallocate space once a function goes out of scope

````ad-example
```c
#include <stdio.h>
#include <string.h>
char *first()
{
	char first_buff[7];
	return strcpy(first_buff, "Hello");
}
char *second()
{
	char second_buff[7];
	return strcpy(second_buff, "World!");
}
int main()
{
	char *str1 = first();
	char *str2 = second();
	printf("%s %s\n", str1, str2);
}

// prints "World! World!" deallocates stack memory, saved in same memory
````

- Static memory persists, resulting in buffers being saved on BSS

````ad-example
```c
#include <stdio.h>
#include <string.h>
char *first()
{
	static char first_buff[7];
	return strcpy(first_buff, "Hello");
}
char *second()
{
	static char second_buff[7];
	return strcpy(second_buff, "World!");
}
int main()
{
	char *str1 = first();
	char *str2 = second();
	printf("%s %s\n", str1, str2);
}

// prints "Hello World!" as memory persists on BSS
````

- The Heap allows dynamic memory allocation that also persists, unlike static data however this memory can be deallocated, this is better suited for data that does not need to exist for the complete lifetime of the program

````ad-example
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char *first()
{
	char *first_buff = (char *)malloc(7);
	return strcpy(first_buff, "Hello");
}
char *second()
{
	char *second_buff = (char *)malloc(7);
	return strcpy(second_buff, "World!");
}
int main()
{
	char *str1 = first();
	char *str2 = second();
	printf("%s %s\n", str1, str2);
	free(str1), free(str2);
}

// prints "Hellow World!" as memory allocated on heap
````
# Malloc
[[C_language]]

- Provides dynamic memory allocation from heap, returns pointer to requested memory amount
- Pointer remains and can ONLY be deallocated with **free()**
- Malloc will add metadata to the front of a memory block and keep the rest of the space as free memory

![[Pasted image 20221125114525.png|500]]

free used as an address for pointers, length tells us the amount of memory there, prev & next allows for a chain to be created

![[Pasted image 20221125114807.png|500]]

- Overwriting means risking reading metadata for the next block
- Example of free, moves pointers and destroys metadata:

![[Pasted image 20221125115151.png|500]]

- Alternative Malloc implementation, length indicator tells us if the block is used, plen gives the length of the previous block, also indicating if the block is free.
- This helps with coalescing memory, pointers are only needed for free areas

![[Pasted image 20221125121126.png|500]]

- Malloc also uses a sharding like approach to retrieving memory with multiple (typically 128) free lists for useful sizes eg 2,4,8 bytes. Similar sized allocations are grouped on each disk for efficient searching.

![[Pasted image 20221125153855.png|500]]

## Sbrk
- When Malloc needs additional memory **sbrk()** is called, a function which manages memory at the stop of the heap
- sbrk(+) grows the heap, sbrk(-) pulls down the heap
- Memory tends to be chunked in hardware in 4k blocks called **pages**, optimized for FDE
- Unlike malloc, sbrk does not track or manage free space
- sbrk(0) returns top of current heap stack
## Mmap
- For whole pages allocated in separate memory regions mmap is used
- More efficient for large memory allocation
# Fixed and variable memory allocation
- Fixed memory allocation only allocates the amount of memory requested, doing this requires searching for a free area that meets the needs of that memory allocation request and returning unused memory to the free list.

![[Pasted image 20221125235942.png|150|150]]

- Memory freed by doing this cannot be joined across different requests, resulting in a buildup of small individual free blocks of the same size. 
- There's a chance the application won't ask for memory that fits in these smaller blocks resulting in **fragmentation**
- Fragmentation describes having scattered memory with small unusable blocks, this can buildup over time  and rapidly deplete memory
- With no knowledge of what the application is doing and where pointers to free memory are, defragmentation can become a challenge without an additional structure imposed 
## Dynamic storage allocation schemes
- **First fit / next fit**: always allocate first region of sufficient size (fast)
- **Worst fit**: allocate largest memory hole of sufficient size, optimal to avoid fragmentation 
- **Best fit**: search for and allocate smallest memory hole of sufficient size
## External fragmentation
- Dynamic allocation schemes are an example of external fragmentation, where request amount of memory is allocated and fragmentation takes place outside / between memory that's already been allocated
- This can result in a lack of continuous memory due to scattered small memory chunks that cannot be merged to fill a memory allocation request 
## Internal fragmentation 
- Internal fragmentation is caused by fixed size schemes, memory is allocated in fixed size blocks, processes tend to get more memory than required rounded up to n * blocksize. less problematic as this is bounded by block allocation size and process lifetime
- Internal fragmentation results has the advantage of  knowing that only complete blocks will be returned, however fragmentation occurs as a process may not use all memory allocated 

## Slab allocation
- Example of best fit dynamic allocation, involves **allocating large memory blocks** ie buddy
- Sub-divide area into common sizes as slabs, objects are allocated to slabs based on:
	- Object size 
	- Memory word / cache alignment 
	- Inter-object guard preventing memory overruns 

![[Pasted image 20221126233115.png|500]]

# Buddy allocation
- Method of guaranteeing **continuous memory allocation**, useful for linked data structures 
- This results in blocks / pages that are adjacent in memory 
- Each buddy has 2n bytes, the parent of each block needs to be remembered

![[Pasted image 20221126002506.png|350]]

- Buddies can be combined, reforming the original pair into a larger block, buddies always come from the same parent
- This is useful for allocating memory, as free regions can repeatedly be split until the right sized block is created while still being able to easily rejoin 

![[Pasted image 20221126231350.png|400|400]]

- Note that allocating across buddies for a single request is not allowed, a 512 byte block cannot be allocated alonside a 2K byte block

![[Pasted image 20221126231842.png|400|400]]

- Blue areas in-between indicate fragmentation 

## Buddy freeing
- Blocks from different parents cannot be coalesced, this also requires all leaf nodes to be freed before a join can occur for a parent level

![[Pasted image 20221126232253.png|400|400]]

# Consecutive memory mapping
## Row Major mapping
- Memory is linear, for 2D arrays this means that an array is completed before the next array is stored

![[Pasted image 20211216140607.png|400|400]]
![[Pasted image 20211216140725.png|300|300]]

## Linked mapping
- A header array holds pointers to all individual rows
- Does not involve multiplication for direct access, making access faster
- Extra space is needed for mapping

![[Pasted image 20211216150411.png|300|300]]

- For 3D arrays

![[Pasted image 20211216150601.png|300|300]]

# Memory protection
- Processes need to be protected from each other through memory protection 
- All processes require some concept of a **base** and a **limit** which need to be set to define it's address space. This is essential to avoid the corruption of other processes or overwriting critical Kernel / OS memory space

![[Pasted image 20221212140135.png|400]]

## Memory management unit (MMU)
- Processes still expect zero-based addresses, note that process addresses are non-deterministic on each run.
- Ways to handle zero-based addresses include:
	- Having a loader that rewrites each address after taking in a process (expensive)
	- Have relative base addresses for each process at zero
- Ideally addresses would be dynamically re-mapped, this can be handled by having a **logical address** used in code (0-indexed) and a **physical address** where data is actually stored, this is what actually varies at runtime.

>$$\text{base}+\text{logical address}=\text{physical address}$$

![[Pasted image 20221212142949.png|400]]

- A check is done to see if an address is within memory bounds before adding the base and mapping to physical memory space
- This processes is handled internally by the memory management unit (**MMU**), contains mappings for each process and the logic that performs the check to see if an address is valid

## Segmentation
- A number of elements may exist in a process, each process may consist of multiple individual segments. Segmentation provides a way to have different permission over different individual parts of a process. eg execute permission for code but not data segment 

![[Pasted image 20221212143751.png|300]]

- Works the same as base & limit, but instead of being per-process has an extended table of broken up logical elements known as segments with memory metadata stored in a segment descriptor table

![[Pasted image 20221212145039.png|450]]

- Example segment jump:

![[Pasted image 20221212145251.png|400]]
