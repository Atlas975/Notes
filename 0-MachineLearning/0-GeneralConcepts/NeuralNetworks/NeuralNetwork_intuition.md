# Neural Network intuition
[[Graphs]]
> W (weights) correspond to how strong a connection from one neuron to another is

> A (activation function) squishes the results of the weights and inputs so that the result is a value ranging between 0 and 1.

> B (bias) ensures that the result of the weight and input product is only meaningful after a certain threshold is met. It is added before squishing with an activation function and can be thought of as an additional neuron added to each layer
- This is usually handeled through matrix algebra
>![[Pasted image 20220304105246.png]]
a1 then becomes the input (x) of the next layer

# Gradient descent intuition
> C (cost function) acts as a way of penalizing incorrect outputs until the weights and biases are able to result in the correct activations, it corresponds to the network learning
- Each output unit has its own cost, the average cost is then taken
>![[Pasted image 20220304110131.png]]
this cost is smaller for correct outputs and larger for incorrect ones
- Since often the cost function can be very complex with multiple minima, its often more efficient to use gradient descent, especially for a higher order polynomial
- Gradient descent is instead done where if the slope of the function at the given point is decreasing, a step is then taken in that direction. Note random initialization can influence the local minima this lands on. These steps naturally decrease as a minima is approached 
>![[Pasted image 20220304110528.png|700|500]]
- Example step
>![[Pasted image 20220304111403.png|700|500]]
- The gradient of the cost function tells us what nudges to the weights and biases change the cost function the most

# Backpropagation intuition
- An algorithm used to calculate the gradient of the cost function, this penalizes the network until the correct output neurons are activated.
- Example on an untrained network feeding the number 2, we would want the neuron corresponding to 2 to be nudged up while all other neurons are nudged down. Furthermore we would want the nudge down to be proportional to how different the other numbers are to 2
>![[Pasted image 20220304112749.png]]
- We would also want anything connected to the 2 neuron with a positive weight to get brighter while any neuron with negative weight gets dimmer.	
>![[Pasted image 20220304113100.png]]
- In a full network, the desires of every other neuron is added as well
>![[Pasted image 20220304113216.png|700|500]]
- This gives a list of nudges that you want to happen to that layer and so on, which are then averaged.
>![[Pasted image 20220304113459.png|400|300]]
>![[Pasted image 20220304114301.png]]
this roughly corresponds to the negative gradient of the cost function
- [[Stochastic_gradient_descent]] is commonly used (dividing into mini batches), this is the equivalent of taking short but random steps to a local minima

## Backpropagation process
- Backpropagation relies on the chain rule to calculate the influence of a nudge to each parameter
- Summary of effect on two neurons:
>![[Pasted image 20220304115127.png]]
- Note the actual influence the previous neuron has depends on the weight, all of this is also only the cost of a single training example
>![[Pasted image 20220304120014.png]]
- Influence of B and A 
>![[Pasted image 20220304120430.png]]
>![[Pasted image 20220304120540.png]]
- The gradient vector itself looks like:
>![[Pasted image 20220304120256.png|400|300]]

# Summmary
- The general methodology to build a Neural Network is to:

1. Define the neural network structure ( # of input units, # of hidden units, etc).
2. Initialize the model's parameters
3. Loop:
- Implement forward propagation
- Compute loss
- Implement backward propagation to get the gradients
- Update parameters (gradient descent)

## Logistic regression backpropagation example
>![[Pasted image 20220305133049.png]]

