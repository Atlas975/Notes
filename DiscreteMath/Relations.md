---
aliases: [relational]
---
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
# Relations

> ![[Pasted image 20211028214149.png|500]]
- Relations are a [[Sets#Subsets|subset]] of Cartesian products, relations are compared using the set rules meaning the same notations and classifiers are used to work with them
- Example:
```ad-example

Let A={1,2} and B={1,3} List the ordered pairs in the relation R from A to B where <a,b> E R if b>a 

A X B = {<1, 1>, <1, 3>, <2, 1>, <2, 3>} R={<1, 3>, <2, 3>}
```
## Equality of relations
>![[Pasted image 20211028225507.png|600]]
- Example:

>![[Pasted image 20211028225725.png|600]]



## Digraphs
- A way of visually representing relations
- example:

>![[Pasted image 20211028231458.png|500]]
>![[Pasted image 20211028231559.png|500]]
- example:

>![[Paste****d image 20211028231723.png|500]]

# Relation properties
## Symmetry 
```ad-example
"is sibling of"
"is married to"
"has the same height as"
```

>![[Pasted image 20211028232330.png|500]]
- Note a relation with <1,2> and <2,1> is also symmetric but requires both elements to prove symmetry

## Reflexivity 
>![[Pasted image 20211028233842.png|500]]

## Transitivity 
- A=B B=C A=C
- Example:

>![[Pasted image 20211028232519.png|500]]
- Digraph: all points link

>![[Pasted image 20211028232043.png|150]]
- Proof of transitivity (True)

> R1={<2,2>,<2,4>,<2,7>,<4,7>} 


| <2,2><2,4>  | Needs <2,4> to be transitive  |
| ----------- | ----------------------------- |
| <2,4>,<2,7> | Needs  <2,7> to be transitive |
| <2,7><4,7>  | Needs  <2,7> to be transitive |
                             
## Irreflexivity

> ![[Pasted image 20211028234059.png|500]]



