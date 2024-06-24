---
aliases:
  - skip connections
---

> [!important]- Metadata
> **Located:** MachineLearning/NeuralNetworks
> **Created:** `$= dv.current().file.ctime`
> ```dataviewjs
> let cur = dv.current().file;
> let paths = new Set(
>     [...cur.inlinks.filter(p => !p.path.endsWith(".png")), ...cur.outlinks].map(p => p.path));
> paths.delete(cur.path);
> dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p =>
>     [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Residual connections
- A fundamental concept in [[Neural_networks|deep learning]], with the goal of addressing the [[Activation_functions|vanishing gradient]] problem. This involves letting the input bypass 1 or more layers
- Mathematically, the residual block adds the input directly to the output of a neural network operations, so instead of $y=f(x)$, the output is represented as: 

$$y=f(x)+x$$

![[Pasted image 20240624153316.png|350|350]]

- These connections directly address a struggle in [[Backpropagation]] where the chain of gradients can become very small due to the repeated multiplication of small derivatives
- This is because the 
## Residual connection benefits
- **Improved training of deep networks**: Residual connections allow for the training of very deep networks by ensuring gradients do not vanish



![[Pasted image 20240624153509.png|400|400]]
