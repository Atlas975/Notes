> [!important]- Metadata
> **Tags:** #Algorithms #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 28/12/2022 - 19:12
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Gradient descent
 - Generalized formula for gradient descent

> $$J(\theta)=\frac{1}{m}\sum_{i=1}^{m} \mathcal{L} ({y,\hat{y}})$$

![[Pasted image 20220621092922.png|500|500]]
![[Pasted image 20220621204846.png|350|350]]

faster iteration = less precision
# Mini-batch gradient descent
# Stochastic gradient descent
## Learning rate decay
- Steps can be taken to have the learning rate decay as the minimum approaches, multiple methods to this exist, when training takes long periods of time this may also be done manually
### Decay rate approach

> $\alpha=\frac{1}{1+\text{decay rate}\times \text{epoch num}}\alpha$

### Exponential decay

> $\alpha=k^\text{epoch num}$
> $\text{where k is a number between 0-1}$

### Root decay

> $\alpha=\frac{k}{\sqrt{\text{epoch num} }}\alpha$
