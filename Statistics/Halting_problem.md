> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Statistics
> **Created:** 15/02/2024 - 12:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Halting problem
- A problem that defines how it's impossible to write a program that can detect 