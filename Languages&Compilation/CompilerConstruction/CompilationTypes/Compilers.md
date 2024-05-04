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
- Takes source program in a source language and translates it into a target program in a target language while also providing error messages
- Essentially a machine that determines if a program is valid based on its understanding of syntax. This also means a programming language specified by it's  grammar is computable

![[Pasted image 20240215122926.png|250|250]]

## Modular compilers
- A general model for designing compilers is to keep distinct compilation phases modular (although some cross-communication may still be necessary) 
- This is done to keep individual sub-components simple and independent  

![[Pasted image 20240215124252.png|250|250]]

### Analysis section (front-end)
- Involves reading and understanding the source code. It includes several steps:
    1. [[Lexical_analyser|Lexical analysis]]: converts the stream of characters in source code into a sequence of tokens representing syntactic categories
    2. [[Syntax_analyser|Syntax analysis]]: constructs a parse tree from tokens to verify the source code's conformity to the grammar of the language.
    3. **[[Semantic_analyser|Semantic analysis]]**: uses the parse tree to check for semantic consistency and populates the symbol table with identifier attributes and bindings

![[Pasted image 20240504203136.png|350|350]]


### Synthesis section (back-end)
- Code generation phase, may include 1+ optimisation phases. It includes several steps:
    1. [[Three_address_code|Intermediate code generator]]: Transforms the abstract syntax tree and semantic information into a lower-level, machine-independent code format.
    2. **Code optimizer**: refines the intermediate code to improve runtime efficiency and reduce resource consumption, while maintaining the original program's semantics.
    3. **Code generator**: converts the optimised intermediate code into the specific machine language code for execution on the target hardware.

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
