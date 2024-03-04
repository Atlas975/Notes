> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 03/03/2024 - 16:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Recursive descent
- A top down [[Lexical_analyser|parser]], useful for hand-generation of a compiler from a grammar. 
- Works by beginning at the start symbol and attempts to construct a parse tree, branching out according to the rules of the grammar. 
- Reads the input tokens one by one, decides which rule to apply based current token + grammar

![[Pasted image 20240303164608.png|300|300]]


## Extended BNF recursive
- Some versions of BNF are extended, so that $\{ X \}$ means 0+ repetitions of $X$:
```
while (nextSymbol is in FIRST(x)) { 
    T(x); 
} // end of while
```

- Similarly $[X]$ means 0/1 occurrence of $X$ in some extensions of BNF:

```
if (nextSymbol is in FIRST(x)) { 
    T(x); 
} // end of if
```


## Non-terminal parsing
- Each NON-TERMINAL roughly has one function to build its part of the parse tree
- For NON-TERMINAL $X::=\alpha$, the production needs to handle $\alpha$ being one of 4 possibilities:

![[Pasted image 20240303232228.png|450|450]]

- Example function that handles an expression that allows terms to be added using + symbol. {} indicates 0+ terms to be added, note functionality can be extended to handle other arithmetic 


```
<expression> ::= <term> {+<term>} # example grammar rule 

void <expression>(): # emits error handling process
    <term>() ;
    while (nextSymbol == plusSymbol):
        acceptTerminal (plusSymbol) ;
        <term>() ;
```

## Recursive descent parse structure
- Needs to know all possible [[First_sets|first]] terminals / tokens for each non-terminal. This is why Recursive descent is done using [[Syntax_analyser#LL(K) and LR(K) parsers|LL(1)]]  lookahead, this is done using the variable `nextSymbol`
- This also requires moving the lexical analyser to the next token if a lookahead is accepted 

```
void acceptTerminal(t):
    if ( nextSymbol == t )
        get next token from lexical analyser into nextSymbol;
    else
        report error;
```


## Recursive error reporting
- Recursive descent works well with error reporting due to the lack of backtracking, this means errors detected are likely to be recognised close to where they they occurred
- This is typically done by the `acceptTerminal` function reporting what token it was searching for and what it actually found
- Parsers should indicate what source text line it was reading (row), where on the line (column) and the error that occurred 

```
void acceptTerminal (Token t):
    if (nextSymbol == t)
        get next token from lexical analyser into nextSymbol ;
    else
        report error – expected t, found nextSymbol, at line/char ;
```

## Dangling else problem
- The grammar is not unambiguous, there are two parses of `if E1 then if E2 then S1 else S2`:
	- `if E1 then { if E2 then S1 else S2 }`
	- `if E1 then { if E2 then S1 } else S2`
