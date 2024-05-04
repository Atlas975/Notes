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
- TAC is also much easier to optimise than [[Parsing_tables|parse tree]] representation 
## TAC decomposition
- Complex expressions, like `p := x + y * z`, cannot be represented directly in a single TAC instruction. Instead they are decomposed into simpler instructions
- This is done through the use of temporary variables, these can typically be discarded after use but complexity arrises when [[Input&Output_systems#Interrupts|interrupts]] are involved mid decomposition 

```
p := x + y * z -> [t1 := y * z, p := x + t1]
```

- The [[Syntax_analyser|parser]] needs to generate these temp locations as it generates code
- It's later in code generation phase that the parser allocates this to a real storage location

![[Pasted image 20240502194730.png|350|350]]

- As expressions are recognised, the code that implements them at runtime is built 
- These can involve chaining multiple code blocks together, eg a code result block:

```
expr ::= expr PLUS term
a + 3 = A(a + (address of 3 in the literal table))
b * c + d * 3 = [y = A(b * c), z = B(d * 3)]
```

![[Pasted image 20240502203333.png|250|250]]
## Code generation process
- Complex code blocks are created by recursively creating smaller code blocks merged together
- Direct lookups in the [[Symbol_table|symbol table (st)]] or the [[Literal_table|literal table (lt)]] require no code section

![[Pasted image 20240423143128.png|400|400]]



### Assignment 
- An assignment operation also follows this pattern 
- This involves retrieving the ST location and its temp variable its being assigned 
- [[Compilers|Compiler]]  optimisations can be done to directly store without a final temp variable

![[Pasted image 20240423143319.png|400|400]]



