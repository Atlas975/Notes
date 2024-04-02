> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/ClusteringAlgorithms
> **Created:** 02/04/2024 - 22:22
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# K-mean clustering

- An [[Artificial_intelligence#Unsupervised learning|unsupervised learning]] method designed to deal with [[Clustering|clustering]] problems
- partitions data into $k$ distinct clusters by assigning each data point to the nearest centroid, with the goal of minimising the within-cluster variance.

![[Pasted image 20240402222257.png|300|300]]