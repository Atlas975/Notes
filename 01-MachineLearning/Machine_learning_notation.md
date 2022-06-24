# Machine_learning_notation
** 20-06-2022  17:32 **\
#StatisticalLearning

---

> $y=\text{actual result}$
> $\hat{y}=\text{prediction}$
> $m = \text{number of observations}$
> $\mathcal{L}=\text{loss }$
> $\theta=\text{parameter placeholder}$
> $J(\theta)=\text{cost function}$
> $\alpha=\text{learning rate}$

## Training notation 
> $\text{epoch}=\text{one forward and backward pass over all training samples}$
> $\text{batch size}= \text{number of training samples in one forward and backward pass}$
> $\text{number of iterations}= \text{num of passes, each pass being (batch size) number of samples}$
## Neural network notation
> $w=\text{weights}$
> $b=\text{bias}$
> $a=\text{activation}$
> $z=\text{output (activation of the next layer)}$


### parameter notation
> $$a_{j}^{[i][t][k]}$$
> $\text{Superscript i indicates layer, subscript j indicates neuron in layer vector }$
> $\text{parameters t to denote batch number and k to denote example may also be present}$
### Parameter dimensions
> $a^{[l]}=(n^{[l]},m)$
> $w^{[l]}=(n^{[l]},n^{[l-1]})$
> $b^{[l]}=(n^{[l]},1)$
> $\text{where n denotes network shape}$
## Convolutional network notation
> $n=\text{image dimensions}$
> $f=\text{filter(kernal) dimensions}$
> $p=\text{padding dimensions}$
> $s=\text{stride size}$
> $nc=\text{number of channels}$
