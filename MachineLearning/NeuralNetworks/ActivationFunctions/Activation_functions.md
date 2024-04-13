---
aliases:
  - activation
---
> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/ActivationFunctions
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Activation functions
- Equations that determine the output of a neural network model.
- These add non-linear properties to a [[Neural_networks|NN]], enabling it to learn complex data patterns.


![[Pasted image 20220729224901.png|600|600]]



## Purpose
- **Non-linearity**: They introduce non-linearities into the network, which allows the model to handle non-linearly separable data, meaning it can make more complex decisions.
- **Control of Activation**: Determine how much a neuron should be activated, affecting how much of the signal from the input should pass to the next layer.
## Considerations
- **Vanishing/Exploding Gradients**: Some functions like the sigmoid or tanh can cause vanishing or exploding gradients during backpropagation, hindering the learning process.
- **Computational Efficiency**: The efficiency of the function can affect the training speed. For example, ReLU is computationally more efficient than sigmoid or tanh.
## Activation function derivatives

![[Pasted image 20220303160437.png|450|450]]