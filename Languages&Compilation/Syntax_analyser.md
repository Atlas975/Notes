> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Languages&Compilation
> **Created:** 29/02/2024 - 14:09
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Syntax analyser
- 
 - Tasked with essentially building a parse tree structured as the following:
	- The root as a distinguished symbol such as `<program>`
	- The leaves being the sequence of tokens from the [[Lexical_analyser|lexical analysis]] phase
	- The branch point in the tree being sanctioned by a rule from the grammar
- Also may need to perform semantic checks. This may include generating intermediate code in a [[Compilers|compiler]] or provide the code for direct execution with a [[Interpreter|interpreter]]
- If syntax is invalid, error messages need to be provided



## Parsing strategy criteria
- **Power**: be able to deal with any input strings given as input 
- **Avoid back-tracking**: try avoid going over the same string multiple times 
- **Avoid lookahead**: try read only whats needed to avoided repeated reads later on
- **Efficiency**: keep low memory use while still being fast 
- **Small**: should not be too cumbersome to maintain 


### LL(K) and LR(K) parsers
$$L_{(L |R)}(K)$$$$L_{1}=\text{first L indicates reading is left to right}$$
$$K=\text{the number of lookahead tokens (usually 0 or 1) }$$
$$(L_{2}R)=\text{second letter indicates derivation }L_{L}\text{ is top-down }L_{R} \text{ is bottom-up}$$