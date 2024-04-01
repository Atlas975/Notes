> [!important]- Metadata
> **Tags:** #StatisticalLearning 
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
# Machine learning notation

$$y=\text{actual result}$$
$$\hat{y}=\text{prediction}$$
$$m = \text{number of observations}$$
$$\mathcal{L}=\text{loss }$$
$$\theta=\text{parameter placeholder}$$
$$J(\theta)=\text{cost function}$$
$$\alpha=\text{learning rate}$$
$$\lambda=\text{regularization parameter}$$

## Training notation

$$\text{epoch}=\text{one forward and backward pass over all training samples}$$

$$\text{batch size}= \text{number of training samples in one forward and backward pass}$$
$$\text{number of iterations}= \text{num of passes, each pass being (batch size) number of samples}$$

## Neural network notation

$$w=\text{weights}$$
$$b=\text{bias}$$
$$a=\text{activation}$$
$$z=\text{output (activation of the next layer)}$$

### Parameter notation

 $$a_{j}^{[i][t][k]}$$
$\text{Superscript i indicates layer, subscript j indicates neuron in layer vector }$
$$\text{parameters t to denote batch number and k to denote example may also be present}$$

### Parameter dimensions

> $a^{[l]}=(n^{[l]},m)$
> $w^{[l]}=(n^{[l]},n^{[l-1]})$
> $b^{[l]}=(n^{[l]},1)$
> $\text{where n denotes network shape}$

## Convolutional network notation
> 
> $n=\text{image dimensions}$
> $f=\text{filter(kernal) dimensions}$
>  $p=\text{padding dimensions}$
> $s=\text{stride size}$
$n_{c}=\text{number of channels}$


