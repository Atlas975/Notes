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

- The Poisson distribution is used to show how many times an event is likely to occur over a specific period, in other words it counts distribution. 

>$$\mathcal{P(X=x)}=\frac{\mu^{x}e^{-\mu}}{x!}$$
>$\mu=\text{ average event occurance}$
>$x= \text{the number of time the event occurs}$