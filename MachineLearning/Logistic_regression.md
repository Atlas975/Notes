


# Logistic_regression
** 20-06-2022  16:08 **    
#StatisticalLearning [[Statistical_modeling]]
___
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


