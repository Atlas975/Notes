> [!important]- Metadata
> **Tags:** #Compilers #Languages 
> **Located:** Languages&Compilation
> **Created:** 28/02/2024 - 16:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Interpreter
- An interpreter processes and executes programming code through a two-step approach:
    1. **Parsing**: The interpreter reads the source code, breaking it down into meaningful elements (tokens) and checking its syntax. This involves analysing the [[Formal_languages|grammar]] structure to understand the instructions.
    2. **Execution**: After parsing, the interpreter directly executes the instructions, translating them into actions or machine-level operations. This is done line by line or statement by statement, without producing a separate machine code file.

![[Pasted image 20240228163509.png|350|350]]

- The generation of byte code allows for code to be run on interpreters designed for a specific [[Computer_architecture|machine architecture]], altering what's done on the metal level while keeping program logic 