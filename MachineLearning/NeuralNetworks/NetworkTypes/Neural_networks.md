---
aliases:
  - neural nets
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
- Each individual neuron (perceptron) is able to offer linear separation between data, the use of these in a network with non-linear activation functions allows a model to learn complex patterns

![[Pasted image 20240414221901.png|150|150]]


-  **Input Layer**: Receives raw data. Each neuron in this layer represents a feature of the input data.
-  **Hidden Layers**: Perform computations and feature transformations. A network may have multiple hidden layers, allowing it to learn complex patterns.
-  **Output Layer**: Produces the final results or predictions (either classification or regression)

![[Pasted image 20240415190257.png|300|300]]

## Neural network notation

- $w=\text{weights, influence stregnth of an input to an output}$
- $b=\text{bias, optional parameter that can shift a function left or right}$
- $z=\text{net input to neurons }(wx+b) \text{ prior to activation}$
- $a=\text{activation output, }(\sigma(z)) \text{ introduces non-linearity to learn complex patterns}$

### Parameter notation

 $$a_{j}^{[i][t][k]}$$
$$i=\text{layer}$$
$$j=\text{neuron in layer vector}$$
$$t=\text{batch number}$$
$$k=\text{example}$$

## Neural network structure
- Adding more layers to a network (making it deeper) versus adding more neurons to a single layer (making it wider) affects the network's capabilities and performance in different ways. 
- Knowing which to modify is crucial for effectively designing networks for specific problems


### Adding more layers (depth)
- Deeper networks can learn complex and abstract features, building a layered understanding of input data eg edges -> object -> scenes in image processing
- This allows the network to build up a more detailed understanding of the input data, layer by layer. Crucial for tasks requiring detailed semantic interpretation

$$\text{Feature complexity}\propto \text{Network depth}$$
- This is reliant on having enough data to learn these patterns without overfitting, deeper networks are also more prone to the [[Activation_functions#Vanishing gradient problem|vanishing gradient problem]] than wider ones
### Adding more neurons to a layer (width)

- Adding more neurons in a layer allows for a richer representation of data at that level of abstraction, this means more capacity to capture varied aspects of the data at once
- This improves the network's ability to capture diverse features and nuances by giving the model more flexibility in how it represents data 

$$\text{Rich representation}\propto \text{Network width}$$
- This increases the number of parameters at a layer, while this can help avoid deeper networks this also has the potential of increasing computational cost and still overfitting