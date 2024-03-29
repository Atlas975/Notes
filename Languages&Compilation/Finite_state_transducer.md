---
aliases:
  - FST
---

> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 27/02/2024 - 14:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Finite state transducer
- A [[Regular_grammars|FSR]] that can also produce output, making an FSR a limited finite state transducer 
- The main difference in operation from an FSR is that each time an input symbol is read from traversing an arc, it also writes an output symbol (output string cannot be read by the FST)
- Arc syntax:


$$\text{a/b}$$
$$a=\text{read}$$
$$b=\text{write}$$

- The addition of output allows for functions other than parsing to be performed 
- Example of a simple FST, reads digits one by one and switches states appropriately:

![[Pasted image 20240227141758.png|450|450]]

- A computer is essentially a very large FST at a given moment in time, however instead of a separate output it can overwrite it's input for memory  
- Computer are instead akin to a [[Turing_machine|Turing machine]] which is an FST equipped with a tape 

## Finite state transducer limitations
- While FSTs are powerful, they do have limited memory, this makes operations such as the multiplication of two arbitrarily long numbers impossible as this grows with input size
- FST's also process input linearly, one symbol at a time. State is determined by current state + input symbol. Operations like multiplication are non-linear due to intermediate steps
- This limitation can be overcome with a Turing machine:

![[Pasted image 20240227144837.png|400|400]]