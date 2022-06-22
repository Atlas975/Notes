# Gradient_descent
created: 2022-06-21 09:30
#StatisticalLearning

---

- Generalized formula for gradient descent

> $J(\theta)=\frac{1}{m}\sum_{i=1}^{m} \mathcal{L} ({y,\hat{y}})$

> ![[Pasted image 20220621092922.png]]
> ![[Pasted image 20220621204846.png]]

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
