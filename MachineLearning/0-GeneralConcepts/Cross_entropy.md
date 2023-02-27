# Cross entropy
- A method of determining how well a neural network fits data by evaluating the output.
- Cross entropy loss formula
![[Pasted image 20220304122805.png|450|450]]
- Example:
![[Pasted image 20220304122641.png|450|450]]
- Calculating cross entropy for above example
![[Pasted image 20220304122926.png|450|450]]
![[Pasted image 20220304122955.png|450|450]]
this leaves only the predicted probability for setosa
- Plugging this in
![[Pasted image 20220304123204.png|450|450]]
- Total cross entropy
![[Pasted image 20220304123308.png|450|450]]
## Residual for cross entropy
- The SSR for cross entropy can	have benefits over using the standard SSR
![[Pasted image 20220304123550.png|450|450]]
- The softmax function only gives values between 0 and 1 meaning that if the setosa prediction is excellent it'll be close to 1, if not it'll be close to 0. This also means the loss gets very large for worse predictions
![[Pasted image 20220304124516.png|450|450]]
- Compared to the typical squared residual
![[Pasted image 20220304124727.png|450|450]]
- Note the step size for backpropagation depends on the derivative of these functions, the slope for cross entropy is very large for bad predictions creating large steps.
![[Pasted image 20220304124901.png|450|450]]

# Backpropagation with cross entropy
[[NeuralNetwork_intuition]]
- Summary of backpropagation on the example dataset (2 parameters)
![[Pasted image 20220304125705.png|450|450]]
- Note that the softmax function outputs the probability of each outcome occurring, in the case of setosa with cross-entropy the predicted probability also depends on the output neurons for the other two flowers. 
- Backpropagating for the cross entropy cost function of setosa with respect to b3 (final bias):
![[Pasted image 20220304133352.png|450|450]]
- Derivation steps:

![[Pasted image 20220304133748.png|450|450]]
cross entropy derivation

![[Pasted image 20220304135218.png|450|450]]
softmax for setosa derivation

![[Pasted image 20220304135603.png|450|450]]
both surface were created before reaching b3 meaning they derive to 0, making the derivation of raw ouput for setosa 1
![[Pasted image 20220304135742.png|450|450]]
derivation of setosa raw input with respect to bias3

- Simplifying:
![[Pasted image 20220304140000.png|450|450]]

- Backpropagating for the cross entropy cost function of other ouput neurons with respect to b3 (final bias):
![[Pasted image 20220304141205.png|450|450]]
- Derivation steps

![[Pasted image 20220304145838.png|450|450]]
cross-entropy derivation

![[Pasted image 20220304145914.png|450|450]]
softmax for setosa derivation with respect to viginica

![[Pasted image 20220304150234.png|450|450]]

- When the observed data is for virginica, we get the predicted probability of virginica which is used to calculate cross entropy then:

![[Pasted image 20220304150450.png|450|450]]

- Simplifying and multiplying by -1:

![[Pasted image 20220304150658.png|450|450]]
- All derivatives for b3

![[Pasted image 20220304150914.png|450|450]]
note all of these only influence the raw output for setosa
![[Pasted image 20220304151029.png|450|450]]

## Cross entropy gradient descent
- Plotting cross entropy after random initialization
![[Pasted image 20220304151320.png|450|450]]
- Plugging in random values for b3
![[Pasted image 20220304151436.png|450|450]]
- Backpropagation allows us to find the value of b3 that minimizes total cross entropy
- Example calculation
![[Pasted image 20220304151812.png|450|450]]
- Multiplying the slope of a step size of 1:
![[Pasted image 20220304151934.png|450|450]]
![[Pasted image 20220304152021.png|450|450]]
this is done until predictions stop improving or maximum steps are reached