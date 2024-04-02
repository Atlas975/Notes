---
aliases:
  - KNN
---
> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 02/04/2024 - 18:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# K-nearest neighbours

- A Pidentifying the $k$ closest training examples in the feature space and assigning the most frequent label among them
- It uses a distance metric, like Euclidean distance, to determine the "nearest" neighbors, with no explicit training phase involved
![[Pasted image 20240402184402.png|450|450]]






## Linkage types 

![[Pasted image 20231023152040.png|450|450]]






## Automated clustering
- The number of distinct clusters that can be formed with p number of predictors is:
$$\frac{p(p-1)}{2}$$

- When these can't easily be seen like with the below example, a method is needed to find these clusters automatically

![[Pasted image 20220225161220.png|450|450]]