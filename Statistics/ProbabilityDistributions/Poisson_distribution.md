> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 07/08/2022 - 12:10
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Poisson distribution
- The discrete distribution used to show how many times an event is likely to occur over a specific period, in other words it counts distribution. 
- The $\lambda$ is the rate parameter, denotes the typical rate of occurrence

$$P(X=x)=\frac{\mu^{x}e^{-\mu}}{x!}$$



![[Pasted image 20240429203005.png|450|450]]


## Cumulative distribution function 
- Discrete distribution, so involves summing the PDF for all values in a range 


## Variance 
$$\text{Variance}=\lambda$$