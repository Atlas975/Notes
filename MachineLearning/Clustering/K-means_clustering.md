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
# K-means clustering

- An [[Artificial_intelligence#Unsupervised learning|unsupervised learning]] method designed to deal with [[Clustering|clustering]] problems
- Partitions data into $k$ distinct clusters by assigning each data point to the nearest centroid, with the goal of minimising the within-cluster variance. 

![[Pasted image 20240402222257.png|300|300]]

- [[Distance_metrics#Euclidean distance|Euclidean distance]] is typically used to calculate distance from a  centroid:
$$\sqrt{ (x-c)^2 }$$
$$c=\text{centroid vector}$$

## K-means algorithm
```
Algorithm k-means:
*Choose k, the number of clusters.
*Initialize k centroids (often randomly selected from the data points).

Repeat until convergence:
    *For each data point:
        1. Calculate the distance from each centroid.
        2. Assign the data point to the cluster of the closest centroid.
    *For each cluster:
        1. Calculate the mean of all points assigned to the cluster.
        2. Move the centroid to the mean location.
    *If centroids do not change or the change is below a certain threshold, stop.
```


![[Pasted image 20240402223242.png|300|300]]

## K-means weaknesses
- **Non deterministic**: initial centroids chosen randomly 
- **Cluster choice**: the number of clusters may not be known beforehand, picking the wrong $k$ value can result in unpredictable behaviour 
## Elbow method 
- Helps pick the $k$ value, involves trying different values and looking for abrupt result changes (the result being the sum of the Euclidean distances from each point to its assigned centroid)
- The value of k where the improvement is seen is the best choice, any more points past plateau creates unnecessary classes

![[Pasted image 20240402224313.png|300|300]]


## Mitigating centroid dependency 
- Points may all get stuck in the same location this can be mitigated in multiple ways such as using preset RNG seed. This requires prior knowledge of the dataset
- A more robust solution involves defining a minimum distance that the centroid must initially be from each other. This avoids the centroids getting stuck together

![[Pasted image 20240402224744.png|350|350]]