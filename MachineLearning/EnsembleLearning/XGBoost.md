> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/EnsembleLearning
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# XGBoost
- An  implementation of gradient-boosted [[Decision_trees|decision trees]] designed for speed and performance using an [[Ensemble_learning#Boosting ensemble|ensemble]] of trees in a sequential manner 
- This makes use of a boosting mechanism to improve errors from previous trees, combining multiple weaker models to create a stronger one

![[Pasted image 20240629211242.png|450|450]]