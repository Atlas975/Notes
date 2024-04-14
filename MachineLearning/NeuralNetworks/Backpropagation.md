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
```python

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