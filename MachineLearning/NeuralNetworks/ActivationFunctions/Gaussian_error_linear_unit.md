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


$$\sigma(x)=x\cdot$$