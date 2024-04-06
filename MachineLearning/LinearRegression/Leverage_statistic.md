> [!important]- Metadata
> **Tags:** #Statistics #StatisticalLearning 
> **Located:** MachineLearning/LinearRegression
> **Created:** 06/04/2024 - 19:53
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Leverage statistic
- Measures the influence of a single observation on the overall fit of a linear regression model. High-leverage points can significantly alter the regression coefficients.
- Leverage is based on how much an individual data point's value of the predictor (independent) variable differs from the mean of those values:

$$\text{leverage}_i = \frac{1}{n} + \frac{(x_i - \overline{x})^2}{\sum_{j=1}^{n}(x_j - \overline{x})^2}$$

- High-leverage points are not necessarily outliers in the Y-space (dependent variable), but they have extreme values in the X-space (independent variable) that can disproportionately affect the slope of the regression line.
## Interpretation
- Leverage points can significantly influence the regression line, particularly if they also have large residuals. Observations with high leverage require careful investigation.
- Leverage ranges from $\frac{1}{n}$ to 1, and an observation with a leverage value significantly higher than the average of $\frac{p+1}{n}$ (where \(p\) is the number of predictors) is considered high leverage.
- High leverage observations can disproportionately affect the estimated regression coefficients, potentially leading to a misleading interpretation of the data.

## Handling high leverage 
- Review high leverage points for potential data errors or outliers.
- Consider robust regression methods to reduce the influence of these points, ensuring a more reliable model.
