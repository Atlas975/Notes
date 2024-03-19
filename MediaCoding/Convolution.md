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
- Prevents information from the images edges from being lost, useful for allowing a deeper [[Convolutional_networks| CNN]]

![[Pasted image 20220621141454.png|550|550]]


##
- The padding required to have the input size equal output size (also known as a same convolution) can be found using:

$$P=\frac{F-1}{2}$$

- Convolutions without padding are known as valid convolutions




## Strided convolutions
- Describes the jump size after each convolution, larger strides further compress an image, strides that fall out of bounds are skipped to where the number of strides in any given dimension is equal to the floor of n/f

![[Pasted image 20220621142807.png|450|450]]

## Kernel output dimensions
- These output sizes assume the x and y dimension sizes are the same
- Valid convolution (no padding):

 $$[N-F+1,\ N-F+1]$$
$$N=\text{image size}$$
$$F=\text{filter size}$$
- Same convolution (with padding):

$$[N+2P-F+1,\ N+2P-F+1]$$
$$P=\text{padding size}$$
- Convolution with increased stride size:

$$\text{floor}(\left[ \frac{N+2P-F}{S}+1,\ \frac{N+2P-F}{S}+1 \right])$$
$$S=\text{stride size}$$