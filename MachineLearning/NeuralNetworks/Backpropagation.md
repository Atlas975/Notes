> [!important]- Metadata
> **Tags:** #
> **Located:** MachineLearning/NeuralNetworks
> **Created:** 08/04/2024 - 16:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Backpropagation
- An algorithm used to train [[Neural_networks|neural networks]] by optimising the weights ($w$) and biases ($b$) to minimise the cost function typically by using [[Gradient_descent|gradient descent]]
- The gradients calculation helps the model adjust parameters proportional to how much influence they have on changing the cost function. 
- This continues iteratively until the network’s performance stops noticeably improving on a hold-out validation set, or a maximum number of epochs is reached.



## Derivatives in backpropagation
- Derivatives provide essential information on both the direction and magnitude for adjusting network parameters, this is performed using the chain rule 
- This is crucial for dealing with non-linear activation functions in the network, ensuring proper propagation of gradients through multiple layers and efficient cost function minimisation

![[Pasted image 20220621204400.png||350|350]]

- The cost function ($C$) guides network performance, so all derivatives are calculated with respect to it, this propagates backwards and allows for efficient cost function navigation 
- These follow a general pattern, multiple activation ($\sigma$) and cost ($C$) functions exist with unique derivatives so these will be marked with $\sigma'$ and $C'$ respectively

- w.r.t the activations
 $$\text{hidden layer: }\frac{ \partial z }{ \partial a } (w\cdot a+b)\to z$$
 $$\frac{ \partial C }{ \partial a }= w \cdot \frac{ \partial C }{ \partial z } $$

$$\text{ouput layer: }\frac{ \partial C }{ \partial a }C(a)\to \text{cost value}  $$
$$\frac{ \partial C }{ \partial a }=C'(a) $$
- w.r.t the net input
$$\frac{ \partial a }{ \partial z }\sigma(z)\to a $$
$$\frac{ \partial C }{ \partial z } = \sigma'(z)\cdot \frac{ \partial C }{ \partial a }  $$


- w.r.t the weights

$$\frac{ \partial z }{ \partial w } (w\cdot a+b)\to z$$
$$\frac{ \partial C }{ \partial a }= a \cdot \frac{ \partial C }{ \partial z } $$
- w.r.t the bias
$$\frac{ \partial z }{ \partial b } (w\cdot a+b)\to z$$
$$\frac{ \partial C }{ \partial b }=1\cdot \frac{ \partial C }{ \partial z }  $$

## Backpropagation algorithm

```python
import numpy as np
import matplotlib.pyplot as plt

def activation(x):  # use sigmoid function for activation
    return 1 / (1 + np.exp(-x))

def activation_deriv(sig_x):  # derivative of sigmoid function
    return sig_x * (1 - sig_x)  # pass in post-activation for efficiency

def cost(y, y_pred):  # use mean squared error as cost function
    return ((y - y_pred) ** 2) / 2

def cost_deriv(y, y_pred):  # derivative of cost function
    return y_pred - y

X = np.array([[1, 1], [0, 1], [1, 0], [0, 0]])
Y = np.array([[0], [1], [1], [0]])  # attempt to generalize a XOR gate
learning_rate = 0.5
max_iterations = 2_500
cost_save = np.zeros(max_iterations) # store costs for visualization

input_sz = X.shape[1]  # number of features (input neurons)
hidden_sz = 3  # number of neurons in hidden layer (one hidden layer)
output_sz = Y.shape[1]  # number of output neurons (output layer) 

# initialize weights + biases with random values between -1 and 1
w1 = np.random.uniform(-1, 1, size=(input_sz, hidden_sz))  # hidden weights
w2 = np.random.uniform(-1, 1, size=(hidden_sz, output_sz))  # output weights
b1 = np.random.uniform(-1, 1, size=(1, hidden_sz))  # hidden biases
b2 = np.random.uniform(-1, 1, size=(1, output_sz))  # output biases

for epoch in range(max_iterations):  # perform batch gradient descent
    # forward pass
    z1 = X.dot(w1) + b1
    a1 = activation(z1)  # hidden layer activation
    z2 = a1.dot(w2) + b2
    a2 = activation(z2)  # output layer activation

    # backwards pass 
    dA2 = cost_deriv(Y, a2)  # dC/dA2 (direct derivative of cost function)
    dZ2 = dA2 * activation_deriv(a2) # dC/dZ2 = dA2/dZ2 * dC/dA2
    dW2 = a1.T.dot(dZ2) # dC/dW2 = dA1 * dZ2
    dB2 = sum(dZ2) # dC/dB2 = dZ2 (sum across all dZ2)

    dA1 = dZ2.dot(w2.T) # dC/dA1 = dZ2 * W2
    dZ1 = dA1 * activation_deriv(a1) # dC/dZ1 = dA1/dZ1 * dC/dA1
    dW1 = X.T.dot(dZ1) # dC/dW1 = dX * dZ1
    dB1 = sum(dZ1) # dC/dB1 = dZ1 (sum across all dZ1)

    # update weights and biases
    w2 -= learning_rate * dW2 # update weights
    w1 -= learning_rate * dW1
    b2 -= learning_rate * dB2 # update biases
    b1 -= learning_rate * dB1

    cost_save[epoch] = np.mean(cost(Y, a2))  # store cost for visualization

print(f"Binary Class Predictions:\n{(a2 > 0.5).astype(int).T}")
print(f"Accuracy: {np.mean((a2 > 0.5) == Y) * 100}%")  # accuracy of model

plt.plot(cost_save) # visualize cost over iterations
plt.title("Cost vs. Iterations")
plt.xlabel("Iterations")
plt.ylabel("Cost")
plt.show()
```

