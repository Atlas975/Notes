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



## Bac. propagation in Neural Networks

Backpropagation is a fundamental algorithm used for training neural networks. It efficiently computes the gradient of the loss function with respect to the weights of the network.

### Conceptual Overview

- **Purpose**: Backpropagation is used to calculate the gradient needed to update neural network weights to minimize the loss function.
- **Mechanism**: It employs the chain rule of calculus to backpropagate errors from the output layer to the input layer.

### Process

1. **Forward Pass**:
   - Compute the output of each neuron layer by layer until the final output is obtained.

2. **Loss Calculation**:
   - Determine the error at the output by comparing the network's prediction with the true target values using a loss function.

3. **Backward Pass**:
   - Compute the gradient of the loss function with respect to each weight by propagating the error backward through the network.

### Key Steps

1. **Calculate Output Error**:
   - For the output layer, calculate the difference between the network output and the true target.
   $$
   \delta^{(\text{output})} = \text{Derived Error based on loss function}
   $$

2. **Propagate Error Backwards**:
   - For each layer, starting from the last hidden layer to the input layer, propagate the error.
   $$
   \delta^{(l)} = (\Theta^{(l+1)})^T \delta^{(l+1)} \odot f'(z^{(l)})
   $$
   - Here, \( \odot \) represents element-wise multiplication, and \( f'(z^{(l)}) \) is the derivative of the activation function.

3. **Gradient Calculation**:
   - Compute the gradient of the loss function for each weight.
   $$
   \frac{\partial}{\partial \Theta^{(l)}_{ij}} = a^{(l)}_j \delta^{(l+1)}_i
   $$

4. **Update Weights**:
   - Adjust the weights in the negative direction of the gradient to minimize the loss.
   $$
   \Theta^{(l)}_{ij} = \Theta^{(l)}_{ij} - \alpha \frac{\partial}{\partial \Theta^{(l)}_{ij}}
   $$
   - \( \alpha \) is the learning rate.

### Considerations

- **Activation Function**: The choice of activation function is crucial since its derivative is used in calculating the gradients.
- **Learning Rate**: The size of the weight updates is controlled by the learning rate \( \alpha \).
- **Vanishing/Exploding Gradient**: Problems can occur when gradients are too small (vanish) or too large (explode), making the network hard to train.

Backpropagation is the backbone of neural network learning, allowing for the adjustment of weights based on the error rate obtained in the previous epoch (i.e., iteration), thereby improving the model's accuracy over time.