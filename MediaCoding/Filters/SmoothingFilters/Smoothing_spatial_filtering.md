> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters
> **Created:** 19/03/2024 - 17:14
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Smoothing spatial filtering
- Smoothing spatial filters describes the family of filter used for blurring and noise reduction 
- Blurring is a pre-processing step for removal of  noise in an image 
## Smoothing filter types
- **Linear (mean) filters**: have coefficients that vary linearly eg mean, [[Gaussian_filter|Gaussian]] filters
- **Non-linear (order statistics) filters**: do not follow linear characteristics and are useful in different contexts, like removing certain types of noise eg median, minimum, and maximum filters
