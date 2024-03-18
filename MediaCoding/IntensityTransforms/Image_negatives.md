> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing/IntensityTransforms
> **Created:** 18/03/2024 - 18:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image negatives
- Reverses the intensity of an image, produces the equivalent of a photographic negative
- Can be used to enhance white or grey details embedded in dark regions especially when the black areas are dominant in size


![[Pasted image 20240318184748.png|300|300]]

## Image negative formula 
$$g(x,y)=L-f(x,y)$$
$$L=\text{max possible intensity}$$