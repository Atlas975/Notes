> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 19/03/2024 - 17:29
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Convolution
- A mathematical operation where a filter (kernel) is slid over an image, at each position, a new pixel value is calculated by `sum(overlapping pixel values * filter coefficients)`
- This technique is fundamental for applying various [[Image_processing#Spatial domain|spatial]] transformations, like [[Smoothing_spatial_filtering|smoothing]], [[Sharpening_filter|sharpening]], or [[Edge_detection|edge detection]].
## Image padding
- Involves adding extra pixels around the edge of an image. This is done to change the image size, maintain spatial dimensions after applying filters or kernels
- Prevents information from the images edges from being lost, vital in a creating a deep [[Convolutional_networks| CNN]]

![[Pasted image 20220621141454.png|400|400]]

- Padding can be implemented in various ways, such as replicating border pixels, adding constant value pixels (like zeroes), or reflecting the image content near edges.
### Same convolutions 
- The padding required to have the output size equal to the input size, this can be found using:

$$P=\frac{F-1}{2}$$

### Valid convolutions 
- Convolutions performed when an image is given no padding 
- This results in an output image smaller than the input image 




## Strided convolutions
- Describes the jump size after each convolution, larger strides further compress an image, strides that fall out of bounds are skipped
- Effective for downsampling an image, also computationally efficient by reducing the number of times the kernel is applied

![[Pasted image 20220621142807.png|450|450]]

## Kernel output dimensions
- These output sizes assume the x and y dimension sizes are the same
- Valid convolution (no padding):

 $$N-F+1$$
$$N=\text{image size}$$
$$F=\text{filter size}$$
- Same convolution (with padding):

$$N+2P-F+1$$
$$P=\text{padding size}$$
- Convolution with increased stride size:


$$\lfloor{\frac{N+2P-F}{S}+1}\rfloor$$
$$S=\text{stride size}$$