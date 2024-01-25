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

$$\begin{align*}
cat,aaa,tab \text{ are all in alphabet }\{a,b,c,e,t  \}
\end{align*}$$
## Language
- The complete set of strings that formed by an alphabet, may be finite or infinite 

$$\text{[a, b, aa, ab, ba, bb, aaa, aab, ...] are all derived from the alphabet {a, b}}$$
## Sentence
- Any string thats a member of a language 
$$ba \text{ is a member of language }\{ aa,ab,ba,bb \}$$



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

## Power
- Formed by writing n copies of string x
- Denoted as $x^n$
$$\begin{align*}
\text{let } x=abc\\
x^3=abcabcabc \\
x^1=abc\\
x^0=\epsilon
\end{align*}$$
## Index
- The nth symbol of string x
- Denoted as $x_{n}$ (usually 1-indexed)

$$\begin{align*}
\text{let }x=abc\\
x_{1}=a\\
x_{2}=b\\
x_{3}=c
\end{align*}$$

## Set definition of language
- Used when strings follow a certain pattern, makes use of 4 operations 
- A set definition itself has 3 parts:
$$\begin{align*}
\{ a^ib^{i}\text{ : }i\geq{1}\} \\
a^ib^{i}=\text{the string producing function} \\
\text{: }=\text{is "such that" (sometimes as |)}\\
i\geq{1=\text{range of function arguments}}
\end{align*}$$

## Decision programs
- A program that tells you if a string belongs to a language 
- The language of a decision is the set of strings that are marked as valid, a compiler is partly a decision program for its programming language 

![[Pasted image 20240125172724.png|350|350]]

## Grammers