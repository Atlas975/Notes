# Vectorized logistic regression
[[Computation_graph]]

## Computation graph for logistic regression
>![[Pasted image 20220302011102.png]]
in this case we want to tune input parameters to minimize the loss (cost function)
>![[Pasted image 20220302072320.png]]

## Gradient descent on m examples
- Example, calculating average cost function for logistic regression with respect to db,dw (2 parameters for b)
>![[Pasted image 20220302072853.png]]
1 step of logistic regression, note in the above loop we'd actually need another for loop to account for n parameters instead of just 2
>![[Pasted image 20220302073032.png|200|200]]

## Vectorized logistic regression gradient descent
>![[Pasted image 20220302080544.png]]
>![[Pasted image 20220302080957.png]]
while b is a constant, python will internally broadcast its as a 1xn matrix, X is an (nx,m) dimensional matrix
>![[Pasted image 20220302081829.png]]

