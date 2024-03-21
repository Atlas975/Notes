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
- This is used for [[Image_matching|holistic image matching]] which means it may not work in cases such as when the image is shifted even slightly


## SSD formula 
- The distance between two vectors a and b can be expressed as:

$$\sum_{i=1}^{n}(a_{i}-b_{i})^2$$
- Note this can only be applied when a and b are the same size, otherwise images need to be resized prior to calculating the SSD