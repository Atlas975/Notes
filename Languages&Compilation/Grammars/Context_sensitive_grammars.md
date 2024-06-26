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
- All productions are in the format:

$$\text{LHS} \to \text{RHS}$$
$$|\text{LHS}|\leq |{\text{RHS}}|$$

$$\text{LHS is a string of NON-TERMINALS and optional terminals}$$
$$\text{RHS is a string of terminals and/or NON-TERMINALS}$$

## Alternate context sensitive definition
- All productions are in the format:

$$\alpha_{1}X\alpha_{2}=\alpha_{1}\beta\alpha_{2}$$
- Non terminal $X$ is written as the non-empty string $\beta$, but only in the context of $\alpha_{1}$ on the left and $\alpha_{2}$ on the right, either of the $\alpha$ can be empty (becomes context free in this case)
- This is equivalent to rewriting a non-terminal but only if it's within context ($\alpha$)

![[Pasted image 20240224185021.png|350|350]]