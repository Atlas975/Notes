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
- Takes **source program** in a **source language** and translates it into a **target program** in a **target language** while also providing error message 
- 

![[Pasted image 20240215122926.png|300|300]]



## Modular compilers 
- Best to keep compilation components separate
- 

![[Pasted image 20240215124252.png|300|300]]

### Analysis section 

### Synthesis section 