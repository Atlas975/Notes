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
- A continuous probability distribution often used in project management and [[Risk_management|risk analysis]].
- Stands for "Program Evaluation and Review Technique".
- Defined by three parameters:
    - a = minimum (optimistic) value 
    - b = most likely (mode) value
    - c = maximum (pessimistic) value 
- These three parameters fall in the range $a\leq{b}\leq{c}$


## Probability density function
$$f(x; \ a, b, c) = \frac{(x - a)^{\alpha - 1} \cdot (c - x)^{\beta - 1}}{B(\alpha, \beta) \cdot (c - a)^{\alpha + \beta - 1}}$$

$$\text{where } \alpha = 1 + \frac{4(b - a)}{c - a} \text{ and } \beta = 1 + \frac{4(c - b)}{c - a}, \text{ and } B(\alpha, \beta) \text{ is the Beta function.}$$
## Mean
$$\mu = \frac{a + 4b + c}{6}$$
## Variance
$$\sigma^2 = \frac{(c - a)^2}{36}$$
## Modified PERT distribution 
- Introduces a 4th parameters $\nu$ which controls the weight of b

$$\mu = \frac{a + \nu\cdot b + c}{\nu + 2}.$$