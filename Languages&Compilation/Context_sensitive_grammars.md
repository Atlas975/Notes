> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 24/02/2024 - 18:43
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Context sensitive grammars
- More powerful than [[Context_free_grammars|context free grammars ]], generates context sensitive languages 
- All productions are in the format 

$$LHS \to RHS$$
$$LHS=\text{any mix of terminals and/or NON-TERMINALS, min 1 symbol}$$

$$RHS =\text{any mix of terminals and NON-TERMINALS, this must NOT be empty}$$
$$LHS\leq{RHS}$$