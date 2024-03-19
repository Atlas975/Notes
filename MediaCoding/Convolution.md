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

- The padding required to have the input size equal output size (also known as a same convolution) can be found using:

> $p=\frac{f-1}{2}$

- Convolutions without padding are known as valid convolutions




## Strided convolutions
- Describes the jump size after each convolution, larger strides further compress an image, strides that fall out of bounds are skipped to where the number of strides in any given dimension is equal to the floor of n/f

![[Pasted image 20220621142807.png|450|450]]

## Kernel output dimensions
- Valid convolution (no padding):

 $$[n-f+1,n-f+1]$$

- With padding

$$[n+2p-f+1,n+2p-f+1]$$

- With increased stride size

$$\text{floor}(\left[ \frac{n+2p-f}{s}+1,\frac{n+2p-f}{s}+1 \right])$$