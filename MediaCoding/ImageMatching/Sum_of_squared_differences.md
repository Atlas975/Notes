---
aliases:
  - SSD
---
> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 21/03/2024 - 20:34
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sum of squared differences
- A metric used in image matching, calculating the sum of squared differences between elements of two vectors (images).
- Used for [[Image_matching#Holistic image matching|holistic image matching]] by comparing entire images with every other sample. Used in [[Image_matching#Local image matching|local image matching]] via comparing feature vectors


## SSD formula 
- The distance between two vectors a and b can be expressed as:

$$\sum_{i=1}^{n}(a_{i}-b_{i})^2$$
- Note this can only be applied when a and b are the same size, otherwise images need to be resized prior to calculating the SSD