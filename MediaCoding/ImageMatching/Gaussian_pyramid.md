> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 23/03/2024 - 20:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Gaussian pyramid
- A method for calculating an ideal window size ($F$) for algorithms such as [[Harris_corner_detection|HSD]]
- This involves used a fixed window and downsampling the image itself to find this

![[Pasted image 20240323204731.png|450|450]]


## Aliasing 
- Refers to how an image is downsampled, a good method for this requires that as much of the images [[Media_coding#Spatial domain|spatial]] information is retained as possible
- Note that the image cannot be reconstructed from its downsampled counterpart, this can instead be done by also using a [[Laplacian_pyramid|Laplacian pyramid]] 

![[Pasted image 20240323205033.png|300|300]]

- 