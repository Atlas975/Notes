> [!important]- Metadata
> **Tags:** #MediaEncoding #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Computer vision

- In image processing, a convolution is the process of transforming an image by applying a kernel to each pixel. A kernel in this context being a matrix of values whose size and values determine the transformation effect of the convolution process
- A kernel is vital in compressing an image into an easier and less computationally expensive version of itself to operate on

![[Pasted image 20220621135608.png|250|250]]



## Pooling layers
- Pooling layers offer another kind of image processing, operates the same way as a convolution but without a kernel with cell values. These are a useful layer for collapsing a network
- Pooling layers keep the depth dimension of a volume
- Example of average and max pooling:

![[Pasted image 20220621153651.png|450|450]]

## Convolutions over volume
- Needed over RGB images (3 layers correspond to 3 channels for an image)
- Filter and image channels must match, channels act as a 3rd dimension
- Note that each filter compresses the image to one channel each
- The number of filters denote the number  of output channels

![[Pasted image 20220621145255.png|450|450]]

## 1x1 Convolutions
- 1x1 convolutions allow for a dimension to be compressed into a single channel
- Pooling layers allow for the height and width layers to be compressed, 1x1 convolutions should be used to compress the number of channels

![[Pasted image 20220623163848.png|450|450]]

- The use of 1x1 convolutions can help drastically decrease computation cost, example with a 5x5 filter:

![[Pasted image 20220623141826.png|450|450]]
![[Pasted image 20220623142114.png|450|450]]the 1x1 convolutions  acts as a bottleneck in this scenario and reduces the amount of computations by 100.6 million

## Computation cost of convolution

> $\text{Computation cost}=\text{\#number of filter params}\times \text{\#filter positions}\times \text{\#number of filters}$

![[Pasted image 20220623224238.png|550|550]]

## Depthwise convolutions
- A method of reducing convolution computation cost, takes a two step approach to doing this

![[Pasted image 20220623224944.png|450|450]]

- Starts with a valid convolution with the same number of channels as original input

![[Pasted image 20220623225049.png|450|450]]

- Follow this with pointwise convolution utilizing a 1x1 convolution

![[Pasted image 20220623225334.png|450|450]]

- Adding this up, this method results in a computation cost of 672, far less than the standard convolution alternative of 2160. This reduction scales exponentially with more channels
