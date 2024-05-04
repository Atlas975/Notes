> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Languages&Compilation/CompilerConstruction/CompilationTypes
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Split-stage compilation
- Involves breaking the compilation process into two stages that use an intermediate language. This needs to be high level enough to be flexible while still being close to machine level
- Widely used in environments where the source code must be transformed into machine-specific binary files for different platforms (e.g., ARM, x86, MIPS)
- Note there is still some back and forth between the frontend / backend 

![[Pasted image 20240504203232.png|400|400]]

## Flexibility benefit
- Allows for a source file to be mapped to any compatible compiler backend, this also allows multiple frontends to be used in conjunction for mixed source language projects
- The compilation at each stage must be balanced as loosing the [[Semantic_analyser|semantics]] of the language (such as with loop unrolling) can lead to potential missed optimisations in the backend
- This happens because the parse tree and token metadata is lost upon reaching the backend

![[Pasted image 20240504203716.png|400|400]]

- Delegating extensive responsibilities to the backend can lead to greater complexity and maintenance challenges, potentially resulting in longer compilation times
- Relying heavily on the backend for optimisations / platform-specific adjustments can compromise the effectiveness of these optimisations, making it more difficult to  target multiple platforms