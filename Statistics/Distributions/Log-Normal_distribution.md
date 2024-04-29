> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics/Distributions
> **Created:** 29/04/2024 - 15:55
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Log-Normal distribution
- A continuous distribution of a random variable whose log is [[Gaussian_distribution|normally  distributed]]
- Helps in understanding and modelling phenomena where growth, multiplication, and positive constraints are inherently part of the process

## Probability density function
$$f(x|\mu,\sigma)=\frac{1}{x\cdot\sigma\cdot \sqrt{ 2\pi }}\cdot \exp({-\frac{\log(x-\mu)^2}{2\sigma^2}})$$

## Cumulative distribution function

$$\phi(x)=\phi'\left( \frac{\log(x-\mu)}{\sigma} \right)$$

$$\phi'=\text{CDF of standard normal distribution }$$

![[Pasted image 20240429185419.png|400|400]]


## Mean
$$E(x)=\exp({\mu+\frac{\sigma^2}{2}})$$

## Expected variance 
$$\sigma^2=$$