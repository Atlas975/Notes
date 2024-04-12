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


## Linear regression steps
1. Initialisation (all model coefficients $\beta$ set to 0)
2. Calculate hypothesis for each data point:

$$\overline{y}_{1}=h_{1}(x_{i})=\beta_{0}+\beta_{1}x_{1}$$
$$\overline{y}_{2}=\beta_{0}+\beta_{1}x_{1}$$
$$\dots$$

3. Calculate the cost function (eg modified [[Model_metrics#Mean squared error (MSE)|MSE]]):
$$E(\beta_{0},\beta_{1})=\frac{1}{2n}\sum_{i=1}^{n}(y_{i}-\hat{y}_{i})^2$$

4. Calculate cost function's partial derivatives for each parameter:
$$\frac{\partial}{\partial \beta_0} E(\beta_0, \beta_1) = \frac{1}{m} \sum_{i=1}^{m} (h_i(x) - y_i)$$
$$\frac{\partial}{\partial \beta_1} E(\beta_0, \beta_1) = \frac{1}{m} \sum_{i=1}^{m} (h_i(x) - y_i) \cdot x_i$$
5. Update the parameters for the next iteration:

$$\beta_0 := \beta_0 - \alpha \frac{\partial}{\partial \beta_0} E(\beta_0, \beta_1)$$
## Multivariate Linear RegressionSS
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
