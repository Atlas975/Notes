---
aliases:
  - GELU
---

> [!important]- Metadata
> **Located:** MachineLearning/NeuralNetworks/ActivationFunctions
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
# Gaussian error linear unit
- An [[Activation_functions|activation]] function primarily used in [[Transformer]] models like [[Generative_pre-trained_Transformer|GPT]]. It is deigned to combine the benefits of [[Rectified_linear_unit|ReLU]] and [[Sigmoid_function|sigmoid-like]] functions
- This is done using $\phi(x)$ which is the [[Gaussian_distribution|CDF of the normal  distribution]], this creates a non-linear activation that is more smooth than ReLU, helping in [[Gradient_descent|gradient optimisation]]

$$\sigma(x)=x\cdot \phi(x)$$

- This function is able to handle the "dying ReLU" problem, while this is more complex than [[Leaky_rectified_linear_unit|Leaky ReLU]], GELU provides a probabilistic approach weighing the likelihood that input is positive
- Probabilistic can capture more complex patterns in data. In practice this means GELU only gives a signal for negative values that are close to 0 (approx -2 to 0)


![[Pasted image 20240625181732.png|600|600]]
