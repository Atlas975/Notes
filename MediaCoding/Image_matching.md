> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 21/03/2024 - 20:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image matching 
- The process of finding matching pairs of features between images that correspond to the same point in the scene, despite differences in viewpoint, illumination, or scale.
- Vital for 


![[Pasted image 20240321203137.png|450|450]]