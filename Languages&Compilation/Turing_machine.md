> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 24/02/2024 - 19:18
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Turing machine
- Able to successfully read symbols from and input string (called the tape) while switching states
- Can read/write from tape while having unrestricted access and potentially memory
- Can process [[Context_free_grammars|context free grammars]] (and [[Unrestricted_grammars|unrestricted grammars]]), an [[Finite_state_machines|FSM]] or [[Pushdown_recogniser|pushdown recogniser]] are not powerful enough for this.

## Turing machine tape 
- Infinite in both directions and divided into squares. Each square contains a symbol from the alphabet of a language. Most squares are blank (B)