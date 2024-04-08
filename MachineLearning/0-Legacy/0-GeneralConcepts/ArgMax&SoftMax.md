# Argmax / Hardmax
- A function that can help find the largest predicted probability in machine learning, it also makes results easier to interpret
![[Pasted image 20220302204047.png|450|450]]
- Since the output values are rounded, they cant be used in backpropagation
- Elaborating on why that is:
![[Pasted image 20220302204233.png|450|450]]
because the slopes of both these lines are zero, their derivative is also zero.
![[Pasted image 20220302204331.png|450|450]]
plugging in 0 within gradient descent means that we wont make steps towards the optimal parameters

# Softmax
- While Argmax is often used for output, softmax will often be used for actual training, can be used with [[Backpropagation_legacy]]
- Softmax formula:
![[Pasted image 20220302204721.png|450|450]]
-Implementation on last layer 
![[Pasted image 20220417213205.png|450|450]]
- In this example:
![[Pasted image 20220302204844.png|450|450]]only the numerator changes
- As seen here, the softmax function preserves value order and output values will always be between 0 and 1. Note the total softmax values are also 1. 
- This means that as long as the output values are mutually exclusive, the output values can be seen as predicted probabilities.
- However since these depend on the weights and biases of the network which depend on the randomly selected initial values.
- While the network will still be as good at classifying data, it can however result in different raw output values
![[Pasted image 20220302210821.png|450|450]]
dont put a lot of trust in these predicted probabilities 

## Softmax derivative
- Using the quotient rule on the softmax formula:
![[Pasted image 20220302211448.png|450|450]]
- Simplifying:
![[Pasted image 20220302211642.png|450|450]]

![[Pasted image 20220302211018.png|450|450]]
![[Pasted image 20220302211734.png|450|450]]

- Taking the derivative of another output
![[Pasted image 20220302211939.png|450|450]]
![[Pasted image 20220302212107.png|450|450]]
![[Pasted image 20220302212124.png|450|450]]
![[Pasted image 20220302212211.png|450|450]]
- Final derivative
![[Pasted image 20220302212333.png|450|450]]

## Softmax decision boundry
- With no hidden layer, softmax will result in a linear decision boundary 
![[Pasted image 20220417213047.png|450|450]]

# Softmax cost function and training
- Softmax generalizes to logistic regression just for N number of classes, meaning when N=2 this is the same as [[MachineLearning/0-Legacy/0-CoursesPart1/MachineLearning/Logistic_regression]] 

![[Pasted image 20220418110006.png|450|450]]

