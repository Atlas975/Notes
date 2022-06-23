# Convolutional_networks

created: 2022-06-21 15:00
#MediaEncoding #StatisticalLearning

---

[[Computer_vision]][[01-MachineLearning/Neural_networks]]

- A constitutional network can be used to process images, in the context of a neural network this is done by breaking an image down to into its edges, shape patterns, colour etc
- Example network

> ![[Pasted image 20220621152515.png]]
> ![[Pasted image 20220621152421.png]]

- The dimensions of a filter correspond to the number of parameters eg with 10 filters of 3x3x3 in a layer, the resulting output will 270 parameters, with a bias this would be 280. 
- Note how the original image size doesn't influence the number of parameters
## Convolutional network features 
- **Parameter sharing** operates on lower and higher level features, saving computation power. A feature detector for instance that's useful in part of an image will likely be usefil in other parts of an image
- **Connection sparsity** in each layer means that each output depend on only a small number of inputs 
- Generally while going deeper in a CNN, height and width tend to decline while number of channels increases
> $$n_{H},n_{W} \downarrow  \implies n_{C}\uparrow $$
# Pooling layers
- Pooling layers offer another kind of image processing, operates the same way as a convolution but without a kernal with cell values. These are a useful layer for collapsing a network
- **Pooling layers keep the depth dimension of a volume**
- Example of average and max pooling:

>![[Pasted image 20220621153651.png]]


$$dA \mathrel{+}= \sum _{h=0} ^{n_H} \sum_{w=0} ^{n_W} W_c \times dZ_{hw} \tag{1}$$