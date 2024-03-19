> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/SmoothingFilters
> **Created:** 19/03/2024 - 17:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Gaussian filter