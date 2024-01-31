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
- Describes the set of rules that define which strings are grammatical (part of a language) or not
- These do not give the meaning of a sentence, instead describing the structure of a string acting as a form of preprocessing input data. Grammars may be recursive in their definition

```
The doctor hates the dalek 
The dalek hates the doctor 
```

- Both these sentences are grammatical but have different meanings, this proves that order matters, strings may also only become grammatical when part of a larger string 
- This is also true for tokens in a programming language eg a > b is not the same as b > a. 

![[Pasted image 20240126183540.png|350|350]]

- Derivation trees like this continue until it gets stuck of has a grammatical (valid) string
- A top down [[Graph_algorithms|DFS]] can be used to find all possible derivations of grammatical strings for a language 


![[Pasted image 20240126185051.png|350|350]]
![[Pasted image 20240126185031.png|350|350]]
### Parsing
- Basic principle of compilers, a bottom up approach
- Multiple orders in which grammar rules can be applied, may not always result in the same tree diagram despite the trees all being valid

## Phase structure grammars
- Comprised of 4 distinct parts:
        **Terminals**: the  set of basic objects of a language such as reserved keywords in a programming language eg: if, while, for. 
        
    1. A set of things like a condition in a programming language, used for structure but do not appear in final string. These are **non-terminals** 
    2. The start symbol that starts the derivation of a valid sentence, non-terminal
    3. A set of rules of the grammer such as assignment in a programming language (=, ->, :=)

### Sentential form
- The intermediate stage between start symbol and the final sentence (may not result in sentence)
- This applies to any string that can be derived in 0+ steps from start 

### Backus-Naur form (BNF)
- Another grammar notation, terminals written normally, non terminals written inside <> brackets 
- Alternatives for same non-terminal written with | (or)

![[Pasted image 20240126195042.png|350|350]]
