> [!important]- Metadata
> **Tags:** #OperatingSystems #Concurrency 
> **Located:** SoftwareEngineering
> **Created:** 12/02/2023 - 10:21
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
# Thread types
- Multiple [[Concurrency#Threads|thread]] types are employed in a modern [[Operating_system_design|OS]]
- These threads have different levels of access to resources in the OS

## User thread
- Lightweight threads managed by a user-level thread library, exectuted in user space 
- Not managed directly by system [[Operating_system_design#Kernel|kernel]]
- Used in applications to provide multi-threading capabilities without the overhead of kernel-level thread management.
## Kernel threads
> ![[Pasted image 20221022115058.png|500]]
> these commands all make use of [[Operating_system_design#System calls|system calls]] and operate on kernel managed thread
# OS concurrency
## System calls for unix processes
[[Concurrency]]


## Threads: user vs kernel vs language

> ![[Pasted image 20221022125933.png|400|400]]