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


## Lasso regularisation
- Lasso (Least Absolute Shrinkage and Selection Operator) adds a penalty equal to the absolute value of the magnitude of the coefficients. 
- The cost function for Lasso regression is:

$$J(\theta)=\text{Loss}+\lambda \sum |\theta|$$
-  **Feature Selection:** Lasso can shrink some coefficients to exactly zero, effectively performing feature selection by excluding less important features.
-  **Interpretability:** By producing sparse models (fewer features), Lasso can make the model easier to interpret.