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
- An [[Artificial_intelligence|ML]] technique where multiple models are trained and combined to improve performance
- Typically results in better predictive performance compared to using a single model, as they combine the strengths and mitigate the weaknesses of various base models.
## Bagging ensemble
- Also known as bootstrap aggregation, trains models in parallel on random subsets of the training data (created with replacement AKA bootstrap sampling)
- Prediction done using mode(prediction) for classification or average(prediction) for regression

![[Pasted image 20240403222848.png|250|250]]

## Boosting ensemble
- Trains models sequentially, each new model is trained on the same dataset but with the training instances with incorrect predictions from the previous model weighted more (higher error)
- The output is a weighted sum of the individual models' predictions


![[Pasted image 20240403222826.png|250|250]]

## Stacking ensemble
- Trains a new model to combine the predictions of several base models, base models are trained independently and in parallel like with bagging using the same dataset
- The predictions of these base models are used as input for a final "meta-model" that performs the final prediction. Offers a high level of model diversity 

![[Pasted image 20240403222749.png|250|250]]
