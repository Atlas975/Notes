---
aliases:
  - HOG
---

> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 21/03/2024 - 20:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Histogram of oriented gradients


1. Calculate magnitude and direction of gradient at each pixel in the image
2. Divide the image into 8×8 cells
3. Calculate histogram of gradients in each cell
4. Block Normalisation
5. Form HOG feature vector
