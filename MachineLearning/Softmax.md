> [!important]- Metadata
> **Tags:** #Statistics #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 02/04/2024 - 08:59
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Softmax

$$\frac{e^{x_{}}}{\sum_{j=0}^{n}e^{x_{j}}}$$
$$$$