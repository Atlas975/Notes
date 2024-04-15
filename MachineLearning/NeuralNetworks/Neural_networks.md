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
- Each individual neuron is able to offer linear separation between data, the use of these in a network allows for a model to learn complex patterns

![[Pasted image 20240414221901.png|150|150]]


## Network structure
-  **Input Layer**: Receives raw data. Each neuron in this layer represents a feature of the input data.
-  **Hidden Layers**: Perform computations and feature transformations. A network may have multiple hidden layers, allowing it to learn complex patterns.
-  **Output Layer**: Produces the final results or predictions (either classification or regression)

![[Pasted image 20240415190257.png|300|300]]

## Neural network notation

- $w=\text{weights, influence stregnth of an input to an output}$
- $b=\text{bias, optional parameter that can shift a function left or right}$
- $z=\text{net input to neurons }(wx+b) \text{ prior to activation}$
- $a=\text{activation output, }(\sigma(z)) \text{ introduces non-linearity to learn complex patterns}$
- $C=\text{cost, a measure of how well the model is performing}$

### Parameter notation

 $$a_{j}^{[i][t][k]}$$
$$i=\text{layer}$$
$$j=\text{neuron in layer vector}$$
$$t=\text{batch number}$$
$$k=\text{example}$$
