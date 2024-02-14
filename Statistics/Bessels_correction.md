> [!important]- Metadata
> **Tags:** #Statistics
> **Located:** Statistics
> **Created:** 14/02/2024 - 15:13
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bessels correction
- Bessel's correction is a statistical adjustment used to obtain a more accurate estimate of the population variance and standard deviation from a sample.
- It compensates for the bias introduced by using the sample mean to estimate the population mean. Especially useful when using a small sample
- The correction involves dividing the sum of squared deviations by the sample size minus one (n - 1) instead of just by the sample size (n).

## Bessel corrected variance 

$$s^2=\frac{\sum_{i=1}^{n}(x_{i}-\overline{x})^2}{n-1}$$
## Bessel corrected standard deviation
$$s=\sqrt{\frac{\sum_{i=1}^{n}(x_{i}-\overline{x})^2}{n-1}}$$





