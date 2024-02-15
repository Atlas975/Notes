> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Languages&Compilation
> **Created:** 15/02/2024 - 12:28
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Compilers


![[Pasted image 20240215122926.png|300|300]]