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
- Known as **NTFS**, built around a **Master file table (MFT)**
- The master table is an array of 1kb records for every file in volume 
- Non-fragm