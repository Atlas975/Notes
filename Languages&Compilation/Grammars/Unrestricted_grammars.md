> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 24/02/2024 - 19:08
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Unrestricted grammars

- More powerful than [[Context_sensitive_grammars|context sensitive grammars]], generates unrestricted languages 
- Most languages are context sensitive, languages that don't fall under this are rare
- All productions are in the format:
$$\text{LHS} \to \text{RHS}$$
$$\text{LHS}\to \epsilon$$

$$\text{LHS is a string of NON-TERMINALS and optional terminals}$$
$$\text{RHS is a string of terminals and/or NON-TERMINALS}$$
$$|RHS| \geq{0} \text{ (no legnth restriction)}$$

- Unlike CS grammars an unrestricted grammar can have RHS be empty and of any length
- $\{ a^{i}b^{i}c^{i*j}\text{ : }i, j\geq{1} \}$ can be represented as the following unrestricted grammar:  


![[Pasted image 20240224191701.png|350|350]]