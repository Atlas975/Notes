> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/SmoothingFilters
> **Created:** 19/03/2024 - 17:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Gaussian filter
- A kernel with values following a Gaussian (bell-shaped) distribution, emphasising the central pixels and gradually decreasing influence towards the edges
- This makes them effective for blurring images, removing detail and noise, and creating a smoothing effect thanks to the tendency to place more weight on central pixels

![[Pasted image 20240319193105.png|250|250]]

## Gaussian filter formula 
$$g(x,y)=\frac{1}{2\pi \sigma^2}e^{-\frac{x^2+y^2}{2\sigma^2}}$$