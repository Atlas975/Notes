> [!important]- Metadata
> **Tags:** #Languages #Algorithms 
> **Located:** Languages&Compilation
> **Created:** 31/01/2024 - 18:10
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Subset construction algorithm
- An algorithm for turning a non-deterministic [[Regular_grammar|FSR]] into a deterministic FSR
- The states in machine M' correspond to the set of states in M


![[Pasted image 20240131181442.png|250|250]]




## Subset construction process
1. Mark the start state:

![[Pasted image 20240201173648.png|350|350]]


2. Group together all non-terminal (including the halt state denoted by H), the new set of non-terminals forms a new state in the FSR 

![[Pasted image 20240201175523.png|350|350]]

3. Repeat step 2 until complete and change state names in M' as they do not match original rules


![[Pasted image 20240201174629.png|350|350]]










