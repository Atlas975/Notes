---
aliases: [CNN]
---

> [!important]- Metadata
> **Tags:** #MediaEncoding #StatisticalLearning
> **Located:** MachineLearning
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Convolutional networks
- A  specialised [[Neural_networks|neural network]] designed for processing data that has a grid-like topology, these allow a network to have a fixed, controllable number of parameters despite input size
- The motivation behind this is creating a network that can automatically learn [[Image_features|features]] without having to be familiar with the original data and it's content

![[Pasted image 20240420015209.png|400|400]]



## CNN structure 
- CNN's typically follow a similar structure, this involves starting with a [[Convolution|Convolution layers]] followed by an [[Activation_functions|activation function]] to add non-linearity such as [[Rectified_linear_unit|ReLU]]
- [[Pooling|Pooling layers]] are used to perform non-linear down-sampling, this provides translation invariance, useful when checking for feature presence while ignoring spatial information 

![[Pasted image 20240420195543.png|450|450]]

## Differences from standard networks
- **Parameter sharing**: instead of each neuron being linked to every neuron in the next layer
- operates on lower and higher level features, saving computation power. A feature detector for instance that's useful in part of an image will likely be usefil in other parts of an image
- **Connection sparsity**: each output in a layer depends on a small number of inputs, this is done with shared weights. Each neuron shares a weight based on it's position in a filter 


![[Pasted image 20240419182533.png|350|350]]
- Generally while going deeper in a CNN, height and width tend to decline while number of channels increases ($H,W \downarrow  \implies C\uparrow$)
