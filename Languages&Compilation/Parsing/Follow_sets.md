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
- In programming terms `First(IF boolean THEN statement ELSE statement)` would contain `ELSE`

![[Pasted image 20240302214844.png|350|350]]
## Follow set rules
1. For the start symbol S, add $ (the root of the syntax) to Follow(S).
2. If there is a production A → $\alpha$B$\beta$, then everything in First($\beta$) except $\epsilon$ is in Follow(B).
3. If there is a production A → $\alpha$B or  A → $\alpha$Bβ where First($\beta$) contains $\epsilon$, then everything in Follow(A) is in Follow(B) (B is last non $\epsilon$ deriving terminal)

```ad-example
$$(0) S\to AbB$$
$$(1)S \to B$$
$$(2)A\to aB$$
$$(3)A \to c$$
$$(4)B\to A$$

$$\text{FOLLOW(S)}=\{ $ \}$$
$$\text{FOLLOW(A)}=\{ b, $ \}$$
$$\text{FOLLOW(B)}=\{ b, $ \}$$
```
### Follow set algorithm
- For simple [[Formal_languages#Backus-Naur form (BNF)|BNF]] format and if there are no null-productions, a possible FOLLOW algorithm is:
```
for each non-terminal X
    set FOLLOW(X) to empty ;
insert EOF in FOLLOW (distinguished symbol);
do {
    for each production X → Y1 Y2 Y3 ... Yn {
        for each non-terminal Yi with i from 1 to n-1
            if Yi+1 is a terminal
                add Yi+1 to FOLLOW(Yi);
            else // Yi+1 is a non-terminal 
                add FIRST(Yi+1) to FOLLOW(Yi);
        if Yn is a non-terminal
            add FOLLOW(X) to FOLLOW(Yn) ;
    }
} while there are changes to at least one FOLLOW set;
```
## Follow set usage 
- FOLLOW sets are used in the parsing table construction for predictive parsers.
- They help in deciding which production to use based on the next input symbol.