---
alias: NTFS
---

> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems/FileSystems
> **Created:** 22/01/2023 - 12:45
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
# New technology file system
- Known as **NTFS**, built around a **Master file table (MFT)** used in windows
- The master table is an array of 1kb records for every file in volume, files are identified by an index in this table. This table also includes a link to root directory 
- This is done in a non-fragmented part of the [[File_systems|file system]] by allocating a large amount of initial  space to grow the table, deleted entries are simply marked as unused
- MFT structure:

> ![[Pasted image 20230122125704.png|450|450]]

## Attribute streams
- A file in an NTFS can be taught of as a data stream in the MFT identified by type and optionally distinguished by name
- There are two kinds of attributes for files:
    - **Resident**: stored directly in in MFT entry for file 
    - **Non-resident**: held in file referenced by $ATTRIBUTE_LIST
### Multiple streams 
- Multiple streams can be used for a single file,