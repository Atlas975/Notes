> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing/IntensityTransforms
> **Created:** 17/03/2024 - 23:04
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Log transform
-  Expands the dark pixels in the image while compressing the brighter pixels 
- Increases the dynamic range (ratio of max and min intensity values) of low intensities while compressing the dynamic range of high intensities

![[Pasted image 20240317230448.png|300|300]]

## Log transform formula 

$$g(x,y)=c\cdot \log(1+f(x,y))$$
$$c=\text{scaling factor}$$
## Log transform uses 
- When the dynamic range of the image (e.g., values are between 0 and 10,000,000) is greater than that of displaying device (e.g., 0-255), the lower intensity values are suppressed:

![[Pasted image 20240317230706.png|350|350]]
![[Pasted image 20240317230724.png|350|350]]

![[Pasted image 20240317230955.png|450|450]]