> [!important]- Metadata
> **Tags:** #Languages #Compilers
> **Located:** Languages&Compilation
> **Created:** 19/01/2024 - 15:42
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Language translator
- Responsible for converting source code from a human readable higher-level language to into machine readable code (executable files). This has 4 distinct phases
- Translators also facilitates cross-language  development by translating higher level code into a intermediate format / machine code that's more cross-platform friendly

![[Pasted image 20240119155134.png|450|450]]
## Preprocessor
- Responsible for macro expansion and inclusion, replacing macros with the code they're a shorthand for as well as inserting header file content into the source code. 
- Additionally this also handles conditional compilation, the result of these steps is source code than can then be fed directly into a compiler

![[Pasted image 20240119155319.png|600|600]]

## Compiler stage
- Performs lexical analysis, creating a parse tree that helps ensure the source code follows the languages grammar rules, this helps report syntax errors
- Code optimisation and generation is also carried out at this phase eg loop unrolling

![[Pasted image 20240119155905.png|550|550]]

## Assembler
- Defines the memory space variables / instructions will need to take, the exact memory locations are not known beforehand so this is created as a generalised **relocatable** format
- The output of this phase can be read directly by the [[Processors|CPU]]

![[Pasted image 20240119160254.png|500|500]]
## Linker-loader
- Generates absolute machine code. This also redirects any references to external files to their respective location on the system. The result of this is a program with exact memory locations 
- The linking of libraries is called dynamic linking, allowing the program to interact with shared libraries at runtime

![[Pasted image 20240119162659.png|550|550]]
