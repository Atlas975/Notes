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
- A continuous distribution that is symmetric about the mean, showing that data near the mean are more frequent in occurrence than data far from the mean
- Defined by two parameters:
    - **Mean ($\mu$)**: determines the centre of the distribution.
    - **Standard Deviation ($\sigma$)**: measures the dispersion of the distribution
    - **Variance ($\sigma^2$)**:  measures how spread out the numbers are in the distribution

![[Pasted image 20240429181804.png|350|350]]
## Probability density function
$$f(x|\mu,\sigma)=\frac{1}{\sigma\cdot \sqrt{ 2\pi }}\cdot e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

## Cumulative distribution function 

$$\phi\left( \frac{x-\mu}{\sigma} \right)$$

![[Pasted image 20240429182212.png|450|450]]


