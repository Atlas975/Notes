> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 15/02/2024 - 15:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Event independence
- A conditional probability concept, indicates if the occurrence of an event impacts another event.
- For instance if event $A$ has occurred, the probability of event $B$ occurring may be raised, lowered or stay the same. If it stays the same both events are independent of each other

## Event independence formula 
$$P(A\cap B)=={P}(A)\cdot {P}(B)$$
- If this condition holds events A and B are independent 
- If this is not the case it means the probability of event B has influence over event A and vice versa, this also means ${P}(A|B)\neq {P}(A)$ and ${P}(B|A)\neq {P}(B)$

## Random variable independence 
- Random variables are independent if the occurrence of variable $X$ does not impact $Y$

$$P(X=x\cap Y=y)=P(X=x)\cdot P(Y=y)$$



## Discrete random variable independence 


## Continuous random variable independence 