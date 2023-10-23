> [!important]- Metadata
> **Tags:** #DataEngineering
> **Located:** MachineLearning
> **Created:** 26/12/2022 - 09:23
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Feature scaling
- Feature scaling keeps the step size in [[MachineLearning/Gradient_descent|gradient descent]] small, allowing for more stable oscillations and resulting in faster convergence
## Min-max normalization 
- Causes all feature values to be pushed between a range of 0 to 1

>$$\mathcal{x'}=\frac{x-x_{min}}{x_{max}-x_{min}}$$


## Standardization 
- Makes the mean 0 and standard deviation 1

>$$\mathcal{x'}=\frac{x-\overline{x}}{\sigma}$$