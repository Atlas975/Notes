> [!important]- Metadata
> **Groups:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 11:51
> ```dataviewjs
>   let loc = dv.current().file.path;
>   let cur = dv.page(loc).file;
>   let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>   let paths = new Set(links.filter(p => !p.endsWith(".png")));
>   paths.delete(loc);
>   let data = dv.array(Array.from(paths)).map(p => dv.fileLink(p));
> dv.list(data);
> ```

___
# Paging
- Memory management scheme where a computer stores and retrieves data from **secondary storage** for use in **main memory**, helps avoid **external fragmentation** whilst using non-continuous memory allocation.
- Mapping from virtual to physical addresses done by MMU
- Divides memory into blocks. Similar to segmentation, a per process table exists to map from logical addresses to physical addresses.
## Page tables

![[Pasted image 20221212155102.png|500]]

- Lower bits represent an offset of fixed size (traditionally 4k bytes).
- Upper bits page number, giving a key in the page table
	- **Page**: logical block in memory 
	- **Frame**: physical block in memory
	- Page size = frame size, this is always the case

![[Pasted image 20221212211502.png|650|650]]inv stands for invalid bit and acts as an indicator that the frame is in virtual memory, this is also known as a **page fault**

- unlike segmentation, no addition goes on internally, the page is instead mapped to its respective frame directly  
- This is an advantage as while a process can be taught of as a set of memory, instead of having a constrained limit, a process can extend the whole of working memory.

![[Pasted image 20221212155211.png|450]]

- This memory can be larger than the space available on the machine with a program existing as a set of blocks with a gap for extending the stack or heap.
- Because a translation is occurring, two processes can be talking about the same region in memory with distinct physical frames.

![[Pasted image 20221212155851.png|450]]

- When paging is enabled, every address becomes subject to translation, making setting up page tables correctly essential or else no memory addresses will point to a correct space
- [[Multi-Process_systems|multi-process]] paging from enabling paging, same logical addresses, different physical blocks for each process:  

![[Pasted image 20221212160140.png|450]]

- Blocks of memory can be easily shared with paging provided the page tables in both processes point to the same physical address. Useful for inter-process communication eg shared libraries 

![[Pasted image 20221212160328.png|450]]

## Page fault
- When a desired page in a page table is present in secondary storage / virtual memory instead of primary memory 
- When this occurs, a page trap / interrupt signal is generated. This is a high priority interrupt. An OS retrieves a free frame through the following process:

![[Pasted image 20221213081845.png|700|675]]

- Once a frame number is retrieved and cached in the page table, this process does not need to be run again.
- The **effective access time** (EAT) of a paging scheme is: 

>$$\text{EAT}= (1-P) * \text{memory access} + (P*\text{page fault overhead})$$
>$$P = \mathbb{P}\text{(page fault)}$$

![[Pasted image 20221216111909.png|450|450]]

## Hierarchical / Multi-level paging
- Very few processes will require access to every page in a system, a solution is needed to deal with increasing size of address space in modern machines
- The page table size problem describes how many entries a table will need to have due to page size. This needs to be broken down to allow for smaller passed in page sizes 

![[Pasted image 20221212220730.png|450]]

- This is where a hierarchy of page translations comes in, Multi-level paging allows page tables to be present in secondary memory as only the first table needs to be present in RAM.
- This minimises the amount of memory that needs to be kept in RAM to access all of a processes data

![[Pasted image 20221212214835.png|450]]
> upper bits act as an index to page directory, much more efficient in memory storage 
![[Pasted image 20221212215411.png|450]]

- One solution to avoid deeply nested structures is to increase page size. Some processors are also able to have a mixture of page sizes 
- Per process limit exists for pages that can be cached, imposed by OS, drop in performance occurs when entries need to be replaced 
- A page entry is checked for validity using a **present flag**

