---
aliases:
  - NN
---

> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Neural networks

- A deep learning framework, operates by tuning the weights and bias parameters to minimise the cost function, [[Activation_functions|activation]] layers are placed in a network style layout

- A neural network consists of the following components:
	- $w$ (weights) correspond to how strong a connection from one neuron to another is
	- $a$ (activation function) squishes the results of the weights and inputs so that the result is a value ranging between 0 and 1.
	- $b$ (bias) Iadded before squishing with an activation function and can be thought of as an additional neuron added to each layer. Acts as a y-intercept



## Forward pass process
- The following will be used to demonstrate the process, with more hidden layers this would involve repeating step 1-3 using the previous activations as input

![[Pasted image 20240413173732.png|600|600]]

1.  Randomly initialise the network weight $w$, typically done with values between 0-1
2. Get the input values for the current sample / batch($x_{1}\dots x_{n}$)
3. Calculate the activations for the hidden layer neuron's using an [[Activation_functions|activation]] function

$$z^{(2)}_1 = f(w^{(2)}_{11} x_1 + w^{(2)}_{21} x_2)$$
$$z^{(2)}_2 = f(w^{(2)}_{12} x_1 + w^{(2)}_{22} x_2)$$
$$\dots$$

4. Calculate cost at the output layer ($a^{(n)}_{1}=\hat{y}$) \*note that this is for binary classification
$$E=\frac{1}{2}(y-\hat{y})$$
# Backpropagation
- Computation graph example:

![[Pasted image 20220621204400.png|450|450]]

![[Pasted image 20220305133049.png|450|450]]


## Neural network notation

$$w=\text{weights}$$
$$b=\text{bias}$$
$$a=\text{activation}$$
$$z=\text{output (activation of the next layer)}$$

### Parameter notation

 $$a_{j}^{[i][t][k]}$$
$$i=\text{layer}$$
$$j=\text{neuron in layer vector}$$
$$t=\text{batch number}$$
$$k=\text{example}$$