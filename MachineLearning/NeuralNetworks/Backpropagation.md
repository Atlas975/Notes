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
- An algorithm used to train [[Neural_networks|neural networks]] by optimising the weights ($w$) 



![[Pasted image 20240414221901.png|200|200]]



## Backpropagation algorithm 
- The derivates with respect to the loss function $L$ follow a general pattern:
    - $@c$
- $$\frac{ \partial L }{ \partial z }=\frac{ \partial L }{ \partial a }  $$
```python
import numpy as np
import matplotlib.pyplot as plt

def activation(x):  # use sigmoid function for activation
    return 1 / (1 + np.exp(-x))

def activation_deriv(sig_x):  # derivative of sigmoid function
    return sig_x * (1 - sig_x)  # pass in post-activation for efficiency

def loss(y, y_pred):  # use mean squared error as loss function
    return ((y - y_pred) ** 2) / 2

def loss_deriv(y, y_pred):  # derivative of loss function
    return y_pred - y

X = np.array([[1, 1], [0, 1], [1, 0], [0, 0]])
Y = np.array([[0], [1], [1], [0]])  # attempt to generalize a XOR gate
learning_rate = 0.5
max_iterations = 2_500
costs = np.zeros(max_iterations)

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
    dA2 = loss_deriv(Y, a2)  # dL/dA2 (direct derivative of loss function)
    dZ2 = dA2 * activation_deriv(a2) # dL/dZ2 = dL/dA2 * dA2/dZ2
    dW2 = a1.T.dot(dZ2) # dL/dW2 = dZ2 * dA1
    dB2 = np.sum(dZ2, axis=0, keepdims=True) # dL/dB2 = dZ2 (sum across each sample)

    dA1 = dZ2.dot(w2.T) # dL/dA1 = dZ2 * W2
    dZ1 = dA1 * activation_deriv(a1) # dL/dZ1 = dL/dA1 * dA1/dZ1
    dW1 = X.T.dot(dZ1) # dL/dW1 = dX * dZ1
    dB1 = np.sum(dZ1, axis=0, keepdims=True) # dL/dB1 = dZ1

    # update weights and biases
    w2 -= learning_rate * dW2 # update weights
    w1 -= learning_rate * dW1
    b2 -= learning_rate * dB2 # update biases
    b1 -= learning_rate * dB1

    costs[epoch] = np.mean(loss(Y, a2))  # store cost for visualization

print(f"Binary Class Predictions:\n{(a2 > 0.5).astype(int).T}")
print(f"Accuracy: {np.mean((a2 > 0.5) == Y) * 100}%")  # accuracy of model

plt.plot(costs)
plt.title("Cost vs. Iterations")
plt.xlabel("Iterations")
plt.ylabel("Cost")
plt.show()
```
## Bacpropagation in Neural Networks

Backpropagation is a fundamental algorithm used for training neural networks. It efficiently computes the gradient of the loss function with respect to the weights of the network.

### Conceptual Overview

- **Purpose**: Backpropagation is used to calculate the gradient needed to update neural network weights to minimize the loss function.
- **Mechanism**: It employs the chain rule of calculus to backpropagate errors from the output layer to the input layer.

### Process

- **Forward Pass**:
    -  Input \(x\) is passed through the network layers.
      - Each neuron output is computed using $$z = wx + b$$ and passed through an activation function $$a = f(z)$$

- **Loss Calculation**:
  - For regression with Mean Squared Error: $$L = \frac{1}{2}(y - \hat{y})^2$$
  - For classification with Cross-Entropy: $$L = -y \log(\hat{y}) - (1-y) \log(1-\hat{y})$$
  - Here, \(y\) is the true label and \(\hat{y}\) is the predicted label from the forward pass.

- **Backward Pass (Backpropagation)**:
  - Compute the gradient of the loss function with respect to the output from the last layer: $$\frac{\partial L}{\partial \hat{y}}$$
  - Propagate this gradient back through the network using the chain rule: $$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial \hat{y}}\cdot \frac{\partial \hat{y}}{\partial z} \cdot\frac{\partial z}{\partial w}$$

- **Gradient Calculation**:
  - For weights: $$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} f'(z) x$$
  - For biases: $$\frac{\partial L}{\partial b} = \frac{\partial L}{\partial a} f'(z)$$
  - \(f'(z)\) is the derivative of the activation function, which varies depending on the function used (e.g., sigmoid, ReLU).

- **Update Weights**:
  - Update rule for weights using Gradient Descent: $$w = w - \eta \frac{\partial L}{\partial w}$$
  - Here, \(\eta\) is the learning rate, a small positive scalar determining the size of the step to take on each iteration.

- **Iteration**:
  - Repeat the forward pass, loss calculation, backward pass, and weight update for each batch of data or epoch.

- **Convergence**:
  - Continue iterations until the network’s performance stops improving significantly on a hold-out validation set, or a maximum number of epochs is reached.

### Considerations

- **Activation Function**: The choice of activation function is crucial since its derivative is used in calculating the gradients.
- **Learning Rate**: The size of the weight updates is controlled by the learning rate \( \alpha \).
- **Vanishing/Exploding Gradient**: Problems can occur when gradients are too small (vanish) or too large (explode), making the network hard to train.

Backpropagation is the backbone of neural network learning, allowing for the adjustment of weights based on the error rate obtained in the previous epoch (i.e., iteration), thereby improving the model's accuracy over time.