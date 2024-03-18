> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing/IntensityTransforms
> **Created:** 17/03/2024 - 23:00
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Piecewise linear transform
- Applies different linear functions to specific ranges of pixel intensity values, allowing for customised enhancement of various brightness levels within an image.
- Useful for enhancing contrast in specific intensity ranges by manipulating each segment with a separate linear function. Enables selective enhancement of details in  shadows and highlights.

![[Pasted image 20240317230137.png|300|300]]
![[Pasted image 20240318185617.png|300|300]]