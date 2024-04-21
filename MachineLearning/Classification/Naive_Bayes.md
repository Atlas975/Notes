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
- Naive Bayes is able to make fast predictions but can be slow to train, the attributes in a test sample are compared with the training data attributes which have probabilities pre-calculated

$$\text{predicted class }(c)=\text{argmax}_{c}(P(C|X))$$
$$C=\text{list of classes (possible predictions)}$$
$$X=\text{list of attributes}$$
- This method can be summed up as finding the class ($c$) that maximises $P(C|X)$ 
- Note that because the evidence / denominator for each class is the same, it can be ignored for comparison sake. Only $P(X | C_{i})$  must be calculated, this is found by:

$$P(X=x_{1}\dots x_{n}|c)=P(x_{1}|c)\cdot P(x_{2}|c)\cdot P(x_{3}|c)\dots$$


## Continuous data handling
- For numerical attributes in Naive bayes, the most common way of getting $P(x|C)$ is to use the normal distribution of that attribute to calculate the **probability density estimation**
- This requires pre-calculating the mean and variance for the whole attribute column, after which the test sample attribute value can be fed into the following:

$$P(x|C)=\frac{1}{\sqrt{2\pi \sigma^{2}}}e^{-\frac{(x-\mu)^2}{2\sigma^{2}}}$$

![[Pasted image 20240406002550.png|500|500]]
## Naive classification weakness
- This is a naive approach as it assumes events used for prediction are independent which is not always the case eg a spam filter may only look at word frequency and ignore grammar
- This gives it high bias but low variance

![[Pasted image 20220224081201.png|350|350]]
