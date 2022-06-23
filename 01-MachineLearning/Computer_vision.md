# Computer_vision
created: 2022-06-21 10:01
#MediaEncoding

---

- In image processing, a convolution is the process of transforming an image by applying a kernel to each pixel. A kernal in this context being a matrix of values whose size and values determine the transformation effect of the convolution process
- A kernal is vital in compressing an image into an easier and less computationally expensive version of itself to operate on
- Convolution Operation on a 7x7 matrix with a 3x3 kernel:

> ![[Pasted image 20220621135608.png]]
## Padding
[[Machine_learning_notation#Machine_learning_notation#Convolutional network notation]]

- Padding prevents information from the images edges from being lost, example of padding=1

> ![[Pasted image 20220621141454.png]]

- The padding required to have the input size equal output size (also known as a same convolution) can be found using:

> $p=\frac{f-1}{2}$

- Convolutions without padding are known as valid convolutions
## Edge detection
- Edges in images are typically represented by a transition from darker to lighter pixels, multiple filters such as the one below for vertical detection can be used to find specific edge types
- Being able to detect lower level features like edges is the first step in training a CNN

> ![[Pasted image 20220621135948.png]]

- note this filter can only detect light to dark transitions from left to right

- Alternative edge detection approaches

> ![[Pasted image 20220621140351.png]]
## Strided convolutions
- Describes the jump size after each convolution, larger strides further compress an image, strides that fall out of bounds are skipped to where the number of strides in any given dimension is equal to the floor of n/f

> ![[Pasted image 20220621142807.png]]
## Kernal output dimensions:
- Valid convolution (no padding):

> $[n-f+1,n-f+1]$

- With padding

> $[n+2p-f+1,n+2p-f+1]$

- With increased stride size

> $\text{floor}(\left[ \frac{n+2p-f}{s}+1,\frac{n+2p-f}{s}+1 \right])$

- With multiple channels

> $\text{floor}(\left[ \frac{n+2p-f}{s}+1,\frac{n+2p-f}{s}+1 \right])\times{nc}$
> $\text{note that nc is the same as the number of filters}$
# Pooling layers
- Pooling layers offer another kind of image processing, operates the same way as a convolution but without a kernal with cell values. These are a useful layer for collapsing a network
- **Pooling layers keep the depth dimension of a volume**
- Example of average and max pooling:

> ![[Pasted image 20220621153651.png]]
# Convolutions over volume
- Needed over RGB images (3 layers correspond to 3 channels for an image)
- Filter and image channels must match, channels act as a 3rd dimension
- Note that each filter compresses the image to one channel each
- The number of filters denote the number  of output channels

> ![[Pasted image 20220621145255.png]]
# 1x1 convolutions
- 1x1 convolutions allow for a dimension to be compressed into a single channel
- Pooling layers allow for the height and width layers to be compressed, 1x1 convolutions should be used to compress the number of channels

> ![[Pasted image 20220623163848.png]]

- The use of 1x1 convolutions can help drastically decrease computation cost, example with a 5x5 filter:

> ![[Pasted image 20220623141826.png]]
> ![[Pasted image 20220623142114.png]]the 1x1 convolutions might acts as a bottleneck in this scenario and reduces the amount of computations by 100.6 million
