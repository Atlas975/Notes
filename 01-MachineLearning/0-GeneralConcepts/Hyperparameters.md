# Parameters
- Refers to values like the weight and bias, also known as model parameters. These are whats optimized via machine learning algorithms / estimated through the use of data.

# Hyperparameters
- Hyperparameters refer to values like the number of iterations, hidden layers, activation function choice, nodes in each layer, learning rate (alpha) etc. These are what are control the parameters.

## Scaling hyperparameters
- When testing out different hyperparameters, performing tests on a uniform distribution might not always make the most sense when the value of the parameter can vary greatly, 
- For example when looking for an ideal parameter between 0.0001 and 1, it might be more efficient to test on a logarithmic scale at first to determine which radix bucket the hyperparameter falls into.\
>![[Pasted image 20220416221048.png]]
- In an [[Exponentially_weighted_averages]] this matters even more as using a value of beta at around 0.9 is equivelent to taking the last 10 values into account while a beta value of 0.999 is equivalent to taking the last 1000 values into account 
>![[Pasted image 20220416221603.png]]

## Approaches to adjusting hyperparameters 
- There are 2 core approaches to adjusting hyperparameters, one is to babysit the model day by day adjusting as needed and the other is to run several models with different values simultaneously to speed up the search process
>![[Pasted image 20220416222202.png]] 
