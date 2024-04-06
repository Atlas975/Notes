> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 06/04/2024 - 19:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Argmax

- Identifies the argument that yields the maximum value of a function. commonly used to select the highest probability or score directly, often after a [[Softmax]] transformation.
- Provides a deterministic clear-cut decision in classification tasks:

$$ \text{argmax}_x f(x) $$

![[Pasted image 20240406191756.png|350|350]]

- Argmax operation is non-differentiable, meaning it's not directly used during the training phase in gradient-based optimisation methods.


