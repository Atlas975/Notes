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
- An optimisation algorithm typically used for minimising the cost function in [[Neural_networks|neural networks]].
- Adjusts the initial parameters in small steps proportional to the negative of the function gradient at the current point. This continues until it converges to the function minimum
$$\theta = \theta - \alpha \cdot \nabla_{\theta}J(\theta)$$
$$\theta=\text{model parameters}$$
$$\alpha=\text{learning rate}$$
$$\nabla J=\text{gradient of the cost function}$$


![[Pasted image 20240408224948.png|350|350]]



## Gradient descent variants
- Variants of the gradient descent algorithm exist differing in how much data is used to calculate the gradient during each iteration, addressing different trade-offs in speed, accuracy and memory
- This addresses specific challenges like large data volumes, computational limitations, and the need for faster convergence or more stable learning


![[Pasted image 20220621092922.png||400|400]]



### Batch gradient descent
- Processes entire training set every iteration, computationally expensive for large datasets.
- Offers stable convergence to the global minimum for convex error surfaces and a local minimum for non-convex surfaces, with consistent error gradient calculation

### Stochastic gradient descent
- Updates the parameters for each training example, leading to faster iterations but more noise in the convergence path.
- Provides the advantage of potentially escaping local minima due to the noisy steps, making it suitable for non-convex error functions
### Mini-batch gradient descent
- Combines the advantages of both batch and stochastic gradient descent by processing a subset of the training data in each iteration, balancing speed and computational efficiency.
- Reduces the variance in the parameter updates compared to SGD, leading to a more stable convergence while still being faster than full batch processing.

## Learning rate decay
- A technique used to adjust the learning rate in training machine learning models during the optimisation process
- Aims to allow a model to learn quickly initially and then fine-tune the learning as it converges towards the minimum of the cost function.
- When training takes long periods of time this may also be done manually

![[Pasted image 20240408161829.png|500|500]]

### Learning rate decay strategies


### Decay rate approach
$$\alpha=(1+\text{decay rate}\cdot \text{epoch num})^{-1}\cdot \alpha_{0}$$
### Exponential decay
$$\alpha=k^\text{epoch num}$$
$$\text{where k is a number between 0-1}$$

### Root decay
$$\alpha=\frac{k}{\sqrt{\text{epoch num} }}\alpha_{0}$$
