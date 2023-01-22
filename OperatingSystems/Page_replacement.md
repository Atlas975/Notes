> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 17/01/2023 - 12:39
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
# Page replacement
- The scenario where a page from [[Computer_memory#Primary memory / Non-volatile|primary memory]] must be replaced by a page from secondary memory due to a [[Paging#Page fault|Page fault]]
- [[Paging|Page memory]] allocation can follow one of two schemes 
	- **Equal allocation**: each process gets m/n frames (for memory size m), not ideal for processes that have distinct memory requirements but minimal overhead for allocation
	- **Proportional allocation**: allocation done based on size of process 
$$\begin{align*}
\text{for processes}\ p_{i} \ \text{of size}\ s_{i}\\
\text{total size S} =\sum{s_{i}}\\
\text{allocation }a_{i}\text{ for }p_{i} \text{ will be:}\\
a_{i}=\frac{s_{i}}{S\times m}\text{ frames}
\end{align*}$$
- Page replacement can either be:
	- **Local**: when a process cannot take frames from other processes 
	- **Global**: when frames can be taken from any process, requires management
- Frame replacement process:

> ![[Pasted image 20230118115012.png|450|450]]

## Thrashing problem
- When too few frames are allocated to a process, resulting in a high number of [[Paging#Page fault|page faults]]
- A high number of page faults is an indicator of this as pages keep getting pushed to disk
- [[Processors|CPU]] work drops as resources allocated to paging in / out, resulting in minimal useful work

> ![[Pasted image 20230118114738.png|350|350]]

- This can be limited via local page replacement, this avoids a memory hungry process from creating page fault for other processes. This limits thrashing to a single process 

## Replacement speed up methods
1. The dirty bit can be used to indicate when a page held in primary memory does not match it's counterpart on disk
2. When a [[Processors|processor]] is idle, it can attempt to free up pages in reserve to be used, this allows for a process to immediately be restarted after it's page request
3. Idle time can be used to keep a queue of victims for page replacement, this can include pages that have their dirty bit set. This allows two kinds of page faults, the latter being faster:
        - **Hard page fault:** page is only present on disk or copy in primary memory is outdated 
        - **Soft page fault**: page isn't part of a processes page table, but it still sits in primary memory 

# Frame replacement algorithms
- The working set of pages for a process constantly changes as only a subset of pages get regular usage at a time (principle of locality)
- The **locality of reference** suggests that page usage is repetitive

> ![[Pasted image 20230118182606.png|450|450]]
- A process that runs for longer periods of time will require page replacement victims as the working set shifts 
- There are two types of page sets in memory 
    - **Working set**: set of pages a process would like in memory, varies throughout execution
    - **Resident set**: set of pages actually in memory, this is the maximum amount of pages during a processes lifetime
- Various algorithms to attempt to optimally keep up with the working set of pages 

## FIFO

> ![[Pasted image 20221213163334.png|450|450]]

- Not ideal for caching pages that are frequently used 
- For instance, initial pages likely hold key parts of process such as global variables / libraries which are highly likely to remain in working set
## LRU

> ![[Pasted image 20221213163450.png|450|450]]

- More overhead but fewer page faults
- This level of abstraction is expensive and may often be unavailable, as it requires either keeping count of page accesses or the use of a [[LRU#LRU algorithm|doubly linked list]]

> ![[Pasted image 20221213163525.png|450|450]]

- OS support for this exists in the form of the **accesses bit** which unlike the dirty bit is modified during either a read or write instead of just on write operations

> ![[Pasted image 20230118184433.png|450|450]]

## Second chance / clock
- A circular list of of pages is kept (page tables can be walked through recursively)
- This looks for a frame whose access bit is set to 0 and then replaces it, less overhead than an [[LRU]] cache 

> ![[Pasted image 20230118185107.png|450|450]]

- With [[Bit_manipulation|Bit manipulation]] this can emulate the use of an [[LFU]] cache
- This makes use of the access bit, with a right shift used after a specified amount of time elapses and new usage pushing to the highest bit (left)

> ![[Pasted image 20230118185713.png|450|450]]

### Working set replacement
- This method can also be used periodically perform working set replacement 
- These periodic time intervals should be a minimum of twice the period taken to calculate a working set for a process 

> ![[Pasted image 20230118191045.png|450|450]]

- Pages not in working set should be queued to be written out to disk
- Each process also has a **page fault frequency** which should be monitored
    - **Low frequency**: working set too large, can be shrunk to preserve memory 
    - **High frequency**: working set too small, runs into thrashing problem. If this is the case it may also be worth pausing the process to free pages 
