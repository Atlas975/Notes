> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Regularisation
- A technique used to prevent [[Bias_variance_tradeoff|overfitting]] in statistical models by adding a controlled penalty to the models complexity, discouraging it from fitting to noise.
- Thi