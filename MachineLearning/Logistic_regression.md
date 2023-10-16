> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 25/10/2022 - 11:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Logistic regression
## Sigmoid function
The logistic curve (sigmoid):
> $$ h(x)=\frac{1}{1+ e^{-y}}$$
- Converts input into range 0-1

## Sigmoid gradient 
>$$ h(x)'=\frac{1}{1+e^{ -y } }(1-\frac{1}{1+ e^{-y}})$$

# Logistic loss
> $$Cost=-\frac{1}{m} \sum_{i=1}^{m} y \log{(\hat{y})} + {(1-y)}\log{(1-\hat{y})}$$

## Regularized logistic loss 

> $$\text{Regularized Cost}=-\frac{1}{m} \sum_{i=1}^{m} y \log{(\hat{y})} + {(1-y)}\log{(1-\hat{y})\color{cyan}+ \frac{\lambda} {2m}\sum_{i=1}^{n}\theta^2}$$


