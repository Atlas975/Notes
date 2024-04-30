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
- A continuous probability [[Probability_distributions|distribution]] with a shape that forms a triangle. 
- Applied in scenarios with limited data but known min, max, and mode, often in preliminary simulations (e.g., cost estimation under uncertainty)
- Preferred over the [[PERT_distribution|Beta distribution]] when doing a project for the first time
- Defined by three parameters:
    - a = minimum (optimistic) value 
    - b = most likely (mode) value
    - c = maximum (pessimistic) value 
- These three parameters fall in the range $a\leq{b}\leq{c}$


## Probability density function

$$P(X=x)= \begin{cases} \frac{2(x-a)}{(c-a)(b-a)} & \text{if } a \leq x < b \\ \frac{2(c-x)}{(c-a)(c-b)} & \text{if } b \leq x \leq c \\ 0 & \text{otherwise} \end{cases}$$

## Cumulative distribution function

$$P(X\leq{x})=\begin{cases} \frac{(x-a)^2}{(c-a)(b-a)} & \text{if } a \leq x < b \\ 1 - \frac{(c-x)^2}{(c-a)(c-b)} & \text{if } b \leq x \leq c \\ 0 & \text{if } x < a \\ 1 & \text{if } x > c \end{cases}$$

## Mean
$$\mu = \frac{a + b + c}{3}$$

## Variance
$$\sigma^2 = \frac{a^2 + b^2 + c^2 - ab - ac - bc}{18}$$
