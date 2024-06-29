> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/FeatureEngineering
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Batch normalisation
- A technique used in [[Neural_networks|deep neural nets]] to [[Normalisation|normalise / standardise]] the inputs at each layer to handle covariate shift (the distribution of inputs changing during training)
- This is especially useful in [[tran]]

![[Pasted image 20240629190156.png|450|450]]