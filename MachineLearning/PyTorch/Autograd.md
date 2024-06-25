> [!important]- Metadata
> **Tags:** #Programming #StatisticalLearning 
> **Located:** MachineLearning/Pytorch
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Autograd
- A differentiation library for automatic [[Backpropagation|gradient computation]] via the use of computation graphs and recording operations performed on tensors





