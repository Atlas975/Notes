> [!important]- Metadata
> **Tags:** #Compilers #Languages 
> **Located:** Languages&Compilation
> **Created:** 21/02/2024 - 16:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Lexical analyser
- Simplifies input by throwing away unnecessary info 
