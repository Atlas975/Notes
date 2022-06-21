# Learning_rate

created: 2022-06-21 09:45
#StatisticalLearning [[0-MachineLearning/Gradient_descent]]

---

## Learning rate decay

- Steps can be taken to have the learning rate decay as the minimum approaches, multiple methods to this exist, when training takes long periods of time this may also be done manually

### Decay rate approach

> $$\alpha=\frac{1}{1+\text{decay rate}\times \text{epoch num}}\alpha$$

### Exponential decay

> $$\alpha=k^\text{epoch num}$$
> $$\text{where k is a number between 0-1}$$
### Root decay 
>$$\alpha=\frac{k}{\sqrt{\text{epoch num} }}\alpha$$
