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
- A probability distribution that is symmetric about the mean, showing that data near the mean are more frequent in occurrence than data far from the mean
- Defined by two parameters:
    - **Mean ($\mu$)**: Determines the centre of the distribution.
    - **Standard Deviation ($\sigma$)**: Measures the dispersion or spread of the distribution
## Probability density function
$$f(x|\mu,\sigma)=\frac{1}{\sigma\cdot \sqrt{ 2\pi }}\cdot e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

## Variance 

$$\text{Variance}=\sigma^2$$