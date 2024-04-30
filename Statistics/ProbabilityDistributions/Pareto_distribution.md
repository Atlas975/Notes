> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics/ProbabilityDistributions
> **Created:** 30/04/2024 - 17:14
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Pareto distribution
- A continuous [[Probability_distributions|distribution]] that follows the Pareto principle (80/20 rule)
- Chosen to model scenarios where a small percentage of occurrences are responsible for the majority of effects (eg wealth distribution, sales patters, risks)
- Consists of two parameters: 
    - **$x_{m}$  (scale parameter)**: minimum possible value of $x$, must be positive
    - **$\alpha$ (shape parameter)**: determines the decline rate of the tail
## Probability density function 

$$P(X=x)= \begin{cases} \alpha x_m^\alpha & \text{if } x \geq x_m \\ 0 & \text{if } x < x_m \end{cases}$$
## Cumulative distribution function

$$P(X\leq{x})= \begin{cases} 1 - \left(\frac{x_m}{x}\right)^\alpha & \text{if } x \geq x_m \\ 0 & \text{if } x < x_m \end{cases}$$


![[Pasted image 20240430171510.png|450|450]]


## Expectation