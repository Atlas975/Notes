> [!important]- Metadata
> **Tags:** #ContinuousMath 
> **Located:** ContinuousMath
> **Created:** 24/10/2023 - 07:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Mean
## Arithmetic mean 
- Use  to find the average of a set of values eg test scores or daily temperatures.

>$$\frac{\sum x}{n}$$

## Geometric mean 
- Use to find growth rates, eg calculating average ROI over time or population growth rates.

>$$\sqrt[n]{\prod x}$$


## Harmonic mean 
- Use when involving reciprocal rates, eg average speeds or resistance in parallel circuits.

>$$\frac{n}{\sum x^{-1}}$$




