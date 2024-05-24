---
aliases:
  - Leaky ReLU
---

> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/NeuralNetworks/ActivationFunctions
> **Created:** 20/04/2024 - 02:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Leaky rectified linear unit
- A variant of [[Rectified_linear_unit|ReLU]] that addresses the dying neuron problem
- This is done by multiplying the negative inputs by a constant rather than setting them to 0

$$\sigma(x)=\begin{cases}
x & x\geq{0}  \\
@b
\end{cases}$$
$$\sigma(x\geq{0})=x$$
$$\sigma(x<0)=\alpha\cdot x$$
$$\alpha=\text{leak coefficient, a small positive constant}$$


![[Pasted image 20240420022511.png|450|450]]

- By allowing a small, non-zero gradient for negative inputs, Leaky ReLU helps prevent neurons from becoming "dead" during training (consistently remaining zero for all inputs)
- This non-zero slope helps negative inputs contribute to training by making them differentiable
