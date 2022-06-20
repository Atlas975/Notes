# Logistic regression 
The logistic curve (sigmoid):
> $$ h(x)=\frac{1}{1+ e^{-y}}$$
- Converts input into range 0-1



## Logistic regression gradient 
>$$ h(x)'=\frac{1}{1+ e^{-y}}(1-\frac{1}{1+ e^{-y}})$$

## Logistic loss
> $$Cost=\frac{1}{m} \sum_{i=1}^{m} -y \log{(y')} + {(1-y)}\log{(1-y')}$$