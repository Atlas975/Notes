---
aliases:
  - PMI
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
- A measure that evaluates if  x and y co-occur  (joint probability) more than if they were independent (marginal probability)
- This is useful for finding associations between items eg in recommender systems. This is also a vital measure for feature selection



## PMI formula
>$$PMI=\sum_{x \in X}\sum_{y \in Y} \mathbb{P}(x,y)\log\left[ \frac{\mathbb{P}(x,y)}{\mathbb{P}(x)\mathbb{P}(y)} \right]$$

- The two summations exist to indicate that all possible combinations for two columns are considered (the product of the two vectors
- 