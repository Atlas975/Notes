# Backpropagation implement
- Typically in backpropagation, bias values are initialized at 0
>![[Pasted image 20220221223157.png]]
>![[Pasted image 20220221223238.png]]
- Residual summation
>![[Pasted image 20220221223450.png]]
>![[Pasted image 20220221223523.png]]
- Example derivation
>![[Pasted image 20220221223715.png]]
>![[Pasted image 20220221223822.png]]
>![[Pasted image 20220221223847.png]]
- Next step:
>![[Pasted image 20220221223957.png]]
## Random initialization
- Its important to randomly initialize weights before running backpropagation. Initializing at 0 fails to break symmetry and after any number of iterations, the weights and biases wont be adjusted as each layer has the same amount of influence as another layer.
>![[Pasted image 20220303205932.png]]
- Its also recommended to intiailize weights at very small values as if the weights are too large the activation function will quickly reach a flatter region where gradient descent will be slow.
>![[Pasted image 20220303210104.png]] 
