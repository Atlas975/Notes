---
aliases:
  - deconv
---

> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Convolutions
> **Created:** 21/04/2024 - 17:42
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transposed convolution
- An operation used to attempt the inverse of a [[Convolution]] operation 
- This allows for upsampling of an input matrix, the size of this output is dependent on stride size, with a smaller stride size resulting in more upscaling than a larger one

![[Pasted image 20240421174526.png|350|350]]
