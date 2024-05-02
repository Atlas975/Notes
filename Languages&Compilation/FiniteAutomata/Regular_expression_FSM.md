> [!important]- Metadata
> **Tags:** #Languages #Programming 
> **Located:** Languages&Compilation
> **Created:** 01/02/2024 - 18:05
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Regular expression FSM
- An [[Finite_state_machines|FSM]] can also be represented by a [[Regex|Regular expression]]
- This also helps simplify more complex regular expressions into a simple format 

![[Pasted image 20240201183603.png|350|350]]

-  Regular expressions can also be written as a set definition 
- These can be useful in some parts of compilers ie finding reserved keywords (if, class etc)

![[Pasted image 20240201183715.png|350|350]]
