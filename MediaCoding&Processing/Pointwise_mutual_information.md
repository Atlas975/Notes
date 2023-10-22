---
aliases:
  - PPMI
---

> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MediaCoding&Processing
> **Created:** 22/10/2023 - 16:14
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Pointwise mutual information
- A measure that evaluates if  x and y co-occur more than if they were independent
- This is useful for finding associations between items eg in recommender systems. This is also a vital measure for feature selection
