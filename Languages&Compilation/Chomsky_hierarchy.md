> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 25/02/2024 - 16:25
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Chomsky hierarchy
- Categorises different types of grammars and languages based on their complexity and the computational power needed to parse them
- Each level in the hierarchy represents a subset of the one above it, includes 4 levels:

    1. **Type 0 ([[Unrestricted_grammars|unrestricted]])**: The most complex languages, recognised by a [[Turing_machine|Turing machine]]. They are not guaranteed to halt and include all possible languages that can be generated.
    2. **Type 1 ([[Context_sensitive_grammars|context-sensitive]])**: Recognised by linear bounded non-deterministic Turing machines. Require context, with rules that may depend on the surrounding symbols.
    3. **Type 2 ([[Context_free_grammars|context-free]])**: can be parsed by non-deterministic [[Pushdown_recogniser|pushdown]] automata. Includes languages where production rules replace variables with variables and terminal symbols, independent of the surrounding symbols.
    4. **Type 3 ([[Regular_grammars|regular]])**: simplest in the hierarchy, parsed by finite automata. Their rules include terminal symbols followed or preceded by at most one variable.

![[Pasted image 20240225163340.png|400|400]]
