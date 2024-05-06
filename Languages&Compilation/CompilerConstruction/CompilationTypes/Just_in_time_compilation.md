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
- Converts bytecode / intermediate code into native machine code at runtime 
- Bridges the gap between [[Split-stage_compilation|compiled]] language speed and interpreted language flexibility

![[Pasted image 20240506114857.png|350|350]]


## JIT instructions 
- JIT compilationresults in an IL with both high and low level opcodes 
- 

```
iload -> load    // most instructions correlate well with assembly
istore -> store
iconst -> literal integer constant value
goto -> jump

getstatic -> load static table reference    // some are more language specific
invokevirtual -> invoke method from virtual table
```