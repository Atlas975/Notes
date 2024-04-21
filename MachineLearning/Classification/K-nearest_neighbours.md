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
- A [[Artificial_intelligence#Supervised learning|supervised learning]] algorithms that classifies by identifies the $k$ closest training examples in the feature space and assigns the most frequent label among them
- The performance of this method varies based on the [[Distance_metrics|distance metric]] used to determine the nearest neighbour. With each offering tradeoffs between speed and accuracy

![[Pasted image 20240402184402.png|500|500]]




## K value choice
- The choice of the $k$ parameter has different effects on computation speed and accuracy 
- A low K value like 1-NN is sensitive to mis-labelled / outlier data
- A higher value like 3-NN reduces the classification error, but is slower to classify 

![[Pasted image 20240402185951.png|250|250]]
