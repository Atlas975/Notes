> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing/IntensityTransforms
> **Created:** 18/03/2024 - 19:12
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bit-plane slicing
- Involves separating an image into bit-levels, with each plane representing one bit of data from every pixel's binary representation, this is done in [[Computer_memory#Little-endian|little-endian]] format
- Analysing bit-planes can highlight different details in an image

![[Pasted image 20240318191546.png|350|350]]


## Bit-plane uses
- Bit planes can enhance the image's appearance, or extract meaningful patterns / textures that are not as visible in the grayscale range.
- Example of an image split into its 8 bit planes: 

![[Pasted image 20240318192347.png|450|450]]