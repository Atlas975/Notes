> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages/Python
> **Created:** 12/02/2023 - 11:00
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
# Global interpreter lock
- The global interpreter lock (GIL) is mechanism employed by **CPython** to ensure the consistency and integrity of shared data structures in [[Python_language|Python]] through synchronisation 

![[Pasted image 20230212110620.png|450|450]]

- The GIL is a lock that ensures that only one thread can execute Python bytecode at a time, and it is held by the thread that is currently executing Python bytecode.
- The GIL is necessary because CPython's memory management is not [[Concurrency#Concurrency pitfalls|thread-safe]], and the GIL is used to prevent race conditions and other synchronization issues.
- The GIL effectively serializes access to Python objects, even when running on multi-core systems, meaning that multi-threaded programs are not able to fully utilize multiple cores.

