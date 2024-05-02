---
aliases:
  - TAC
---

> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 23/04/2024 - 14:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Three address code
- An intermediate code representation used by compilers to simplify the translation from high-level programming languages to machine code
- Consists of instructions that each have up to 3 operands and an operator, usually represented as a 4-tuple. 
- Each TAC instruction typically performs 1 operation, such as an arithmetic op or a jump.


![[Pasted image 20240423143128.png|450|450]]


## TAC decomposition
- omplex expressions, like `p := x + y * z`, cannot be represented directly in a single TAC instruction. Instead they are decomposed into 

## Assignment

![[Pasted image 20240423143319.png|450|450]]
