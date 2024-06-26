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
- Widely used in environments where source code must turn into machine-specific binary files
- Note there is still some back and forth between the frontend / backend 

![[Pasted image 20240504203232.png|400|400]]

## Intermediate language translation
- Allows for a source file to be mapped to any compatible compiler backend, this also allows multiple frontends to be used in conjunction for mixed source language projects
- The parse tree and token metadata is lost upon reaching the backend, this loss of language [[Semantic_analyser|semantics]] leads to missed optimisations. Compiler complexity must be balanced

![[Pasted image 20240504203716.png|400|400]]

### Intermediate language constraints
- The IL might not support all features of the source language, which can complicate or limit how the frontend translates code. This is further complicated when using mixed language compilation
- The simplicity of IL, designed for easier backend processing, may restrict advanced optimisations at the frontend (eg [[Concurrency|parallelisation]]), potentially reducing performance
### Backend constraints
- The backend must be able to generate machine code based on the capabilities of the target system, which can restrict optimisation and efficiency. 
- The platform-agnostic nature of IL can lead the backend to produce more verbose or inefficient code for specific systems than necessary (ie [[Compilers|compiler]] is conservative in making optimisations)
