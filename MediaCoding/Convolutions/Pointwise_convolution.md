> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Convolutions
> **Created:** 18/04/2024 - 17:25
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Pointwise convolution
- A  [[Convolution]] that uses a 1x1 kernel, often used in a [[Convolutional_networks|CNN]] to modify the number of channels 
- Can both increase or decrease the number of channels, this is typically done by using multiple 1x1 filters separately with each filter performing different channel reduction operations
- This does not impact the spatial dimensions of an input


![[Pasted image 20240418175903.png|450|450]]
