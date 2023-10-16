> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 20/06/2022 - 16:21
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Linear regression
## Leverage statistic 
- Describes the leverage a single observation has

> $$\text{leverage}=\frac{1}{m}+\frac{(x-\overline{x})^2}{\sum_{i=1}^{m}(x-\overline{x})^2}$$