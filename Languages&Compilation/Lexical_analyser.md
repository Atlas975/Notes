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
- Also classifies language components, producing a stream of tokens (the basic building blocks of the syntax of a language)

![[Pasted image 20240221163241.png|400|400]]
## Tokens
- Tokens refer to what a phase breaks the source program into, these include:
	- **Language symbols**:  keywords (=, :, +,  /, if, while, else etc. )
	- **Identifiers**: variable / method / class names etc. for elements in a program
	- **Literal constants**: fixed values (numbers, character constants, string literals etc.)
- The LA ensuring that only valid tokens exist prevents errors from propagating to the SA
- Example toke stream for `int count = 5;`

![[Pasted image 20240229162558.png|350|350]]

## Reserved keywords
- The set of words reserved for a languages syntax (eg if, while, function, return)
- These words typically cannot be used as identifiers
- A character string is recognised as reserved by looking into the table of reserved keywords

### Example processing of input stream 
- Whitespace indicates that the current token buffer can be checked and then emptied 

![[Pasted image 20240229164033.png|300|300]]

- Semicolons can also indicate that the buffer can be emptied, but this time to get an identifier

![[Pasted image 20240229164351.png|300|300]]
## Lexical analyser limitations
- Requires a language that allows for the lexical and syntax analysis phase to be split 
- Languages such as Fortran may have **semantic ambiguity** that can only be resolved by the syntax analyser, this is because how a token is processed may depend on program logic

