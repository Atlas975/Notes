> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/TreeModels
> **Created:** 03/04/2024 - 21:37
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Random forest
- Involves using [[Decision_trees|decision trees]] created on different subsets of training data,  this improves predictive accuracy by averaging the results of individual trees
- This also avoids the risk of overfitting when using a single tree, making it more versatile 
