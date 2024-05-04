---
aliases:
  - JIT
---
> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Languages&Compilation/CompilerConstruction/CompilationTypes
> **Last modified:** `$= dv.current().file.mtime`
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Just in time compilation
