---
aliases:
  - ensemble
---

> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/TreeModels
> **Created:** 03/04/2024 - 22:21
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Ensemble learning
- An ML technique where multiple models are trained and combined to improve performance
- Typically result in better predictive performance compared to a single model, as they combine the strengths and mitigate the weaknesses of various base models.



## Bagging ensemble
- Also known as bootstrap aggregation, involves training a set of models in parallel on random subsets of data (created with replacement AKA bootstrap sampling)
- Prediction done using mode(prediction) for classification or average(prediction) for regression

![[Pasted image 20240403222848.png|250|250]]

## Boosting ensemble


![[Pasted image 20240403222826.png|250|250]]

## Stacking ensemble
![[Pasted image 20240403222749.png|250|250]]
