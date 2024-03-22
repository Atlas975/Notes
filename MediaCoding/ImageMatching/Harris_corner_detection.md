> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 22/03/2024 - 17:57
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Harris corner detection
- Identifies corners in an image by detecting significant changes in all directions of a window sliding over the image. This is done using the [[Sum_of_squared_differences|SSD]]
- Larger SSD errors from a window to it's neighbours indicates that an int