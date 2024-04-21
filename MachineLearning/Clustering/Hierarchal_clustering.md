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
- A deterministic method to pick a $k$ value for [[K-means_clustering|K-means clustering]]
- The results are often represented in a dendrogram, a tree-like diagram that illustrates the arrangement of the clusters and the distance at which they merge / split

![[Pasted image 20240403004313.png|400|400]]

- This approach has the benefit of being easily visualisable to pick $k$, this is also flexible with respect to linkage criteria 
- However, too many distance computations can quickly make this method inefficient 
## Cluster creation approach
- **Agglomerative (bottom up)**: iteratively merges the closest pairs of clusters
- **Divisive (top-down)**: splits a single cluster into smaller clusters

## Linkage types
- A linkage criterion is used to determine whether cluster pairs can be merged
- Each linkage criterion has unique effects on the shape and size of the clusters formed eg are links formed if one pair of items are close or if all of them are close  
- 3 different types approaches exist for handling this:

![[Pasted image 20231023152040.png|450|450]]

## Hierarchal clustering process
- Starts by grouping values in a pairwise fashion
- The hierarchy then continues to iteratively pair up based on closest [[Distance_metrics|distance]], this repeats until all values are connected at some level

![[Pasted image 20240403004339.png|350|350]]

- Splitting at different levels allows for the formation of different clustering

![[Pasted image 20240403004405.png|350|350]]
![[Pasted image 20240403004506.png|350|350]]
