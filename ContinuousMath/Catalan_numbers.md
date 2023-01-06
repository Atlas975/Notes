> [!important]- Metadata
> **Tags:** #ContinuousMath 
> **Located:** ContinuousMath
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
# Catalan numbers
## Catalan number sequence 

> $$\mathcal{C(n)} = \frac{(2n)!}{n!(n+1)!}$$

## Permutations
> $$\mathcal{P(n,r)} = \frac{n!}{(n-r)!}$$
$$ n = \text{total number of objects in the set}$$
$$ r = \text{number of choosing objects from the set}$$

- Permutations count resulting sets of ABCD and DABC as seperate
- Results in the number of ways to order n items in r ways

## Combinations

> $$\mathcal{C(n,r)} = \frac{n!}{r!(n-r)!}=\binom{n}{r}$$
$$ n = \text{total number of objects in the set}$$
$$ r = \text{number of choosing objects from the set}$$

- Combinations count resulting sets of ABCD and DABC as the same
- Results in the number of unique ways to choose n items in r ways

