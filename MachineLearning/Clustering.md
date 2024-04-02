> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 02/04/2024 - 18:47
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Clustering
- A [[Artificial_intelligence#Unsupervised learning|unsupervised learning]] method, Organises data into groups based on similarity, where each group, or cluster, contains items more similar to each other than to those in other groups.
- Used to find inherent structures or patterns in the data without pre-labeled classes
- The number of distinct clusters that can be formed with $p$ number of predictors is:
$$\frac{p(p-1)}{2}$$
- Clustering algorithms identify clusters by optimising a specific criterion, like minimising the distance within clusters and maximising it between clusters.
## Linkage types 

![[Pasted image 20231023152040.png|450|450]]

