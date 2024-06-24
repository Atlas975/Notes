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
- The function chosen also needs to account for computational efficiency, as repeating it throughout training will noticeably impact training speed


![[Pasted image 20220729224901.png|600|600]]
## Activation function purpose
- **Non-linearity**: introduces non-linearities into the network, which allows the model to handle non-linearly separable data, meaning it can make more complex decisions.
- **Control of Activation**: Determine how much a neuron should be activated, affecting how much of the signal from the input should pass to the next layer.

## Vanishing gradient problem 
- In deep networks using activations like sigmoid or tanh, [[Gradient_descent|gradients]] can diminish rapidly through layers, exponentially decreasing to near zero.
- Tiny gradients fail to adjust weights in initial layers, impeding learning, causing slow or stalled training, and leading to suboptimal deep neural network performance.

![[Pasted image 20240413171954.png|400|400]]

## Activation function derivatives

![[Pasted image 20220303160437.png|450|450]]