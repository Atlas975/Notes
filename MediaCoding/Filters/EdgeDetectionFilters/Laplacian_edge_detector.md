> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/EdgeDetectionFilters
> **Created:** 21/03/2024 - 02:36
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Laplacian edge detector
- An edge detection operator that computes the second-order derivative of an image, summing up the second derivatives in all directions
- Due to its nature of measuring the second derivative, the filter is highly sensitive to noise. It often requires preprocessing, like applying a Gaussian blur to mitigate this sensitivity

![[Pasted image 20240321180926.png|450|450]]

## Laplacian of Gaussian (LoG)
- The Laplacian of Gaussian (LoG) filter applies a [[Gaussian_filter|Gaussian]] blur to smooth an image before performing Laplacian edge detection.
- This combination helps reduce the noise sensitivity of the Laplacian operator, as the Gaussian blur suppresses noise in the image's intensity before the edges are enhanced by the Laplacian.

![[Pasted image 20240321182355.png|250|250]]

- The scale of the Gaussian blur determines the size of edges that the LoG filter will detect; a larger std ($\sigma$) blurs over a wider area, allowing the filter to detect larger-scale edges
## Laplacian formula
- The Laplacian $L(x,y)$ of an image with pixel intensity values $f(x,y)$ is given by:

$$L(x, y) = \frac{d^2 f}{dx^2} + \frac{d^2 f}{dy^2}$$
$$ \frac{d^2 f}{dx^2} = f(x + 1, y) - 2f(x, y) + f(x - 1, y)$$
$$\frac{d^2 f}{dy^2} = f(x, y + 1) - 2f(x, y) + f(x, y - 1)$$
$$L(x, y) = f(x + 1, y) + f(x - 1, y)- 4f(x, y)  + f(x, y + 1) + f(x, y - 1)$$