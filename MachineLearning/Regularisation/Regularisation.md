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
- This can be done by modifying the cost function, these are shrinkage methods and are controlled by a regularisation parameter $(\lambda)$

## Lasso (L1) regularisation 
- Lasso (Least Absolute Shrinkage and Selection Operator) adds a penalty equal to the absolute value of the magnitude of the coefficients
- The cost function for Lasso regression is:

$$J(\theta)=\text{Loss}+\lambda \sum |\theta|$$
-  Lasso can shrink some coefficients to exactly zero, effectively performing feature selection by automatically excluding less important features
-  By producing sparse models (fewer features), Lasso can make the model easier to interpret.

## Ridge (L2) regularisation
- Adds a penalty equal to the square of the magnitude of the coefficients
- The cost function for Ridge regression is:

$$J(\theta)=\text{Loss}+\lambda \sum\theta^2$$
- The penalty term adds a quadratic cost to the magnitude of each coefficient. This cost increases rapidly as the coefficient value increases, which discourages large coefficients
- This results in less complete elimination of features by encouraging the model to not overly invest in a small number of features, instead only shrinking them 