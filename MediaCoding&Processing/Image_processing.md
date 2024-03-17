> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing
> **Created:** 17/03/2024 - 22:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image processing
- The techniques and algorithms applied to images to enhance them, extract useful information, or convert them to a desired format 
- Uses operations like filtering, noise reduction, and image compression

- Takes in place in either of two domains: 
    - **Spatial domain**: processing deals with direct manipulation of image pixels