> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/EdgeDetectionFilters
> **Created:** 18/03/2024 - 23:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Roberts filter
- **Diagonal Edge Detection**: Effective at identifying diagonal edges. It operates using a pair of 2x2 convolution kernels (for detecting in the diagonal and anti-diagonal direction)
- **Computational Efficiency**: Due to its small kernel size, requires less computational power compared to other edge detection filters like [[Sobel_filter|Sobel]] and [[Prewitt_filter|Prewitt]]
- **Noise Sensitivity**: It is more sensitive to noise compared to Sobel and Prewitt filters. This sensitivity can be a disadvantage in noisy image conditions
- **Edge Response**: Provides a less pronounced response to edges than Sobel and Prewitt. While it can effectively detect sharp edges, it might miss more subtle edges or gradients in an image.

## Roberts filter kernel 
![[Pasted image 20240318234524.png|350|350]]