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
- A concept in conditional probability that indicates weather or not the occurrence of an event impacts another event.
- Two events being independent of each other can be checked with the following formula 

## Event independence formula 
$$\mathbb{P}(A\cap B)==\mathbb{P}(A)\cdot \mathbb{P}(B)$$
- If this condition holds events A and B are independent 