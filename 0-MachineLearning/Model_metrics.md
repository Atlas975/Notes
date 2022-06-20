
[[Statistical_modeling]] #StatisticalLearning 
# Mean squared error (MSE)
> $$\text{MSE}=\frac{1}{m}\sum_{i=1}^{m}(y-\hat{y})^2$$


# Root mean square error (RMSE) 
- More sensitive to outliers in predictions

>$$\text{RMSE}=\sqrt{ \frac{1}{m}\sum_{1}^{m}(y-\hat{y})^2}$$


# Mean absolute error (MAE)
- Preferred for bell curves 

>$$\text{MAE}=\frac{1}{m}\sum_{1}^{m}|y-\hat{y}| $$

# Classification accuracy
- Where the prediction is qualitative, the training error rate may be used to find the number of mistakes that made, can be summarized as:

> $$\frac{1}{m}\sum_{i=1}^{m}y\neq{\hat{y}}$$
# F-score / F-statistic

> $$\text{Precision}=\frac{\text{True positives}}{\text{True Positives}+\color{cyan}{\text{False positives}}}$$
> 
> $$\text{Recall}=\frac{\text{True positives}}{\text{True Positives}+\color{red}{\text{False negatives}}}$$