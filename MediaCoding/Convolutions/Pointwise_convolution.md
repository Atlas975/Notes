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
- A 1x1 [[Convolution]] primarily used in a [[Convolutional_networks|CNN]] to reduce the number of channels 
- This does not impact the spatial dimensions of an input 