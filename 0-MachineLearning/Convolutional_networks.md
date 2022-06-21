# Convolutional_networks

created: 2022-06-21 15:00
#MediaEncoding #StatisticalLearning

---

[[Computer_vision]][[0-MachineLearning/Neural_networks]]

- A constitutional network can be used to process images, in the context of a neural network this is done by breaking an image down to into its edges, shape patterns, colour etc
- Example network

> ![[Pasted image 20220621152515.png]]
> ![[Pasted image 20220621152421.png]]

- The dimensions of a filter correspond to the number of parameters eg with 10 filters of 3x3x3 in a layer, the resulting output will 270 parameters, with a bias this would be 280. 
- Note how the original image size doesn't influence the number of parameters

# Pooling layers
- Pooling layers offer another kind of image processing, operates the same way as a convolution but with a different output but with no filter values. These are a useful layer for collapsing a network
- **Pooling layers keep the depth dimension of a volume**
- Example of average and max pooling:

>![[Pasted image 20220621153651.png]]


$$dA \mathrel{+}= \sum _{h=0} ^{n_H} \sum_{w=0} ^{n_W} W_c \times dZ_{hw} \tag{1}$$