---
alias: unix file 
---
> [!important]- Metadata
> **Tags:** #OperatingSystems #DesignPatterns 
> **Located:** OperatingSystems/FileSystems
> **Created:** 22/01/2023 - 12:39
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
# Unix file system
- A multi-level indexed based [[File_systems|file system]]. Small files get directly linked, large files get broken down into smaller blocks with increased access time. This means that this combined index-based implementation uses an direct index for the first few block and an indirect index for the rest
- This scheme exists for every individual file,  reducing overhead of storing the index and balancing the trade-off between performance and flexibility.

![[Pasted image 20221209122505.png|450|450]]
## Unix directory structure

![[Pasted image 20221209124941.png|450]]

- File lookup follows a sequential approach, filename caches can be used to speed up access

![[Pasted image 20221209125500.png|450]]

## Block size efficiency
- Large block sizes allow for quick access to large files as more blocks have reduced access time, this comes at the cost of disk space wastage as more files use more space than needed resulting in internal fragmentation

![[Pasted image 20221209130107.png|500]]

- Optimal efficiency when block and average file size match, as file sizes increase over time there has been movement towards larger blocksize standards
- Some filesystems can allocate fragments of a block

## Open file descriptor table
- Child processes need to inherit all file descriptors and positions of a parent process.
- To optimise how a file system is traversed, Unix will have a file descriptor table for quick process creation

![[Pasted image 20221209131225.png|400|400]]

## Hard links
- Similar to a programming languages garbage collection system, the reference count is used to determine when data can be disposed of. Links this way are considered hard links.
- This is limited to only a single filesystem type as it must enter a directory

![[Pasted image 20221209123424.png|400|400]]

## Symbolic links
- Symbolic links create a file that contains a link to the linked file
- This linking form isn't constrained by file system, can be within virtual file system

![[Pasted image 20221209123455.png|400|400]]

- Since a hard link isn't created, this method does not know if a file really exists, this can result in broken links / null-pointers

![[Pasted image 20221209124802.png|400|400]]
