> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 02/03/2024 - 21:27
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Follow sets

- The [[Sets|set]] of terminals that can appear as the last terminal of a string derived by a given rule
- Also known as the **Right Terminal Set** as it contains terminals that appear left of a rule
- For example, in the expression `IF boolean THEN statement ELSE statement`, the Follow Set of the non-terminal `statement` includes `ELSE`.

## Follow set rules

1. For the start symbol of the grammar, add `$` (end of input marker) to its Follow Set.
2. If there is a production $A \to \alpha B \beta$, where $A, B$ are non-terminals and $\alpha, \beta$ are any grammar symbols, then everything in FIRST($\beta$) except $\epsilon$ is in FOLLOW($B$).
3. If there is a production $A \to \alpha B$, or a production $A \to \alpha B \beta$ where FIRST($\beta$) contains $\epsilon$, then everything in FOLLOW($A$) is in FOLLOW($B$). This rule can be applied recursively.
4. If a non-terminal $B$ occurs at the end of the production, then FOLLOW($A$) (where $A$ is the non-terminal on the left-hand side of the production) is included in FOLLOW($B$).
## Follow set usage 
- FOLLOW sets are used in the parsing table construction for predictive parsers.
- They help in deciding which production to use based on the next input symbol.