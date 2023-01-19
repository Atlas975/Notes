---
alias: file
---
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
# File systems
- The part of an [[Operating_system_design|operating system]] responsible for taking storage devices and providing structure to place and retrieve files
- Common file system operations include:
	- Create, open, read, write (from current position), seek (reposition from file), close, link  (create file alias or hard link), and unlink  (remove file alias) fil
- Access types include read, write, execute, append, delete and list
- Shared files created directed acyclic [[Graphs|graphs]]

> ![[Pasted image 20221208222431.png|500]]

- Common file attributes include
  - Name, unique ID, file type, location, sizeaccess control lists / flags ([[Linux_permissions]]), time and date (accessed / modified) and ownership (user / group)
## Virtual file systems
- When more than one device exists in a file system, a VFS is used to provide a system level view of multiple file-systems types at once
- File systems reflect the characteristics of their device,  the VFS has an API that reflects the operations that can be carried out on these distinct file system structures.
- In Unix, external file systems that are added are controlled through the **mount** command

> ![[Pasted image 20221208224055.png|500]]

# File allocation schemes
## Continuous allocation
- Each file fills set of **adjacent** disk blocks in file system, fast access
- Requires knowing file size before finding gap for allocation, suffers from external fragmentation with unused blocks between files. Files cannot be split in this scheme into multiple blocks
## Linked-List allocation
- Avoids external fragmentation, blocks no longer need to be continuous at the cost of additional overhead. All blocks can be used but pointers take up space
- Internal fragmentation (on last block) and only offers slow sequential access, only ideal for small file systems

> ![[Pasted image 20221208225738.png|500]]

## Indexed allocation
- Quick access to any position, simple mapping to specific blocks by simply knowing the block offset to jump past.
- Supports **holes**, does not allocate space for empty blocks. Anything that just contains 0's can be represented by a null pointer
- [[Computer_memory#Consecutive memory mapping|Multiple way to handle indexed allocation]]

> linked![[Pasted image 20221208230355.png|300]]
> index block holds set of block addresses

- While simple and fast, this method has limited file size with only room for n block pointers in index block
- Multi-level indexing supports large file sizes and the number of indexes can be tuned to max desired file size. Increase to access time and overhead with added levels

> multi-level ![[Pasted image 20221208230819.png|400]]

- Unix uses a combined approach with index for small files and multi-level for large files, retaining speed where possible

> linked + multi-level![[Pasted image 20221208231007.png|400]]

# FAT file systems
- Commonly used for small file systems such as removable media
- [[Linked_list_algorithms|Linked list]] allocation scheme, only sequential access is allowed
- This avoids external fragmentation as blocks no longer need to be continuous, internal fragmentation is confined only to the last block, sequential access to blocks only

> ![[Pasted image 20221209121034.png|500]]

- FAT systems get around the speed penalty of only sequential access by having separate pointers for data blocks, allowing fast access of any block. This is known as the file allocation table (FAT)
- Multiple copies of this are usually kept in case of corruption to recover structure, the FAT also needs to be small enough to be stored in memory for fast access. Avoiding having to perform disk access for each traversal

# Unix file system
- A multi-level indexed based file system. Small files get directly linked, large files get broken down into smaller blocks with increased access time

> this exists for every file![[Pasted image 20221209122505.png|500]]

## Unix directory structure

> ![[Pasted image 20221209124941.png|450]]

- File lookup follows a sequential approach, filename caches can be used to speed up access

> ![[Pasted image 20221209125500.png|450]]

## Block size efficiency
- Large block sizes allow for quick access to large files as more blocks have reduced access time, this comes at the cost of disk space wastage as more files use more space than needed resulting in internal fragmentation

> ![[Pasted image 20221209130107.png|500]]

- Optimal efficiency when block and average file size match, as file sizes increase over time there has been movement towards larger blocksize standards
- Some filesystems can allocate fragments of a block

## Open file descriptor table
- Child processes need to inherit all file descriptors and positions of a parent process.
- To optimise how a file system is traversed, Unix will have a file descriptor table for quick process creation

> ![[Pasted image 20221209131225.png|500]]

## Hard links
- Similar to a programming languages garbage collection system, the reference count is used to determine when data can be disposed of. Links this way are considered hard links.
- This is limited to only a single filesystem type as it must enter a directory

> ![[Pasted image 20221209123424.png|425]]

## Symbolic links
- Symbolic links create a file that contains a link to the linked file
- This linking form isn't constrained by file system, can be within virtual file system

> ![[Pasted image 20221209123455.png|450]]

- Since a hard link isn't created, this method does not know if a file really exists, this can result in broken links / null-pointers

> ![[Pasted image 20221209124802.png|450]]

# File system performance
- File systems need to be responsive, a variety of methods have been developed in order to help remedy the limitations of various file systems
## Kernel tables
- The Inode (active index node) describes the structure of a file and the blocks that reside in it
- This is a frequently used data structure that can be optimized through [[Caching]]

> ![[Pasted image 20221209132417.png|500]]
> note the inode only makes sense in its filesystem so both the inode and the filesystem need to be remembered when accessing the cache

## Buffering and block caches
- Blocks de-couple the reads a process is doing from the physical movement of the disk head
- Block caches further help with this for small read and writes, allowing changes to be done on a block level rather than going to the underlying filesystem
- However, some media may be removable, meaning a copy of writes to memory blocks needs to be frequently pushed to the physical medium. Write-through caches are used in this case

> ![[Pasted image 20221209152836.png|450]]I/O tells us where these blocks are on disk, any process is going to view a file formed from multiple blocks. Since these blocks are memory resident they can easily be updated or read via byte operations

- Efficient buffering can be managed by an [[Linked_list_algorithms#LRU cache|LRU cache]]

> empty blocks can be reused rather than managing the overhead of freeing memory, blocks in the empty pool can be filled with data and placed on the LRU cache![[Pasted image 20221209153713.png|500]]

> collisions may still occur, resulting in a linked list chain to access data![[Pasted image 20221209153917.png|500]]

## Filesystem flush / sync
- Internal buffers must be regularly flushed / synced to disk, protecting against lost data in event of a system failure. This also speeds up the use of the [[LRU]]  cache by keeping it small. Any modified buffers must be written out before reuse
- Entries that are changed are marked with a dirty flag to track updated data
- A [[Operating_system_design#System calls|system call]] can force a flush to occur
### Allocate on flush
- By grouping block requests together, further optimisations can be made on a flush.
- Blocks requested can be kept adjacent on disk for fast retrieval by allocating blocks for a request continuously in memory
- This allows files to grow in memory before disk writes.
- This also makes file reads more efficient with less head movement, fragmentation and meta-data (block pointers and indexes to process)
- Applications can use pre-allocation with **fallocate()**

> ![[Pasted image 20221209155318.png|300]]

## Database style indexing
- Database style index structures can be used to hold directory information for a file system
- Trees of extents can exist, good for very deeply nested file systems

## Fine grained timestamps
- With lots of machines on a shared system, timing becomes important for read / writes
- Fast times are needed but is expensive as the OS should not be allocating large portions of resources to manage timers

## Hash based data duplication
- Not storing multiple copies of same data, by calculating hash of all blocks in a filesystem, duplicate hashes can be found. These can then be checked if they're carrying similar data
- Instead of storing similar copies of files, these can be replaced by links
