> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 01/03/2024 - 21:10
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# First sets
- The [[Sets|set]] of terminals that begin the strings derivable from that symbol.


## First set rules 
1. If $\alpha$ is a terminal, First($\alpha$) = $\{ \alpha \}$
2. If $\alpha$ is a non-terminal and $\alpha\to\beta$ is a production, add First($\beta$) to First($\alpha$).
3. If $\alpha$ → $\epsilon$ is a production, then $\epsilon$ is in First($\alpha$).
4. If $\alpha$ is a sequence of grammar symbols ($\alpha_1 ,\alpha_2 ... \alpha_{n}$), add First($\alpha_{1}$) to First($\alpha$), then if $\alpha_{1}$ can derive $\epsilon$, add First($\alpha_{2}$) and so on until a non-$\epsilon$-deriving symbol is found