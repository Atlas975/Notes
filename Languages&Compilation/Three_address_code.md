> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 23/04/2024 - 14:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Three address code

![[Pasted image 20240423143128.png|450|450]]

## Assignment

![[Pasted image 20240423143319.png|450|450]]