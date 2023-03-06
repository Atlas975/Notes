> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems/FileSystems
> **Created:** 05/03/2023 - 21:06
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# File allocation schemes
-   File allocation schemes are methods used by a [[File_systems|file system]] to manage how files are stored on a storage medium such as a hard disk drive / solid-state drive.
-   These schemes typically determine how file data is allocated and organised on the disk, how file metadata is stored, and how [[Computer_memory|memory]] on the disk is managed and allocated for new files.
## Continuous allocation
- Each file fills set of adjacent blocks, fast access and minimal head movement 
- Requires knowing file size before finding a suitable hole for allocation, suffers from external fragmentation. File growth beyond allocated space can be costly due to copying

![[Pasted image 20230305205625.png|250|250]]
## Linked-List allocation
- Each file is part of a linked list of blocks that can be scattered, avoids external fragmentation. All blocks can be used and files can easily grow overtime
- Pointers also take up space leaving minor internal fragmentation (restricted to last block) and only offers slow sequential access, ideal for small file systems such as [[FAT_file_system|FAT]]. 

![[Pasted image 20230305205753.png|250|250]]
## Clustering allocation 
- Avoids the overhead of pointers existing in each block in [[#Linked-List allocation]] by grouping blocks together and linking only the groups with pointers. 
- Internal fragmentation if the whole allocated cluster is not used, also results in a penalty to [[Input&Output_systems|I/O]] as large data clusters come in even when a small portion of memory is requested 

![[Pasted image 20230306145209.png|250|250]]
- This also helps limit the risk of data corruption in a linked list, doubly linked lists can also be used for added security at the cost of additional overhead
## Indexed allocation
- Moves all pointers to one location that acts as an index blocks, no external fragmentation like [[#Linked-List allocation]] while still offering fast random access like [[#Continuous allocation]]
- Quick access to any position in a file  by knowing the block offset to jump past.
- Various ways exist to [[Computer_memory#Consecutive memory mapping|handle indexed allocation]], all of which involve an index block that holds a set of addresses. This index block itself  cannot be used to store usable data 

![[Pasted image 20230305210041.png|300|300]]

- Limited file size with only room for n block pointers in index blocks, this can be remedied by linking to other index blocks to acc
- Multi-level indexing supports large file sizes and the number of indexes can be tuned to the max desired file size. Increase to access time and overhead with deeper levels

![[Pasted image 20221208230819.png|400]]

- [[Unix_file_system|Unix files]] use a combined approach with direct indexing for small files and multi-level indexing for large files, retaining speed where possible

![[Pasted image 20221208231007.png|400]]
