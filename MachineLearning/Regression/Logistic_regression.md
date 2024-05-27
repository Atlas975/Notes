> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/Regression
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Logistic regression
- A statistical method used for binary classification, predicts the outcome of a categorical dependent variable based on one or more predictor variables
- Makes use of the [[Sigmoid_function|Sigmoid function]] to model the probability of the default class

$$\sigma(y)=\frac{1}{1+e^{-y}}$$
$$y \text{ is a linear combination of input features }(y=\beta_{0}+\beta_{1}x_{1}+\beta_{2}x_{2}\dots)$$

- This is typically trained the same way as [[Linear_regression|linear regression]] but with [[Cross-entropy]] used as it's loss function to evaluate model performance 