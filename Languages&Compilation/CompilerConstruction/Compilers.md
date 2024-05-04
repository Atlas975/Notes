> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Languages&Compilation
> **Created:** 15/02/2024 - 12:28
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Compilers
- Takes **source program** in a **source language** and translates it into a **target program** in a **target language** while also providing error messages
- Essentially a machine that determines if a program is valid based on its understanding of syntax. This also means a programming language specified by it's  grammar is computable

![[Pasted image 20240215122926.png|300|300]]

## Modular compilers
- A general model for designing compilers is to keep distinct compilation phases modular (although some cross-communication may still be necessary) 
- This was done as it was seen as a good idea to keep certain sub-components seperate

![[Pasted image 20240215124252.png|300|300]]

### Analysis section (front-end)
- Involves reading and understanding the source code. It includes several steps:
    1. [[Lexical_analyser|Lexical analysis]]: breaking down the input source code into tokens
    2. [[Syntax_analyser|Syntax analysis]]: constructing a parse tree from these tokens to check for grammatical structure according to [[Formal_languages|language rules]]
    3. **[[Semantic_analyser|Semantic analysis]]**: ensures that the parse tree adheres to the rules of the language semantics eg type checking and variable declarations.

![[Pasted image 20240228164729.png|400|400]]

### Synthesis section
- Code generation phase, may include 1+ optimisation phases 
- This may be turned off to have more control over source code, these phases may also run in parallel for additional performance  

## Programming languages
- Early programs were coded in binary and controlled using switches, assembly essentially acts as a 1-to-1 mapping of machine instructions to a more human readable language (eg add, sub, mul)
- **Assemblers** are much simpler programs than compilers, but do still act as a translator 

![[Pasted image 20240228161609.png|350|350]]

- Higher level languages are further away from the machine, becoming more abstract (eg objects)
- As a result of this, the compilation also involves more steps such as [[Paging#Shared memory paging|linking]]
- The [[Language_translator#Linker-loader|loader]] acts as the final step to creating a program executable, this may not always be present

![[Pasted image 20240228162012.png|300|300]]
### Alternate compile situations
- Other methods than translation to machine code exist for compilation, such as:
- **[[Interpreter|Interpretation]]**: the process of executing a program directly from its source or intermediate code
- **Just in time (JIT)**: source code is compiled into intermediate code, which is then compiled into machine code at runtime 
- **Transpiler**: translates source code written in one programming language into equivalent code in another language
