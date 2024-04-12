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
# Linear regression

- A statistical method used to model the relationship between a dependent variable and one or more independent variables. 
- It assumes that the relationship between the variables is linear making it a computationally cheap way to predict relationships between variables 
$$y = \beta_0 + \beta_1x + \epsilon$$
$$\beta=\text{model coefficients}$$
$$\epsilon=\text{error term}$$

## Multivariate Linear Regression
- Extends to multiple independent variables:
  $\( y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_nx_n + \epsilon \)$

## Assumptions
- Includes linearity, independence, homoscedasticity (constant variance of errors), and normal distribution of errors.

## Coefficient Estimation
- Coefficients are typically estimated using the least squares method, which minimizes the sum of the squared differences between the observed and predicted values.

## Evaluation Metrics
- Common metrics for evaluating the model include R-squared, Adjusted R-squared, Mean Squared Error (MSE), and Root Mean Squared Error (RMSE).

## Applications
- Used across various fields like economics, biology, engineering, and social sciences for both prediction and inference.

Linear regression is a foundational tool in statistics, providing a simple yet powerful way to understand and predict relationships between variables.

