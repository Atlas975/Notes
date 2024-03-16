> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 16/03/2024 - 15:49
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bottom-up parsing
- Reduces a [[Formal_languages#Sentence|sentence]] to the sentence symbol by applying productions of the grammar
- Done via a **parse stack**, each symbol read is immediately placed on the top of the stack 
## Bottom-up parsing process

- The following example grammar will be used: 
$$(1)\ S \to \text{real}\ \text{IDLIST}$$
$$(2) \ \text{IDLIST} \to \text{IDLIST}, \text{ID}$$
$$(3) \ \text{IDLIST} \to \text{ID}$$
$$(4) \ \text{ID} \to A|B|C|D$$

- The sentence `real A,B,C` will be processed, the `●` token indicates where the stack pointer is

1.   Iterate through the symbols in a sentence sequentially, reducing it as much as allowed, in this case `A` is reduced to `IDLIST` and `,` cannot be reduced further : 

![[Pasted image 20240316195109.png|250|250]]

2. Multiple tokens together can be reduced as well, eg with rule 2 once `B` is reduced to `ID` the following can occur to reduce the stack to `IDLIST`:


![[Pasted image 20240316195517.png|350|350]]

3. The tokens `real` and `IDLIST` cannot be merged to become the distig