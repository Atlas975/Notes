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

- A statistical method used to linearly model the relationship between a dependent variable and one or more independent variables. 
- It assumes that the relationship between the variables is linear making it a computationally cheap way to predict relationships between variables 
$$y = \beta_0 + \beta_1x + \epsilon$$
$$\beta=\text{model coefficients}$$
$$\epsilon=\text{error term}$$

![[Pasted image 20240412180359.png|350|350]]

## Linear regression steps
1. Initialisation (all model coefficients $\beta$ set to 0)
2. Calculate hypothesis for each data point:

$$\hat{y}_{1}=h_{1}(x_{1})=\beta_{0}+\beta_{1}x_{1}$$
$$\hat{y}_{2}=\beta_{0}+\beta_{1}x_{2}$$
$$\dots$$

3. Calculate the cost function (eg [[Loss_functions#Mean squared error (MSE)|MSE]]):
$$E(\beta_{0},\beta_{1})=\frac{1}{n}\sum(y_{i}-\hat{y}_{i})^2$$

4. Calculate cost function's partial derivatives for each parameter:
$$I_{\beta_{0}}=\frac{\partial C}{\partial \beta_0}  = \frac{1}{n} \sum (h_i(x) - y_i)$$
$$I_{\beta_{1}}=\frac{\partial C}{\partial \beta_1}  = \frac{1}{n} \sum (h_i(x) - y_i) \cdot x_i$$
5. Update the parameters using the learning rate and partial derivatives:

$$\beta_0 := \beta_0 - \alpha \cdot I_{\beta_{0}}$$
$$\beta_1 := \beta_1 - \alpha \cdot I_{\beta_{1}}$$

6. Repeat steps 2-5 until convergence / max iteration is reached 
## Multivariate linear regression
- An extension of simple linear regression that allows for predicting a dependent variable based on two or more independent variables.
- This uses a multi-dimensional plane for fitting but follows the same general algorithm

  $$y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_nx_n + \epsilon$$

![[Pasted image 20240412180216.png|300|300]]

