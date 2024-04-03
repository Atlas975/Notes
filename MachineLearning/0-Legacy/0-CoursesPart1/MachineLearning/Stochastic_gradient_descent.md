# Stochastic gradient descent 
[[MachineLearning/0-Legacy/0-CoursesPart1/MachineLearning/Gradient_descent]]
[[Large_data_ML]]
- A much less computationally expensive version of gradient descent
- Summary:
![[Pasted image 20220213172606.png|450|450]]
- Rather than going through all training examples at once, this method allows for a single example to be taken and progress to be made at optimizing it.
- Stochastic GD is much faster but wont always make progress towards the global minimum, it'll slowly converge but never really hit the minimum itself. It will however get very close and oscillate around it.
![[Pasted image 20220213173233.png|450|450]]
## Checking for convergence
![[Pasted image 20220213175014.png|450|450]]
red line indicates higher num of examples
- While a value close to convergence is often fine, it can be brought closer by adjusting the learning rate while running
![[Pasted image 20220213175212.png|450|450]] 