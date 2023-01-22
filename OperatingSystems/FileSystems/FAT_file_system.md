---
alias: FAT
---
> [!important]- Metadata
> **Tags:** #OperatingSystems #ADTs 
> **Located:** OperatingSystems/FileSystems
> **Created:** 22/01/2023 - 12:37
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
# FAT file system
- Commonly used for small [[File_systems|file system]] such as removable media
- [[Linked_list_algorithms|Linked list]] allocation scheme, only sequential access is allowed
- This avoids **external fragmentation** as blocks no longer need to be continuous, internal fragmentation is confined only to the last block, sequential access to blocks only

> ![[Pasted image 20221209121034.png|500]]
## File allocation table
- FAT systems get around the speed penalty of only sequential access by having separate pointers for data blocks, allowing fast access of any block. This is known as the file allocation table (FAT)
- Multiple copies of this are usually kept in case of corruption to recover structure, the FAT also needs to be small enough to be stored in memory for fast access. Avoiding having to perform disk access for each traversal