> [!important]- Metadata
> **Tags:** #DiscreteMath 
> **Located:** DiscreteMath
> **Created:** 26/12/2022 - 03:53
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# De Morgans law

- A set of transformations used to convert the intersection / union of a set [[Sets]] into its complement
- Multiple use cases in [[Boolean_algebra|boolean algebra]], [[Predicate_logic|predicate logic]] and [[Propositional_logic|propositional logic]], also essential in simplifying logic circuits
## De-Morgan's theorem
$$\overline{A+B}=\overline{A} \text{ }\overline{B}$$

$$\text{The complement of a sum is equal to the product of a complement}$$
$$\overline{AB}=\overline{A}+\overline{B}$$
$$\text{The complement of a product is equal to the sum of complement }$$

![[Pasted image 20240213163632.png|450|450]]
## NAND building
- example NAND building:

![[Pasted image 20211103113707.png|450|450]]

## De Morgan's quantifier law
- This leaves a general
- Law can be applied in predicate logic to find complement expression

![[Pasted image 20220425201453.png|450|450]]

- Logic gate equivalent:

![[Pasted image 20211108191956.png|450|450]]
