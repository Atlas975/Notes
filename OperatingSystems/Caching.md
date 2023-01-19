---
aliases: [cache]
---

> [!important]- Metadata
> **Tags:** #OperatingSystems #Algorithms #Databases
> **Located:** OperatingSystems
> **Created:** 02/01/2023 - 11:37
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
# Caching
- The memory requirement of a process is typically much smaller than its storage requirement. Caching allows the quick retrieval of data that's actively being used. 
- Various cache types exists depending on frequency use:
## Level 1 cache
- Fastest memory in a computer system and the smallest 
- Holds data that a CPU is most likely to need when completing a task 
- Typically split between two cache types **instruction** (information about what the CPU should perform) & **data** (the data the operation is performed on)

## Level 2 cache
- Slower than L1 cache but larger in space 
- May also be part of the processor itself along with the L1 cache 

## Level 3 cache
- Largest and slowest cache 
- Shared by multiple cores in [[Processors]]

> ![[Pasted image 20230115165412.png|450|450]]

## Cache placement

> ![[Pasted image 20230115165646.png|500|500]]

- Data may be added to a cache based on two approaches:
	- **Spatial locality**:  nearby memory locations are likely to be referred to again 
	- **Temporal locality:** follows [[LRU]] principle, recently accessed may be used again

# Caching pitfalls
## Coldstart initialisation
- When an empty cache is initialised, it offers no performance speed ups due to constant cache misses with the majority of reads coming directly from disk 
- A cache is warm once its begun storing values and cache misses become less common

> ![[Pasted image 20230119131838.png|450|450]]

## Coldstart replacement
- AKA the "new item problem" ,  when requests are being made before enough information is gathered to pick an effective eviction scheme such as [[LRU]] or [[LFU]] 
- This can happen when the cache is empty or there's a sudden burst of new requests not already present in the cache 
- Since the cache has no knowledge of how these new items are going to be used, **random replacement** may be more optimal due to it's reduced overhead and the lack of a need for more complex algorithmic eviction schemes
- Other useful ways to combat this issue include:
	- Increased cache size, gives cache more time to determine optimal eviction scheme before items begin to be removed
	- Hybrid algorithm that uses, random replacement or another low overhead eviction method when cache is empty while switching to an algorithm like [[LRU]] / [[LFU]] when filled
