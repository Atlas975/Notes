> [!important]- Metadata
> **Tags:** #Compilers #Languages 
> **Located:** Languages&Compilation
> **Created:** 21/02/2024 - 16:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Lexical analyser
- Simplifies input by throwing away unnecessary information eg comments and whitespace (in a whitespace agnostic language), this simplifies the job of the [[Syntax_analyser|syntax analyser]]
- Also classifies language components, producing a token stream

![[Pasted image 20240221163241.png|400|400]]

## Tokens
- Tokens refer to what a phase breaks the source program
	- **Language symbols**:  keywords (=, :, +,  /, if, while, else etc. )
	- **Identifiers**: variable / method / class names etc. for elements in a program
	- **Literal constants**: fixed values (numbers, character constants, string literals etc.)
- The LA ensuring that only valid tokens exist prevents errors from propagating to the SA

## Lexical analyser limitations
