> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 04/03/2024 - 01:08
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Triangular distribution
- A continuous probability distribution with a shape that forms a triangle. 
- Defined by three parameters: min value a, max value b, mode c
- These three parameters fall in the range $a\leq{c}\leq{b}$

## Probability density function 
$$\text{For } a \leq x \leq c: f(x) = \frac{2(x - a)}{(b - a)(c - a)}$$


$$\text{For } c < x \leq b: f(x) = \frac{2(b - x)}{(b - a)(b - c)}$$

## Mean 
$$\text{Mean: } \mu = \frac{a + b + c}{3}$$

## Variance 
$$\text{Variance: } \sigma^2 = \frac{a^2 + b^2 + c^2 - ab - ac - bc}{18}$$