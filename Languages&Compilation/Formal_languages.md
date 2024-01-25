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
- Denoted as |x| where 

> |abcabc| = 6
