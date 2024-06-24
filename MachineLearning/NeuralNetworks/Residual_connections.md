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
- Mathematically, the residual block adds the input directly 



$$y=f(x)+x$$
