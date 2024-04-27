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
- For instance if event A has occurred,

## Event independence formula 
$$\mathbb{P}(A\cap B)==\mathbb{P}(A)\cdot \mathbb{P}(B)$$
- If this condition holds events A and B are independent 
- If this is not the case it means the probability of event B has influence over event A and vice versa, this also means $\mathbb{P}(A|B)\neq \mathbb{P}(A)$ and $\mathbb{P}(B|A)\neq \mathbb{P}(B)$