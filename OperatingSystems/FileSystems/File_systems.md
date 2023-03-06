---
alias: file, file system
---

> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems/FileSystems
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# File systems
- The part of an [[Operating_system_design|operating system]] responsible for taking storage devices and providing structure to place and retrieve files
- Access types include read, write, execute, append, delete and list
- Shared files created through directed acyclic [[Graphs|graphs]]

![[Pasted image 20221208222431.png|400|400]]

- Common file attributes include
  - Name, unique ID, file type, location, sizeaccess control lists / flags ([[Linux_permissions|Linux permissions]]), time and date (accessed / modified) and ownership (user / group)
## File headers
- Acts as a file descriptor containing information needed by programs accessing file records 
- Holds vital information for determining disk addresses of file blocks, record format descriptions, type codes, order of fields, separators etc 


## File operations
- **Open**: prepares file for reading/writing, allocates buffers to hold file blocks from disk. This operation also retrieves the [[#File headers|file header]] and sets a pointer to the beginning of a file
	- Two buffers usually exist so that reading and writing can be done [[Concurrency|concurrently]]
- **Reset**: set file pointer back to beginning of a file
- **Find:** search for records satisfying search condition 
- **Links / Unlink**: create / remove a file alias respectively
- **FindNext**: [[Iterator_pattern|iterates]] to the next matching record in file 
- **Get**: copies current record from buffer to program variable, might also advance file pointer
- **Delete**: deletes current record, updates file to reflect this 
- **Modify**: modifies fields for current record, updates file to reflect this
- **Insert**: locates block where record is to be inserted, transfers block to main memory buffer, writes record to buffer and writes the buffer to disk
- **Close**: releases buffers and performs any cleanup operations required
### File operation types
- With the exception of open and close, all previous operations are **record-at-a-time** meaning they read and act on a single record 
- **FindAll**, **FindOrdered** and **Reorganise** are examples of **set-at-a-time** operations which act upon multiple files 
## Virtual file systems
- When more than one device exists in a file system, a VFS is used to provide a system level view of multiple file-systems types at once
- File systems reflect the characteristics of their device,  the VFS has an API that reflects the operations that can be carried out on these distinct file system structures.
- In Unix, external file systems that are added are controlled through the **mount** command

![[Pasted image 20221208224055.png|400|400]]


# File system performance
- File systems need to be responsive, a variety of methods have been developed in order to help remedy the limitations of various file systems
## Kernel tables
- The Inode (active index node) describes the structure of a file / directory and the blocks that reside in it. This is a frequently used data structure that can be optimized through [[Caching]]
- The inode only makes sense in its filesystem so both the inode and the filesystem type need to be remembered when accessing the cache

![[Pasted image 20221209132417.png|450|450]]

## Buffering and block caches
- Blocks de-couple the reads a process is doing from the physical movement of the disk head
- Block caches further help with this for small read and writes, allowing changes to be done on a block level rather than going to the underlying filesystem
- However, some media may be removable, meaning a copy of writes to memory blocks needs to be frequently pushed to the physical medium. [[Caching#Write-through|Write-through caches]] are used in this case

![[Pasted image 20221209152836.png|400|400]]

- [[Input&Output_systems|I/O]] tells us where these blocks are on disk, any process is going to view a file formed from multiple blocks. 
- Since these blocks are memory resident they can easily be updated or read via byte operations
- Efficient buffering can be managed by an [[Linked_list_algorithms#LRU cache|LRU cache]]
- This allows empty blocks to be reused rather than managing the overhead of freeing memory, blocks in the empty pool can be filled with data and placed on the LRU cache

![[Pasted image 20221209153713.png|450|450]]

- collisions may still occur, resulting in a linked list chain to access data

![[Pasted image 20221209153917.png|450|450]]


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

![[Pasted image 20221209155318.png|300]]

## Database style indexing
- Database style index structures can be used to hold directory information for a file system
- Trees of extents can exist, good for very deeply nested file systems

## Fine grained timestamps
- With lots of machines on a shared system, timing becomes important for read / writes
- Fast times are needed but is expensive as the OS should not be allocating large portions of resources to manage timers

## Hash based data duplication
- Not storing multiple copies of same data, by calculating hash of all blocks in a filesystem, duplicate hashes can be found. These can then be checked if they're carrying similar data
- Instead of storing similar copies of files, these can be replaced by links
