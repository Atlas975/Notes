> [!important]- Metadata
> **Tags:** #StatisticalLearning #Statistics 
> **Located:** MachineLearning/ErrorMeasures
> **Created:** 18/04/2024 - 14:56
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Cross-entropy
- Measures the difference between the distribution of the true labels and the distribution predicted by the model.  Lower cross-entropy = model predictions closer to the actual distribution
- This is often used as a loss function for multi-class classification problems and is calculate by taking the negative sum of the log probabilities

$$-\sum y_{i}\cdot \ln(\hat{y_{i}})$$

$$y=\text{t rue label (0/1), will only be 1 for the correct class }i $$
$$\hat{y}=\text{predicted probability that observation }i \text{ is that class}$$

![[Pasted image 20240418154821.png|500|500]]