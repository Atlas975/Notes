---
aliases:
  - ReLU
---
> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/NeuralNetworks/ActivationFunctions
> **Created:** 20/04/2024 - 02:09
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Rectified linear unit
- A simple activation function with quick computation, making it useful in a deep [[Neural_networks|NN]]
- This is considered a [[Piecewise_linear_transform|piecewise]] function due to different behaviour for positive and negative inputs, this gives it a gradient of 0 for negative values and a gradient of 1 for positive ones

$$\sigma(x)=\text{max}(0,x)$$

![[Pasted image 20240420021114.png|300|300]]
