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
- The [[Sets|set]] of terminals that can appear as the first terminal of a string derived by a given rule 
- Also known as the **Left Terminal Set** as it contains terminals that appear left of a rule
- In terms of programming `First(IF boolean THEN statement)` would contain `IF`


![[Pasted image 20240302214525.png|350|350]]

> 
## First set rules 
1. If $\alpha$ is a terminal, FIRST($\alpha$) = $\{ \alpha \}$
2. If $\alpha$ is a non-terminal and $\alpha\to\beta$ is a production, add FIRST($\beta$) to FIRST($\alpha$).
3. If $\alpha$ → $\epsilon$ is a production, then $\epsilon$ is in First($\alpha$).
4. If $\alpha$ is a sequence of grammar symbols ($\alpha_1 ,\alpha_2 ... \alpha_{n}$), add FIRST($\alpha_{1}$) to FIRST($\alpha$), then if $\alpha_{1}$ can derive $\epsilon$, add FIRST($\alpha_{2}$) and so on until a non-$\epsilon$-deriving symbol is found

```ad-example
$$\text{meal}  \rightarrow \text{first\_course} \ \text{second\_course} \ \text{dessert};$$
$$\text{first\_course}  \rightarrow \text{SOUP} \ | \ \text{SALAD}| \epsilon$$
$$\text{second\_course}  \rightarrow \text{CHICKEN} \ | \ \text{FISH} \ | \ \text{BEEF} \ | \ \text{LAMB};$$
$$\text{FOLLOW(first\_course)}=\{ \text{SOUP}, \text{SALAD}, \epsilon \}$$
$$\text{FOLLOW(second\_course)}=\{ \text{CHICKEN}, \text{FISH}, \text{BEEF}, \text{LAMB} \}$$
```

### First set algorithm
- For simple [[Formal_languages#Backus-Naur form (BNF)|BNF]] format and if there are no null-productions, a possible FIRST algorithm is:
```
for each non-terminal X
    set FIRST(X) to empty;
do {
    for each production X → Y...
        if Y is a terminal
            add Y to FIRST(X);
        else // Y is a non-terminal
            add FIRST(Y) to FIRST(X);
} while there are changes to at least one FIRST set;
```
## First set usage
- First sets are used to determine which production rule to apply when a particular terminal is encountered at the beginning of a string.
- These guide the parser in selecting the correct production based on the current input symbol.