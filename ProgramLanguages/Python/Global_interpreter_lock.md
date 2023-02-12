> [!important]- Metadata
> **Tags:** #
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
- Global interpreter lock (GIL) is mechanism employed by **CPython** to ensure the consistency and integrity of shared data structures in [[Python_language|Python]] 