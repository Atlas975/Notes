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

- Occurs in a [[Formal_languages|grammar]] when a NON-TERMINAL appears on the LHS of a rule and is also the leftmost symbol on the RHS of a rule.
- Take `A -> Av | u`, the terminal u is the FIRST set for both Av and u so a [[Recursive_descent|recursive descent parser]] cannot handle this directly. Trying to do so would result in infinite recursion
- Left recursion needs to be eliminated or transformed to work with these kinds of parsers


## Eliminating left recursion 
- Take the following grammar for example: 

$$A\to Av \ | \ u$$
- This can be transformed into:

$$A\to uB$$
$$B\to vB \ | \ \epsilon$$
- Both grammars will generate the same sentence (`u{v}+`)

## Left recursion types 

- **Immediate Left Recursion**: recursion occurs directly, like in `A → Aα`.
- **Indirect Left Recursion**: recursion is not direct and involves several rules, like `A → Bα` and `B → Aβ`.