![[Pasted image 20221216112120.png|450|450]]
### Hashed page tables
- Another solution to efficient indexing, hash function is more expensive but gives an index that can point to a much smaller table for page access 
- A good hash function should have minimal collisions to allow for efficient searching

![[Pasted image 20221212215918.png|500]]

### Inverted page tables
- One entry for each frame, table used for all processes 
- Combines the PID and page number to be used as a unique identifier in the table 

![[Pasted image 20221212220146.png|500]]

## Demand paging
- Starts process with partial or even empty page tables 
- Reference to allocated memory results in a page fault (invoked through [[Input&Output_systems#Interrupts|interrupt]])
- **page fault handler** does the following:
	- If necessary, create new page table, attaches it to page directory 
	- Allocate physical memory for frame and retrieves code or data from disk
- Memory for a process can be scaled overtime based on the memory references its making, useful for running several processes in constrained amounts of physical memory 

![[Pasted image 20221212221901.png|500]]

## Shared memory paging
- Paging can be utilized as a way to create shared memory between processes
- Useful for shared libraries such as standard OS or math libs

![[Pasted image 20221212224501.png|450|450]]the metadata in each process is used by the loader to ensure any requested libraries already exists in memory

- Example of shared library execution:

![[Pasted image 20221213011529.png|450|450]]

## Translation look-aside buffer (TLB)
- Accessing pages even through a memory hierarchy is an expensive process 
- Alternative  methods for handling this include:
	- **Register based page tables**: fast but limited capacity
	- **Memory based page tables**: capacity limited by memory, slow access (these still need to go through the translation table)
	- **Translation  look-aside buffer**: hybrid, maintain cache of page to frame translations, each entry only valid for single process
- A common caching pattern is to cache an already accessed location or the ones adjacent to it as these are likely to be frequently accessed 
- Mappings such as for kernel processes may be pinned in the cache, pinning can free up space in mapping

![[Pasted image 20221213013402.png|450]]

- An alternative caching approach instead of a pure [[Linked_list_algorithms#LRU cache|LRU]] cache is to persistently store the PID of a running process. 
- By storing the PID and its respective entry instead of flushing the cache, there's a reduced risk of losing the mapping of a running process whenever the MMU attends to another process.

![[Pasted image 20221213014627.png|450]]


## Speeding up process creation
- The paging system provides a way to speed up process creation 
- Early versions of process fork() cloned a parent process and then proceeded to replace that memory with code and data corresponding to the new process, this is wasteful work
- Paging allows replicating page tables mapped to logical and physical addresses that the parent process originally had, the child process is able to see the same memory as the parent 

![[Pasted image 20221213020234.png|250]] 

- All pages need to be marked as read-only when a child is created, this is to avoid corrupting memory for other processes 

![[Pasted image 20221213020058.png|400]]
![[Pasted image 20221213020337.png|400]]

- A page fault is thrown whenever a parent or child attempts to write to these pages
### Process write attempt

![[Pasted image 20221213020611.png|400]]
![[Pasted image 20221213020655.png|400]]
![[Pasted image 20221213020722.png|400]]

- Note how overhead only occurs for cloned processes when a write is performed, much more memory efficient than creating a deep copy of a parent process 

# Virtual memory
- A virtual page can theoretically be mapped to any physical frame on a system
- A processes physical frame does not need to follow any sort of consecutive ordering 
- Its also possible than when a page is accessed , that the physical frame wont be the same as the shadow copy on disk as this change has not yet been pushed

![[Pasted image 20221216122334.png|450|450]]

- The process of finding out if this is true can quickly be checked via the dirty bit in the control portion of the page directory. This indicates that the in memory copy differs from the one available on disk so an update is required

![[Pasted image 20221216122745.png|450|450]]

- The page will then be invalidated and the translation that allows the process to to access said page will be removed
- The process can then be restarted and the process will be able to access the appropriate page in [[Computer_memory#Swap space|swap space]]

![[Pasted image 20221216123136.png|450|450]]

