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

- A powerful deep learning framework, operates by tuning the weights and bias parameters to minimize the cost function, activation layers are placed in a network style layout

[[Machine_learning_notation#Neural network notation]]

> w (weights) correspond to how strong a connection from one neuron to another is

> a (activation function) squishes the results of the weights and inputs so that the result is a value ranging between 0 and 1.

> b (bias) ensures that the result of the weight and input product is only meaningful after a certain threshold is met. It is added before squishing with an activation function and can be thought of as an additional neuron added to each layer
# Backpropagation
- Computation graph example:

![[Pasted image 20220621204400.png|450|450]]

![[Pasted image 20220305133049.png|450|450]]


