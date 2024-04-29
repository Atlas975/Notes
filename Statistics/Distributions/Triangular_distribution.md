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
- More ideal than [[PERT_distribution|Beta distribution]] when doing a project for the first time
- Defined by three parameters: minimum (optimistic) value a, most likely (mode) value c, and  maximum (pessimistic) value b.
- These three parameters fall in the range $a\leq{c}\leq{b}$

## Mean 
$$\mu = \frac{a + b + c}{3}$$

## Variance 
$$\sigma^2 = \frac{a^2 + b^2 + c^2 - ab - ac - bc}{18}$$

## Probability density function 
$$\text{For } a \leq x \leq c: f(x) = \frac{2(x - a)}{(b - a)(c - a)}$$


$$\text{For } c < x \leq b: f(x) = \frac{2(b - x)}{(b - a)(b - c)}$$


## Cumulative distribution function 
$$\text{For } x < a: \ \ \ f(x) = 0 $$
$$\text{For } x > b: \ \ \ f(x) = 1 $$
$$\text{For } a \leq x \leq c: \ \ \ f(x) = \frac{(x - a)^2}{(b - a)(c - a)} $$$$\text{For } c < x \leq b: \ \ \  f(x) = 1 - \frac{(b - x)^2}{(b - a)(b - c)}$$