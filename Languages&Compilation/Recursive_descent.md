> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 03/03/2024 - 16:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Recursive descent


![[Pasted image 20240303164608.png|300|300]]


## Dangling else problem 
- The grammar is not unambiguous, there are two parses of `if E1 then if E2 then S1 else S2`:
    - `if E1 then { if E2 then S1 else S2 }`
    - `if E1 then { if E2 then S1 } else S2`