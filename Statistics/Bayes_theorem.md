> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 15/02/2024 - 14:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bayes theorem

- Bayes' Theorem provides a way to revise predictions or theories in light of new evidence.
- It is rooted in conditional probability, which is the probability of an event given that another event has occurred.


## Bayes formula 
$$\mathbb{P}(A|B)=$$