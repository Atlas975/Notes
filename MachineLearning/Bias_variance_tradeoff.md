> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 22/04/2024 - 20:03
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bias variance tradeoff
- Describes the dilemma faced when trying to minimise two sources of error that models from generalising beyond their training data
- Understanding this tradeoff is crucial for effectively training models, particularly in choosing the right model complexity and in tuning hyperparameters.


![[Pasted image 20220225163602.png|450|450|400|400]]

## Bias
- Measures the error due to overly simplistic assumptions in the learning algorithm. A high bias model is likely to underfit the training data
- This means a model is too simple and does not capture the underlying trends properly. It generally results in a high error on both training and testing data

## Variance
- Measures the error due to excessive sensitivity to small fluctuations in the training set. A high variance model overfits the training data by capturing the noise in the data
- This means a model performs well on training data but poorly on unseen testing data because it is too tailored to the specifics of the training set


## Tradeoff
- **High Bias, Low Variance Models:** These are typically simple models that do not model the complex patterns in data well but perform consistently across different datasets. Examples include linear regression on non-linear problems.
- **Low Bias, High Variance Models:** These are typically complex models that can model complex patterns very well but can overfit to noisy or unrepresentative training data. Examples include deep neural networks without regularisation or with a very large number of parameters.



![[Pasted image 20240422201428.png|250|250]]
## Balancing bias and variance
- **Model Complexity:** Adjusting the complexity of the model is a direct way to influence bias and variance. Increasing the complexity of the model (e.g., adding more parameters) typically decreases bias but increases variance, and vice versa.
- **Training Data Size:** Increasing the amount of training data can help reduce variance without increasing bias. More data provides a better approximation of the true population, allowing complex models to learn patterns without fitting to noise.
- **Regularization:** Techniques like L1 and L2 regularization add a penalty for larger weights in the model, effectively reducing variance by preventing the model from becoming overly complex.
- **Cross-Validation:** Using cross-validation techniques helps in assessing how the model’s predictions would generalize to an independent dataset. It's a useful technique for finding a good balance between bias and variance.