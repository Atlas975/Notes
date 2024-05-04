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
    - **Frontend**: performs [[Syntax_analyser|parsing]] , [[Semantic_analyser|semantic analysis]], and generates IL code
    - **Backend**: converts this IL into machine-specific binary
- Widely used in environments where the source code must be transformed into machine-specific binary files for different platforms (e.g., ARM, x86, MIPS)


## 