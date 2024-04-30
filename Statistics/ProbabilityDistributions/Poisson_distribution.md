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
- The discrete [[Probability_distributions|distribution]] that assumes a constant mean rate
- Used when modelling the number of events in a fixed interval, especially for rare or random events (e.g., number of system failures, phone calls to a help desk)
- The $\lambda$ is the rate parameter, this is also the mean and variance


![[Pasted image 20240429203005.png|450|450]]
## Probability mass function
$$P(X=x)=\frac{\lambda^{x}e^{-\lambda}}{x!}$$

## Cumulative distribution function

$$P(X \leq x) = e^{-\lambda}\cdot\sum_{i=0}^{x} \frac{\lambda^i }{i!}$$
