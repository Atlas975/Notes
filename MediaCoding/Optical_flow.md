> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 23/03/2024 - 21:39
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Optical flow
- Motion is the main form of extracting information from videos. Optical flow techniques involve finding the vector that describes the transition from one frame to another. This information also allows the magnitude of motion to be computed

![[Pasted image 20240323214320.png|350|350]]