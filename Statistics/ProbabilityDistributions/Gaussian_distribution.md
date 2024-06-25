---
aliases:
  - Normal  distribution
---
> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 27/04/2024 - 21:53
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Gaussian distribution
- A continuous [[Probability_distributions|distribution]] that is symmetric about the mean
- Chosen for variables that naturally form a symmetrical bell curve due to many small, random disturbances (e.g., human heights, measurement errors)
- Defined by the following parameters:
    - **Mean ($\mu$)**: determines the centre of the distribution.
    - **Standard Deviation ($\sigma$)**: measures the dispersion of the distribution
    - **Variance ($\sigma^2$)**:  measures how spread out the numbers are in the distribution

![[Pasted image 20240429181804.png|350|350]]
## Probability density function
$$P(X=x)=\frac{1}{\sigma\cdot \sqrt{ 2\pi }}\cdot \exp (-\frac{(x-\mu)^2}{2\sigma^2})$$

## Cumulative distribution function 
$$P(X\leq{x})=\phi\left( \frac{x-\mu}{\sigma} \right)$$

![[Pasted image 20240429182212.png|450|450]]


