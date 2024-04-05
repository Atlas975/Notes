> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 04/04/2024 - 00:18
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Naive Bayes
- A family of probabilistic [[Artificial_intelligence#Supervised learning|supervised learning]] classifiers that make use of [[Bayes_theorem|Bayes theorem]] 
- Assumes [[Event_independence|independence]] between all pairs of features, making it computationally efficient



## Naive classification weakness
- This is a naive approach as it assumes events used for prediction are independent which is not always the case eg a spam filter may only look at word frequency and ignore grammar
- This gives it high bias but low variance

![[Pasted image 20220224081201.png|350|350]]
