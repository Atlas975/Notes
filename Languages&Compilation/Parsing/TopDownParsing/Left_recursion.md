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
- This can be transformed into (with equivalent functions):

$$A\to uB$$
```
void A():
    acceptTerminal (uSymbol) 
    B()
```
$$B\to vB \ | \ \epsilon$$
```
void B():
    switch (nextSymbol):
        case vSymbol:
            acceptTerminal (vSymbol)
            B(); break
        case FOLLOW(B): # checks for null terminal, allows rule to be sactioned
            break // i.e. do nothing 
```
- Both grammars will generate the same sentence (`u{v}+`) but the grammar now needs to be able to sanction a null production using FOLLOW
- Note in order for this to be an LL(1) grammar to work with a recursive descent  parser, the following condition must also apply for NON-TERMINAL X:

$$\text{FIRST}(X)\ \cap \ \text{FOLLOW}(X)= \emptyset$$

## Left recursion types

- **Immediate Left Recursion**: recursion occurs directly, like in `A → Aα`.
- **Indirect Left Recursion**: recursion is not direct and involves several rules, like `A → Bα` and `B → Aβ`.
