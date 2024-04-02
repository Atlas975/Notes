> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/ClusteringAlgorithms
> **Created:** 02/04/2024 - 23:00
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Hierarchal clustering
- A deterministic way to pick a $k$ value for [[K-means_clustering|K-means clustering]]




## Cluster creation approach 
- **Agglomerative (bottom up)**: iteratively merges the closest pairs of clusters
- **Divisive (top-down)**: splits a single cluster into smaller clusters


## Hierarchal clustering algorithm 


## Linkage metrics 
![[Pasted image 20240402230238.png|450|450]]


## Linkage types 
![[Pasted image 20231023152040.png|450|450]]