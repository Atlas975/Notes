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
- An ML model that makes use of [[Ensemble_learning#Bagging ensemble|ensemble bagging]] with multiple [[Decision_trees|decision trees]] 
- This avoids the risk of overfitting found when using a single tree, making it more versatile 


![[Pasted image 20240404063622.png|500|500]]
