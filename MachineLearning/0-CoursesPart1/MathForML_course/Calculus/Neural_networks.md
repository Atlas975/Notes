
# Basic neural network
- Fundementally, a neural network is just a mathematical function with an input and output.
>![[Pasted image 20211219143815.png]]
- Example:
>![[Pasted image 20211219144135.png]]
>![[Pasted image 20211219144220.png]]
## Tanh
- A ratio of exponential terms
>![[Pasted image 20211219143942.png]]

# Backpropagation
- Supervised learning algorithm that uses the cost function to train a neural network
- Example input a face, output emotion

# Cost function
- The sum of the squares of the differences of desired output (y) and the output currently given (ai)
>![[Pasted image 20211221234533.png]]
- Defining equation
>![[Pasted image 20211221235812.png]]
- Example with different weights:
>![[Pasted image 20211221234712.png]]
- Make weight smaller to improve network
>![[Pasted image 20211221234800.png]]
- Multiple minimums, requiring jacobian