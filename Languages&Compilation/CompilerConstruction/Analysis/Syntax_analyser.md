---
aliases:
  - Parser
---
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
- A component in both a [[Compilers|compiler]] and [[Interpreter|interpreter]] tasked with created a nested set of controls that describe what a program does
 
- Also may need to perform semantic checks. This may include generating intermediate code in a compiler or provide the code for direct execution with a interpreter 
- If syntax is invalid, error messages need to be provided



## Parse trees 
- Syntax analysis is done this by building a parse tree structured as the following:
	- The root as a distinguished symbol such as `<program>`
	- The leaves being the sequence of tokens from the [[Lexical_analyser|lexical analysis]] phase
	- The branch point in the tree being sanctioned by a rule from the grammar

![[Pasted image 20240301163252.png|350|350]]

- This can be generated using either of the two approaches:
    - **Top-down**: start with `<program>`, work downwards until token leaves are found
    - **Bottom-up**: start with tokens, generate [[Formal_languages|non-terminals]] until reaching `<program>`

## Parsing speed
- Simple approaches can take an exponential amount of time to parse a string (when n is len(String)) for instance `S -> S+S | S*S | a`  where possible parses grows dramatically
- Other strategies that exist to include: 
    - **Earley's algorithm ($O(n^3)$)**: top-down with a [[Context_free_grammars|context free grammar]]
    -  **CYK algorithm ($O(n^3)$)**: bottom-up, context free needs conversion to Chomsky normal form
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