> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/EdgeDetectionFilters
> **Created:** 18/03/2024 - 23:34
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Prewitt filter
- **Kernel Composition**:  Uses a 3x3 kernel that gives equal weight to all the pixels in the neighbourhood when calculating the gradient
- **Sensitivity**: More sensitive to edges closer to 45 degrees or 135 degrees compared to [[Sobel_filter|Sobel]] 
- **Noise Response**: Tends to be slightly more sensitive to noise than Sobel, as it does not put more emphasis on the central pixels in the kernel.
- **Edge Detection**: Offers a basic form of edge detection, highlighting horizontal and vertical edges.
## Prewitt filter kernel