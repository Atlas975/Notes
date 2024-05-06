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
- This can produce code that performs better than interpreted code due to runtime information access which isn't available to static compilers (eg better loop unrolling)

![[Pasted image 20240506114857.png|350|350]]


## JIT instructions 
- JIT compilation results in an IL with both high and low level opcodes 
- The process of JIT compilation requires additional memory to hold the JIT compiler itself along with the runtime data structures needed for compilation and optimisation

```
iload -> load    // most instructions correlate well with assembly
istore -> store
iconst -> literal integer constant value
goto -> jump

getstatic -> load static table reference    // some are more language specific
invokevirtual -> invoke method from virtual table
```


![[Pasted image 20240506120915.png|450|450]]