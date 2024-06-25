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







![[Pasted image 20240625205228.png|300|300]]