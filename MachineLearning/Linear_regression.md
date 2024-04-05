> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 20/06/2022 - 16:21
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Linear Regression

- A statistical method used to model the relationship between a dependent variable and one or more independent variables.
- The method assumes that the relationship between the variables is linear.

## Leverage Statistic

- Helps to identify observations that are potentially influential in a regression analysis. 
- High-leverage points are observations that have extreme predictor values and they can have a greater potential to affect the position of the regression line.


$$\text{leverage}=\frac{1}{m}+\frac{(x-\overline{x})^2}{\sum_{i=1}^m(x_{i}-\overline{x})^2}$$
### Interpretation of Leverage

- Observations with leverage values significantly higher than the average leverage of \( \frac{1}{m} \) are considered to have high leverage.
- High leverage does not imply that the observation is an outlier in the dependent variable (Y) space or that it has a large residual, but it means that the observation's value of the independent variable (X) is far from the mean of X.
- Observations with high leverage can unduly influence the estimation of the regression line if they also have large residuals, making them influential points.

### Implications of High Leverage Points

- They can distort the results of the regression analysis and affect the slope of the regression line.
- They may indicate data quality issues or errors in data collection.
- It's important to investigate high leverage points to ensure they are valid and to understand their impact on the regression model.

### Handling High Leverage Points

- High leverage observations should be examined carefully. If they are errors, they should be corrected or removed.
- If they are not errors, one might consider whether the model needs to be re-specified, possibly by adding polynomial terms or interaction effects to better capture the underlying relationship between the variables.
- Robust regression techniques can also be employed to diminish the influence of high leverage points.