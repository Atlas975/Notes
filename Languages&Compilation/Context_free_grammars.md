---
aliases:
  - CFG
---
> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 02/02/2024 - 16:32
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Context free grammars
- Generates context free languages, all productions 
- All productions are in the format: 
$$X\to RHS \text{ (right hand side)}$$
$$X = \text{NON-TERMINAL }$$
$$RHS =\text{any mix of terminals and NON-TERMINALS, can be empty}$$


![[Pasted image 20240202163902.png|400|400]]

- Note how unlike [[Regular_grammar|regular grammars]] a context-free grammar must have both a terminal and non-terminal if it is not empty. Having only one of these will not suffice  
- This also allows for counting to take place:

![[Pasted image 20240202164541.png|450|450]]