> [!important]- Metadata
> **Tags:** #StatisticalLearning #MediaEncoding 
> **Located:** MachineLearning/Classification
> **Created:** 21/04/2024 - 19:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Semantic segmentation
- Involves partitioning an image into multiple segments or regions, where each segment corresponds to a specific class label
- This is typically done using a [[Convolutional_networks|CNN]]
-


![[Pasted image 20240421191732.png|400|400]]