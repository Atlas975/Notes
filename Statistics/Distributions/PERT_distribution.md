---
aliases:
  - Beta distribution
---

> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 04/03/2024 - 01:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# PERT distribution
- A continuous probability distribution often used in project management and risk analysis.
- Stands for "Program Evaluation and Review Technique".
- Defined by three parameters: minimum (optimistic) value a, most likely (mode) value c, and  maximum (pessimistic) value b.
- These three parameters fall in the range $a\leq{c}\leq{b}$


## Probability density function
$$f(x; \ a, b, c) = \frac{(x - a)^{\alpha - 1} \cdot (b - x)^{\beta - 1}}{B(\alpha, \beta) \cdot (b - a)^{\alpha + \beta - 1}}$$
$$\text{where } \alpha = 1 + \frac{4(c - a)}{b - a} \text{ and } \beta = 1 + \frac{4(b - c)}{b - a}, \text{ and } B(\alpha, \beta) \text{ is the Beta function.}$$
## Mean
$$\text{Mean: } \mu = \frac{a + 4c + b}{6}$$
## Variance
$$\text{Variance: } \sigma^2 = \frac{(b - a)^2}{36}$$