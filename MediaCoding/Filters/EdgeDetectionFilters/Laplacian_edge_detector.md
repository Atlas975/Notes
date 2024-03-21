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
- Due to its nature of measuring the second derivative, the filter is highly sensitive to noise. It often requires preprocessing, like applying a Gaussian blur, to mitigate this sensitivity

![[Pasted image 20240321180926.png|450|450]]

## Laplacian of Gaussian (LoG)
- The process of applying both a [[Gaussian_filter|Gaussian]] and Laplacian filter at the same time 
- This provides a blur to remove noice while using the Laplacian filter detects 

![[Pasted image 20240321182355.png|250|250]]

## Laplacian formula
- The Laplacian $L(x,y)$ of an image with pixel intensity values $f(x,y)$ is given by:

$$L(x, y) = \frac{d^2 f}{dx^2} + \frac{d^2 f}{dy^2}$$
$$ \frac{d^2 f}{dx^2} = f(x + 1, y) - 2f(x, y) + f(x - 1, y)$$
$$\frac{d^2 f}{dy^2} = f(x, y + 1) - 2f(x, y) + f(x, y - 1)$$
$$L(x, y) = f(x + 1, y) + f(x - 1, y)- 4f(x, y)  + f(x, y + 1) + f(x, y - 1)$$