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
- A feature descriptor used in [[Image_matching|local image matching]]
- Captures the features of an image via analysing the distribution of it's intensity gradients. 

![[Pasted image 20240321212543.png|450|450]]
- Follows the 
1. Calculate magnitude and direction of gradient at each pixel in the image
2. Divide the image into 8×8 cells
3. Calculate histogram of gradients in each cell
4. Block Normalisation
5. Form HOG feature vector


- In essence, the HOG feature vector transforms an image into a form that emphasises structural information. This can then be compared with other feature vectors using metrics like [[Sum_of_squared_differences|SSD]]
