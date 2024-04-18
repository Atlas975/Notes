> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/ErrorMeasures
> **Created:** 28/02/2023 - 12:00
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Loss functions
- Used to evaluate the performance of a machine learning model 
- Various methods exist for evaluating the performance of a machine learning model in predicting both categorical and regression data
## Mean squared error (MSE)
- Commonly used for measuring loss in [[Linear_regression|regression]] problems
$$\text{MSE}=\frac{1}{m}\sum(y-\hat{y})^2$$


## Root mean square error (RMSE)
- More sensitive to outliers in predictions

$$\text{RMSE}=\sqrt{ \frac{1}{m}\sum(y-\hat{y})^2}$$


## Mean absolute error (MAE)
- Preferred for bell curves 

$$\text{MAE}=\frac{1}{m}\sum|y-\hat{y}| $$

## Classification accuracy
- Where the prediction is qualitative, the training error rate may be used to find the number of made, can be summarized as:

$$\text{Accuracy}=\frac{1}{m}\sum y\neq{\hat{y}}$$

## Cross-entropy
- Useful for multi-class classification problems by estimating [[Cross-entropy]]


## F-score / F-statistic
- Makes use of the [[Confusion_matrices|confusion matrix]]
