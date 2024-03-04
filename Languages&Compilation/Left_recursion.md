> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 04/03/2024 - 20:47
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Left recursion

- Occurs in a [[Formal_languages|grammar]] when a NON-TERMINAL appears on the LHS of a rule and is also the leftmost symbol on the right-hand side of a rule.


$$A\to Av \ | \ u\implies A\to uB, \ B\to vB \ | \ \epsilon$$