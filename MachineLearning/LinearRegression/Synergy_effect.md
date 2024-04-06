> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/LinearRegression
> **Created:** 06/04/2024 - 19:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Synergy effect

- The interaction between two variables where their combined effect is greater than the sum of their individual effects on the dependent variable. Vital to consider in 
- Typically modeled as an interaction term between independent variables:

$$ y = \beta_0 + \beta_1x_1 + \beta_2x_2 + \beta_3(x_1, x_2) + \epsilon $$

- Important in cases where independent variables work together to affect the dependent variable, which cannot be captured by additive models alone.
- Conduct hypothesis testing for interaction terms to ensure their inclusion is statistically justified. Domain knowledge is vital to interpret the nature and implications of this effect





