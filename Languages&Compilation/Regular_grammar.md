> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 31/01/2024 - 14:57
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Regular grammar
- Generate regular languages
- All productions are in one of the following formats (only non-terminals are capital)

$$\text{NON-TERMINAL}\to \text{terminal}\cdot \text{NON-TERMINAL}$$
$$\text{NON-TERMINAL}\to \text{terminal}$$

![[Pasted image 20240131155242.png]]