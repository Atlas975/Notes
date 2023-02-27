---
aliases: [CNN]
---

> [!important]- Metadata
> **Tags:** #MediaEncoding #StatisticalLearning
> **Located:** MachineLearning
> **Created:** 26/12/2022 - 09:26
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
# Convolutional networks
- A constitutional [[MachineLearning/Neural_networks|neural network]] can be used to process images, in the context of a neural network this is done by breaking an image down to into its edges, shape patterns, colour etc
- Example network

![[Pasted image 20220621152515.png|450|450]]
![[Pasted image 20220621152421.png|450|450]]

- The dimensions of a filter correspond to the number of parameters eg with 10 filters of 3x3x3 in a layer, the resulting output will 270 parameters, with a bias this would be 280.
- Note how the original image size doesn't influence the number of parameters
## Convolutional network features
- **Parameter sharing** operates on lower and higher level features, saving computation power. A feature detector for instance that's useful in part of an image will likely be usefil in other parts of an image
- **Connection sparsity** means that each output in a layer depends on a small number of inputs
- Generally while going deeper in a CNN, height and width tend to decline while number of channels increases

> $$ n_{H},n_{W} \downarrow  \implies n_{C}\uparrow   $$

# ResNets (residual networks)
- Allows for activation's from one layer to be fed deeper into a network without going through intermediary layers. This allows for much deeper networks to be trained. Effectively allowing for multiple inputs in a single layer 
- ResNets will typically use same convolutions to ensure the input and output have the same dimensions

> $$a^{l}\to a^{l+2}$$

- This can be represented by

> $$a^{[l+2]}=g(w^{[l+2]}(g(w^{[l+1]}a^{[l]}+b^{[L+1]})+b^{[l+2]}+a^{[l]})$$

![[Pasted image 20220623124145.png|450|450]]
## ResNet benefits/
- ResNets help solve the vanishing gradient problem that can arise from adding too much depth to a network (overfitting). This happens because the network has a much harder time training the network as it becomes less linear causing the training error to gradually increase
- As a result of this deeper networks can be trained without the overfitting tradeoff\

![[Pasted image 20220623124954.png|450|450]]
# Inception networks

- Inception layers allow for multiple convolutions of different types to be combined through the use of same padding and [[Computer_vision#1x1 convolutions|1x1 convolutions]]

![[Pasted image 20220623164903.png|450|450]]
- This minimizes computation cost and allowing for multiple operations to be attempted and concatenated
![[Pasted image 20220623160809.png|450|450]]
- additional softmax branches may also exist to attempt an early prediction of the output / use for debugging purposes
![[Pasted image 20220623161111.png|450|450]] 
# Classic CNN network architectures
## LeNet
![[Pasted image 20220623115301.png|450|450]]
## AlexNet
![[Pasted image 20220623115413.png|450|450]]
## VGG
![[Pasted image 20220623115645.png|450|450]]
## MobileNet
[[Computer_vision#Computation cost of convolution]]

![[Pasted image 20220623230550.png|450|450]]the bottle neck block allows the network the learn a richer function in the depth wise portion, the pointwise convolutions helps project back down to a smaller set of values, keeping the activations small
