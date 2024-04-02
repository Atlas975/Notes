> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** MachineLearning/FeatureEngineering
> **Created:** 02/04/2024 - 19:37
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Normalisation
- Involves adjusting data from different scales to a common scale without distorting the differences between them, making it easier to compare and analyse.
- Also improves the performance and accuracy of machine learning algorithms by ensuring that each feature contributes proportionately to the final prediction
## Standardisation 
- Done to ensure that data falls within a normal distribution
- Useful for various statistical models that assume normally distributed data

![[Pasted image 20220406164101.png|450|450]]

- This is also known as z-scaling as the new value is it's z-score in the distribution

$$\mathcal{x'}=\frac{x-\overline{x}}{\sigma}$$


## Min-max normalisation 
- Rescales the feature to a fixed range, usually 0 to 1, or -1 to 1.


![[Pasted image 20220406164052.png|450|450]]

$$\mathcal{x'}=\frac{x-x_{min}}{x_{max}-x_{min}}$$

## Manhattan (L1) normalisation 
- Useful for promoting sparsity in the coefficients of a model, as it tends to push the solutions towards vectors with fewer non-zero components
$$x'=\frac{x}{\sum x_{i}}$$
## Euclidean (L2) normalisation 
- Converts data into unit vectors with magnitudes equal to 1
- In machine learning this can help in regularising the model, preventing overfitting by ensuring that the magnitude of weights doesn't grow too large.

$$x'=\frac{x}{\sqrt{ \sum x_{i}^2 }}$$
