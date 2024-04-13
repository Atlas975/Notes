> [!important]- Metadata
> **Tags:** #
> **Located:** MachineLearning/ActivationFunctions
> **Created:** 13/04/2024 - 16:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sigmoid function

- Maps any real-valued number into a value between 0 and 1. It's an [[MachineLearning/NeuralNetworks/ActivationFunctions/Activation_functions|activation]] function commonly used in logistic regression and neural networks, particularly in layers that predict probabilities.

  $$ \sigma(x) = \frac{1}{1 + e^{-x}} $$


![[Pasted image 20240413161039.png|350|350]]

- **Output range**: (0, 1)
## Sigmoid derivative 

  $$ \sigma'(x) = \sigma(x)(1 - \sigma(x)) $$


![[Pasted image 20240413161103.png|300|300]]


## Applications
- **Binary Classification**: In binary classification, it's used to predict the probability that a given input point belongs to a certain class.
- **Neural Networks**: As an activation function in neural networks to introduce nonlinearity in the model and help the network learn complex patterns.

## Advantages
- Smooth gradient, preventing "jumps" in output values.
- Output interpretation is straightforward as a probability.
## Disadvantages

- **Vanishing Gradient Problem**: the function saturates for very high or very low values of \( x \), making the gradient near zero. This can slow down /  stop the training process for [[Neural_networks|NN]] due to very small weight updates during [[Backpropagation]].
- **Not zero-centred**: This can lead to the gradients of weights being all positive or all negative, potentially leading to zig-zagging dynamics during optimization.