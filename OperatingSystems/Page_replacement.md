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
- Page memory allocation can follow one of two schemes 
    - **Equal allocation**: each process gets m/n frames (for memory size m), not ideal for processes that have distinct memory requirements but minimal overhead for allocation
    - **Proportional allocation**
- Local page replacement means that a process cannot take frames from other processes 
- Global page replacement allows frames to be taken from any process, requires management