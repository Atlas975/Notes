> [!important]- Metadata
> **Tags:** #
> **Located:** MediaCoding/Convolutions
> **Created:** 18/04/2024 - 17:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Depthwise convolution
- A type of [[Convolution]] that has each channel convolved separately with its own kernel 
- The lack of cross-channel operations can makes this convolution type efficient 
- This does not impact the channel dimensionality of an input

![[Pasted image 20240418180107.png|450|450]]
