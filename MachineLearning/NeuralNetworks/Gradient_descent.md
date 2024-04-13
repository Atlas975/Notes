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
$$\beta = \beta - \alpha \cdot I_{\beta}$$
$$\beta=\text{model parameters}$$
$$\alpha=\text{learning rate}$$
$$I_{\beta}=\text{cost function gradient with respect to each parameter}$$


![[Pasted image 20240408224948.png|350|350]]


## Forward pass process
- The following will be used to demonstrate the process, with more hidden layers this would involve repeating step 1-3 using the previous activations as input

![[Pasted image 20240413173732.png|600|600]]

1.  Randomly initialise the network weight $w$, typically done with values between 0-1
2. Get the input values for the current sample / batch($x_{1}\dots x_{n}$)
3. Calculate the activations for the hidden layer neuron's using an [[Activation_functions|activation]] function ($\sigma$)

$$a^{(2)}_1 = \sigma(w^{(2)}_{11} x_1 + w^{(2)}_{21} x_2)$$
$$a^{(2)}_2 = \sigma(w^{(2)}_{12} x_1 + w^{(2)}_{22} x_2)$$
$$\dots$$
4. Calculate cost at the output layer ($a^{(n)}_{1}=\hat{y}$)
$$E=\frac{1}{2}(y-\hat{y})$$
## Gradient descent variants
- Variants of the algorithm exist differing in how much data is used to calculate the gradient each iteration, offering different trade-offs in speed, accuracy and computational resources
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
- A technique used to adjust the learning rate while optimising the cost function
- Aims for quick learning initially and then fine-tuned learning nearing convergence 
- When training takes long periods of time this may also be done manually

![[Pasted image 20240408161829.png|500|500]]

### Step decay
- Reduces the learning rate by a factor after every fixed number of epochs.
$$\alpha = \alpha_0 \cdot \text{decay\_rate}^{\left\lfloor \frac{\text{epoch}}{\text{step\_size}} \right\rfloor}$$
### Exponential decay
- Decreases the learning rate exponentially, based on the decay rate and the epoch number


$$\alpha = \alpha_0 \times e^{-\text{decay\_rate} \cdot \text{epoch}}$$
### Time-based decay
- Learning rate is reduced over time, inversely proportional to the time number of epochs

$$\alpha = \frac{\alpha_0}{1 + \text{decay\_rate} \cdot \text{epoch}}$$
