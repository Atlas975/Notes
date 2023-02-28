> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 26/12/2022 - 09:23
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Model metrics

## Mean squared error (MSE)
> $$\text{MSE}=\frac{1}{m}\sum_{i=1}^{m}(y-\hat{y})^2$$


## Root mean square error (RMSE) 
- More sensitive to outliers in predictions

>$$\text{RMSE}=\sqrt{ \frac{1}{m}\sum_{1}^{m}(y-\hat{y})^2}$$


## Mean absolute error (MAE)
- Preferred for bell curves 

>$$\text{MAE}=\frac{1}{m}\sum_{1}^{m}|y-\hat{y}| $$

## Classification accuracy
- Where the prediction is qualitative, the training error rate may be used to find the number of made, can be summarized as:

> $$\text{Accuracy}=\frac{1}{m}\sum_{i=1}^{m}y\neq{\hat{y}}$$
## F-score / F-statistic

> $$\text{Precision}=\frac{\text{True positives}}{\text{True Positives}+\text{False positives}}$$
> $$\text{Recall}=\frac{\text{True positives}}{\text{True Positives}+\text{False negatives}}$$

