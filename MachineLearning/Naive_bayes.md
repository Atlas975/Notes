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
- This method can be summed up as finding the class $C$ that maximises $P(C|x_{1},\dots,x_{n})$
- Note that because the evidence / denominator for each class is the th 

$$P(C_{1}|X)>P(C_{2}|X)?$$
$$P(X\cap C_{1})>P(X\cap C_{2})$$

![[Pasted image 20240405213340.png|450|450]]
## Naive classification weakness
- This is a naive approach as it assumes events used for prediction are independent which is not always the case eg a spam filter may only look at word frequency and ignore grammar
- This gives it high bias but low variance

![[Pasted image 20220224081201.png|350|350]]
