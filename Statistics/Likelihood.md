> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Likelihood
- The likelihood of a set of parameters given some observed data is a measure of how well those parameters explain the data
- Formally, if we have a probabilistic model with parameters $(\theta)$ and observed data $(X)$, the likelihood function is:

$$L(\theta; X)=P(X|\theta)$$

## Maximum likelihood 
- Involves finding the parameter values that maximise the likelihood function. 
- These values are called the maximum likelihood estimates. Mathematically, we seek:

$$\hat{\theta}=\text{argmax}_{\theta}(L(\theta;X))$$

![[Pasted image 20240527181129.png|450|450]]

- The issue with max likelihood is that it is difficult to maximise products when attempting to train an [[Artificial_intelligence|ML]] model, with summations being preferred
- This is why [[Cross-entropy]] is typically used instead to measure loss in classification problems, this comes from $\log(A \times B)$ being the same as $\log(A)+\log(B)$