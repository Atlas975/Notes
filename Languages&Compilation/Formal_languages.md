> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 19/01/2024 - 16:45
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Formal languages
- A formal language is a set of rules & symbols with well defined syntax and semantics. 
- Used to precisely describe and represent strings or sequences of symbols
- Languages can be defined through:
	- Set definitions 
	- Decision programs 
	- Grammars

## Alphabet
- A finite [[Sets|set]] of atomic symbols, eg: {a, b, c, e, t, 1, 4, 5}
- Strings are derived from an alphabet 

## Strings
- A sequence of symbols taken from an alphabet 
- Empty strings are denoted by either no symbols or $\epsilon$ (epsilon)

> [a, b, aa, ab, ba, bb, aaa, aab] are all derived from the alphabet {a, b}

## Sentence


## Length operation
- The number of symbols in a string x
- Denoted as |x| eg |abcabc| = 6
## Concatenation
- Formed by appending two or more strings sequentially 



$$\begin{align*}
\text{let }x=abca\\
\text{let }y=ca\\
xy=abcaca\\
yx=xaabca\\
x\epsilon=abca

\end{align*}$$

> let x = abca
> let y = ca
> xy = abcaca, yx = caabca,  x$\epsilon$=abca

## Power
- Formed by writing n copies of string x
- Denoted as $x^n$

> let x = abc
> $x^3$ = abcabcabc, $x^1$=abc, $x^0$ = $\epsilon$

## Index
- The nth symbol of string x
- Denoted as $x_{n}$ (usually 1-indexed)

>let x = abc 
>$x_{1}$=a, $x_{2}$=b, $x_{3}$=c
