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
- Describes the dilemma faced when trying to minimise two sources of error that models face from generalising beyond their training data
- Understanding this tradeoff is crucial for effectively training models, particularly in choosing the right model complexity and in tuning hyperparameters.

![[Pasted image 20240528212337.png|500|500]]



## Bias
- Measures the error due to overly simplistic assumptions in the learning algorithm. A high bias model is likely to underfit the training data
- This means a model is too simple and does not capture the underlying trends properly. It generally results in a high error on both training and testing data

## Variance
- Measures the error due to excessive sensitivity to small fluctuations in the training set. A high variance model overfits the training data by capturing the noise in the data
- This means a model performs well on training data but poorly on unseen testing data because it is too tailored to the specifics of the training set


## Tradeoff
- **High Bias, Low Variance:** simple models that can't model complex patterns in data well but perform consistently across different datasets. Eg linear regression on non-linear problems.
- **Low Bias, High Variance Models:** complex models that can model complex patterns well but can overfit to noisy or unrepresentative training data. Eg deep neural networks without regularisation 

![[Pasted image 20240422201428.png|250|250]]
## Balancing bias and variance
- **Model complexity:** adjusting the complexity of the model is a direct way to influence bias and variance. Increasing the complexity of the model decreases bias but increases variance
- **Training data size:** Increasing the amount of training data can help reduce variance without increasing bias. More data provides a better approximation of the true population
- **Regularisation:** techniques like L1 and L2 regularisation add a penalty for larger weights in the model, reducing variance by preventing the model from becoming overly complex.

![[Pasted image 20240528212520.png|350|350]]

- **Cross-Validation:** helps in assessing how the model’s predictions would generalise to an independent dataset, useful for finding a good balance between bias and variance.
- **Early stopping**: once test / validation loss starts to rise, weights can be reset to where the minimum occurred, ensures that the model won't continue to learn noise and overfit the data.

```python
early_stopping = EarlyStopping(
    min_delta=0.001, # minimium amount of change to count as an improvement
    patience=20, # how many epochs to wait before stopping
    restore_best_weights=True,
)
```