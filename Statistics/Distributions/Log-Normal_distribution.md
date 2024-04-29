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
- a continuous probability distribution of a random variable whose log is normally distributed