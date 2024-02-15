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
- It is rooted in conditional probability, which is the probability of an event given that another event has occurred.

![[Pasted image 20240215143252.png|550|550]]
## Bayes formula 
$$\mathbb{P}(A|B)=\frac{\mathbb{P}(B|A)\cdot\mathbb{P}(A)}{\mathbb{P}(B)}$$
$$\mathbb{P}(X|Y)=\text{probability of event X occurring given that Y is true}$$

$$\mathbb{P}(X)=\text{prior probability of X, the initial degree of belief in X}$$
## Components of Bayes theorem 
- **Prior $\mathbb{P(A)}$** : Initial probability of an event prior to considering new evidence 
- **Liklihood $\mathbb{P}(A|B)$**:  probability of observing evidence given event occurs
- **Marginal probability $\mathbb{P}(B)$**: the total probability of observing evidence 
- **Posterior probability $\mathbb{P}(A|B)$**: the revised probability of an event accounting for evidence 
- Note that $\mathbb{P}(B|A)\cdot\mathbb{P}(A)$ is the same as $\mathbb{P}(A \cap B)$