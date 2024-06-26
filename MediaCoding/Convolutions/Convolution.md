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
- This technique is fundamental for applying various [[Media_coding#Spatial domain|spatial]] transformations, like [[Smoothing_spatial_filtering|smoothing]], [[Sharpening_filter|sharpening]], or [[Edge_detection|edge detection]].
## Image padding
- Involves adding extra pixels around the edge of an image. This is done to change the image size, maintaining spatial dimensions after applying filters or kernels
- Padding can be implemented in various ways, such as replicating border pixels, adding constant value pixels (like zeroes), or reflecting the image content near edges.

![[Pasted image 20220621141454.png|400|400]]

### Same convolutions 
- The padding amount required to have the output size equal to the input size after a filter 
- This is necessary to avoid information at the borders being lost too quickly when performing several consecutive operations such as in a deep [[Convolutional_networks|CNN]]

$$P=\frac{F-1}{2}$$
### Valid convolutions 
- Convolutions performed when an image is given no padding 
- This results in an output image smaller than the input image 
## Strided convolutions
- Describes the jump size after each convolution, larger strides further compress an image, strides that fall out of bounds are skipped
- Effective for downsampling an image, also computationally efficient by reducing the number of times the kernel is applied

![[Pasted image 20220621142807.png|400|400]]

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



## Unshared convolution
- A convolution where each filter has its own learnable parameters / weights. This means each filter's weights are applied independently with no sharing
- Allow for more flexible feature learning compared to shared convolutions, as each filter can learn distinct features at different locations in the input data. More computationally expensive

![[Pasted image 20240420015929.png|400|400]]

## Tiled convolution 
- Alternates between filters while performing convolutions 
- This allows more flexibility when filtering on the spatial domain 

![[Pasted image 20240420020729.png|350|350]]