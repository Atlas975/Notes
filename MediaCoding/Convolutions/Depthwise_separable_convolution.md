> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Convolutions
> **Created:** 18/04/2024 - 18:12
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Depthwise separable convolution
- Decomposes a standard [[Convolution]] into two separate layers
	1. [[Depthwise_convolution|Depthwise convolution]]: performs lightweight filtering, modifying the spatial features 
	2. [[Pointwise_convolution|Pointwise convolution]]:  combines the output of the depthwise layer, modifying depth
- The separating of the spatial and depth level operations greatly aids in efficiency 


![[Pasted image 20240418181840.png|400|400]]
