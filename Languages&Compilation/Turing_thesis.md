> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Statistics
> **Created:** 15/02/2024 - 12:09
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Turing thesis
- There is nothing more powerful than a Turing machine, the limitations of a Turing machine are the minimum limitations of any computer