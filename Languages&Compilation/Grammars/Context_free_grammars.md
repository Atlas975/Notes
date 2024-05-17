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
- Generates context free languages, all productions are in the format: 
$$\text{NON-TERMINAL }\to RHS $$
$$\text{RHS is any mix of terminals and NON-TERMINALS, can be empty}$$


![[Pasted image 20240202163902.png|400|400]]

- Note how unlike [[Regular_grammars|regular grammars]] a context-free grammar must have both a terminal and non-terminal if it is not empty. Having only one of these will not suffice  

![[Pasted image 20240202164541.png|450|450]]

- Note how this also allows counting to take place 
## Context free derivation tree 
- Derivation trees for long context free grammars require repeating a NON TERMINAL (X here):

![[Pasted image 20240223140242.png|350|350]]

- A formal derivation of an CF grammar into substrings, each letter here represents generic terminals rather than members of a language:

![[Pasted image 20240223164936.png|200|200]]
![[Pasted image 20240224182441.png|200|200]]

- This allows for any string to be constructed as [[Regular_grammars#Repeat state theorem - "vwx"|vwx form]], This is  **uvwxy** form for CF languages:
    - **u, y**: accepted before and after repeated state (may be empty)
    - **v, x**: repeated strings (non empty)
    - **w**: string accepted between v and x (non empty)

![[Pasted image 20240224183638.png|350|300]]![[Pasted image 20240224184217.png|350|350]]