# Ensemble methods 
- Methods of improving performance by averaging out predictions made through multiple predictors. By definition ensemble methods combine predictions made by several models
- [[Regression_trees]] are an example of this but the same can be done for other models through the use of gradient Boosting

>![[Pasted image 20220406135528.png]]

# Gradient boosting 
- A method of iteratively adding models to the ensemble, begins by starting with a single model and subsequent models help correct inaccuracies 
- These predictions are used to find a loss function, this loss function can then be used to create models that reduce the loss function 