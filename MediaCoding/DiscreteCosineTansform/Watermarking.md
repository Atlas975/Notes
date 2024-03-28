> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/DiscreteCosineTansform
> **Created:** 28/03/2024 - 20:24
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Watermarking
- The process of embedding information into a digital signal in
