> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/EdgeDetectionFilters
> **Created:** 18/03/2024 - 23:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sobel filter
- **Kernel Composition**: Uses a 3x3 kernel but assigns higher weights to the central pixels in the neighbourhood. This reduces the weight of neighbouring pixels
- **Sensitivity**: good response for vertical / horizontal oriented edges due to its weighted approach.
- **Noise Response**: More resistant to noise compared to [[Prewitt_filter|Prewitt]], making it a better for noisy images.
- **Edge Detection**: Overall, it provides a more refined edge detection output, particularly for images with varying levels of brightness and contrast.

## Sobel filter kernel
- Filter is based on finding central difference $\left( \frac{\partial f}{\partial x}=f(x+1)-f(x-1) \right)$

![[Pasted image 20240318233339.png|450|450]]
