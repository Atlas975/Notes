> [!important]- Metadata
> **Tags:** #DiscreteMath 
> **Located:** DiscreteMath
> **Created:** 26/12/2022 - 09:24
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Predicate logic
<% tp.file.cursor(2) %>
- An extension of [[Propositional_logic|propositional logic]] that accounts for parts of propositions, links and quantifier
- Allows statements to be decomposed into smaller parts eliminating blackbox treatment
- Consists of 
    1. Constants
    2. Variables
    3. Predicates
    4. Quantifiers

>![[Pasted image 20220425041319.png]]


## Compound formulae
>![[Pasted image 20220425041510.png]]

## Predicate arity
>![[Pasted image 20220425121807.png]]

## Open and closed atomic formulae 
>![[Pasted image 20220425122829.png]]
- Examples

>![[Pasted image 20220425123339.png]]

## Universe of discourse 
- What variables a value can take, it describes all entities that can replace a variable in an atomic formula
>Example:
>Person x is a man = M(x) 
>Universe for x can be the set living men

# Quantifiers 
>![[Pasted image 20220425041642.png]]
>![[Pasted image 20220425042221.png]]
>![[Pasted image 20220425042250.png]]

## Universal quantifier 
- Equivalent to all AND
>![[Pasted image 20220425041908.png]]


## Existential quantifier 
- Equivalent to all OR
>![[Pasted image 20220425042117.png]]

## Negation
- Example negation on universal quantifier 

>![[Pasted image 20220425201209.png]]

[[De_Morgans_law#De Morgan's law#De Morgan's quantifier law]]

## Precedence 
>![[Pasted image 20220425201608.png]]

# Rules of inference 
>![[Pasted image 20220425201849.png]]

# Nested quantifiers
- More than one quantifier might be needed to express the meaning of a predicate, the order does not matter if the quantifiers are of the same type

>![[Pasted image 20220425202640.png]]

- This order does matter if the quantifiers are of different types

>![[Pasted image 20220425202740.png]]

# Satisfiable Formulae
- There exists at least one value that satisfies a formula

>![[Pasted image 20220426004209.png]]


