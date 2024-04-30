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
- 

## Probability density function 
$$P(X=x)=$$

## Cumulative distribution function


![[Pasted image 20240430171510.png|450|450]]

