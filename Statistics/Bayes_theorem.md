> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 15/02/2024 - 14:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bayes theorem

- Bayes' Theorem provides a way to revise predictions or theories in light of new evidence.
- It is rooted in conditional probability, which is the probability of an event given that another event has occurred. Note that $P(B|A)\cdot P(A)$ is the same as $P(A \cap B)$


![[Pasted image 20240430191043.png|450|450]]
## Bayes formula 
$$P(A|B)=\frac{P(B|A)\cdot P(A)}{P(B)}$$
$$P(X|Y)=\text{probability of event X occurring given that Y is true}$$
$$P(X)=\text{prior probability of X, the initial degree of belief in X}$$
## Components of Bayes theorem 
- **Prior ${P(A)}$** : Initial probability of an event prior to considering new evidence 
- **Likelihood $P(A|B)$**:  probability of observing evidence given event occurs
- **Evidence / Marginal probability $P(B)$**: the total probability of observing evidence 
- **Posterior probability $P(A|B)$**: the revised probability of an event accounting for evidence 

![[Pasted image 20240404061535.png|450|450]]