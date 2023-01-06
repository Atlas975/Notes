# Stochastic gradient descent 
[[MachineLearning/0-CoursesPart1/MachineLearning/Gradient_descent]]
[[Large_data_ML]]
- A much less computationally expensive version of gradient descent
- Summary:
>![[Pasted image 20220213172606.png]]
- Rather than going through all training examples at once, this method allows for a single example to be taken and progress to be made at optimizing it.
- Stochastic GD is much faster but wont always make progress towards the global minimum, it'll slowly converge but never really hit the minimum itself. It will however get very close and oscillate around it.
>![[Pasted image 20220213173233.png]]
## Checking for convergence
>![[Pasted image 20220213175014.png]]
red line indicates higher num of examples
- While a value close to convergence is often fine, it can be brought closer by adjusting the learning rate while running
>![[Pasted image 20220213175212.png]] 