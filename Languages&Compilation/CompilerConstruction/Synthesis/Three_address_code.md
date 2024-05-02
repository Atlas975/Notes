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
- An intermediate code representation used by compilers to simplify the translation from high-level programming languages to machine code using abstract machine instructions 
- Consists of instructions that have up to 3 operands +  1 operator, represented as a 4-tuple. 

![[Pasted image 20240502192218.png|350|350]]

- Each TAC instruction typically performs 1 operation, such as an arithmetic op or a jump.
- The space for a full TAC is allocated even if fewer than 2 operands are used (eg the NOP which is used to waste a cycle typically for timing purposes)

![[Pasted image 20240502194730.png|350|350]]
## TAC decomposition
- Complex expressions, like `p := x + y * z`, cannot be represented directly in a single TAC instruction. Instead they are decomposed into simpler instructions
- This is done through the use of temporary variables, these can typically be discarded after use but complexity arrises when [[Input&Output_systems#Interrupts|interrupts]] are involved mid decomposition 

```
p := x + y * z -> [t1 := y * z, p := x + t1]
```

## Assignment

![[Pasted image 20240423143128.png|450|450]]
![[Pasted image 20240423143319.png|450|450]]
