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
- A decision problem that defines the impossibility of a **universal** algorithm that can correctly determine if a program will halt or run indefinitely regardless of input
- This is a computational limit as its impossible for a program to 


![[Pasted image 20240225191623.png|250|250]]