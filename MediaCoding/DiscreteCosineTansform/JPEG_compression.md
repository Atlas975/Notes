> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/DiscreteCosineTansform
> **Created:** 27/03/2024 - 21:57
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# JPEG compression
- A compression method that makes use of [[Discrete_cosine_transform|DCT]], this s

![[Pasted image 20240327220258.png|350|350]]