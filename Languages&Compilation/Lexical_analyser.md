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
- Tokens refer to:
	- **Language symbols**: This includes keywords (=, :, +,  /, if, while, else )
	- **Identifiers**: variable / method / class names, constants etc
	- **Literal constants**: 



This is a sentence written while my keyboard is on top of a standing desk, I hope my typing speed is still suffecient for this problem but if not i will lower my desk back down 
