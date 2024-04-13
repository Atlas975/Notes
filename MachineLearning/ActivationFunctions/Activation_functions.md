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

![[Pasted image 20220729224901.png|600|600]]


- A non-linear activation function is crucial in the hidden layer of an [[Neural_networks|NN]] to learn complex patterns
## Activation function derivatives

![[Pasted image 20220303160437.png|450|450]]