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

- A recursive descent parser requires that a grammar must be [[Syntax_analyser#LL(K) and LR(K) parsers|LL(1)]] and using BNF without extensions. However, rules can be reformatted to deal with extended BNF
## Non-terminal parsing
- Each NON-TERMINAL roughly has one function to build its part of the parse tree
- For NON-TERMINAL $X::=\alpha$, the production needs to handle $\alpha$ being one of 4 possibilities:

![[Pasted image 20240303232228.png|450|450]]

- Example function that handles an expression that allows terms to be added using + symbol. {} indicates 0+ terms to be added, note functionality can be extended to handle other arithmetic 

```
<expression> ::= <term> {+<term>} # example grammar rule 

void <expression>(): # emits error handling process
    <term>() 
    while (nextSymbol == plusSymbol): # a + symbol is needed in order to iterate
        acceptTerminal (plusSymbol) 
        <term>() 
```

## Recursive descent parse structure
- Needs to know all possible [[First_sets|first]] terminals / tokens for each non-terminal. This is why Recursive descent is done using [[Syntax_analyser#LL(K) and LR(K) parsers|LL(1)]]  lookahead, this is done using the variable `nextSymbol`
- This also requires moving the lexical analyser to the next token if a lookahead is accepted 

```
void acceptTerminal(t):
    if ( nextSymbol == t )
        get next token from lexical analyser into nextSymbol;
    else
        report error
```

### Recursive descent main method
- The main method used to get parsing started typically takes the following form:

```
get first token from lexical analyser into nextSymbol
<program>() # or whatever the distinguished symbol is 
acceptTerminal (eofSymbol) # used to ensure there are no unprocessed tokens
report success
```


## Left factoring
- When dealing with grammar rules with multiple alternatives, LL(1) lookahead is used to determine what to do next 
- This means the **FIRST** set of all alternatives (a | b | c) must be disjoint to avoid ambiguity

```
# The right-hand side of the first rule here has FIRST sets {ifSymbol} and {ident}
<statement>::= if <expression> then <statement> fi | <variable> := <expression>
```

- This is not always an option such as with an if statement that can accept an else clause, to get around the LL(1) limitation, the grammar must be able to branch out at a specific terminal
- This effectively cuts a grammar rule in half to allow for another lookahead 

![[Pasted image 20240304195249.png|350|350]]
## Recursive error reporting
- Recursive descent works well with error reporting due to the lack of backtracking, this means errors detected are likely to be recognised close to where they they occurred
- This is typically done by the `acceptTerminal` function reporting what token it was searching for and what it actually found
- Parsers should indicate what source text line it was reading (row), where on the line (column) and the error that occurred 

```
void acceptTerminal (Token t):
    if (nextSymbol == t)
        get next token from lexical analyser into nextSymbol 
    else
        report error – expected t, found nextSymbol, at line/char 
```

## Dangling else problem
- An ambiguity problem that effects recursive descent, this can result in unintended parsing effects
- The grammar is not unambiguous, there are two parses of `if E1 then if E2 then S1 else S2`:
	- `if E1 then { if E2 then S1 else S2 }`
	- `if E1 then { if E2 then S1 } else S2`

![[Pasted image 20240304214508.png|350|350]]

- In [[Compilers|compiler]] design this must be resolved at the grammar level to ensure predictable and correct interpretation. An end of if token such as a close bracket makes this clear
- The following function can be used to define `if E1 then {if E2 then S1 else S2}` explicitly:

```
<statement> ::= if <expression> then <statement> [ else <statement> ] # production

void <statement>()
    if ifSymbol:
        acceptTerminal (ifSymbol) 
        <expression>() 
        acceptTerminal (thenSymbol)
        <statement>() 
        if (nextSymbol == elseSymbol):
            acceptTerminal (elseSymbol)
            <statement>()
    else:
        report error
```

- This should be encoded by the grammar rather than the parser, but this assumes that any dangling else belongs to the innermost if
- Utilising graph theory allows for more refined movement along the