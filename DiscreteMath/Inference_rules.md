> [!important]- Metadata
> **Tags:** #DiscreteMath 
> **Located:** DiscreteMath
> **Created:** 26/12/2022 - 09:23
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
# Inference rules
- Based on deduction using [[Predicate_logic]] and [[Propositional_logic]]
- Example:

> ![[Pasted image 20211107161636.png]]

- Inference rules are the template of a valid argument, giving it it's logical reasoning.
- P - premise: the base arguments
- Q - conclusion: the claim evaluated 
# Inference rules:
## Modus Ponens
- If P then Q AND P, therefore Q

> ![[Pasted image 20211107162019.png|500|500]]
> ![[Pasted image 20211107162201.png]]

## Modus Tollens
- If P then Q AND NOT Q, therefore NOT P)

> ![[Pasted image 20211107162306.png|500|500]]
>![[Pasted image 20211107162410.png]]

## Addition
- P therefore P OR Q

>![[Pasted image 20211107162520.png|500|500]]
>![[Pasted image 20211107162625.png|500|500]]

## Simplification
- P AND Q therefore P

>![[Pasted image 20211107162838.png|500|500]]
>![[Pasted image 20211107162915.png|500|500]]

## Hypothetical syllogism
[[Relations#Transitivity]]
- Transitivity if C occurs from B and B occurs from A, therefore A's occurrence causes C

> ![[Pasted image 20211107205616.png]]
![[Pasted image 20211107225047.png]]

## Disjunctive syllogism
- P OR Q, if NOT P then Q

> ![[Pasted image 20211107224943.png]]
![[Pasted image 20211107225013.png]]

## Absorption
- If P then Q, therefore if P then (P AND Q)

>![[Pasted image 20211107225447.png]]
>![[Pasted image 20211107225410.png]]

# Inference example

> ![[Pasted image 20211107225947.png]]
[[Relations]]
