> [!important]- Metadata
> **Tags:** #
> **Located:** MachineLearning
> **Created:** 03/04/2024 - 17:18
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Decision trees
- A non-parametric  [[Artificial_intelligence#Supervised learning|supervised learning]] algorithm that can be used for classification and regression Forming a tree-like model of decisions. 
- Splits are chosen based on how much they maximise the separation of classes or minimise the variance for regression trees


![[Pasted image 20240403184944.png|400|400]]