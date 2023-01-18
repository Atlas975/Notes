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
> this can sped up further by looking at a page's dirty bit
## Thrashing problem
- When too few frames are allocated to a process, resulting in a high number of [[Paging#Page fault|page faults]]
- A high number of page faults is an indicator of this as pages keep getting pushed to disk
- [[Processors|CPU]] work drops as resources allocated to paging in / out, resulting in minimal useful work

> ![[Pasted image 20230118114738.png|350|350]]

- This can be limited via local page replacement, to avoid a process that uses large amounts of memory from having an external impact. This limits thrashing to a single process 

## Replacement option speed up 
- 