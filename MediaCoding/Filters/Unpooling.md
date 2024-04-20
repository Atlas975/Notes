> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters
> **Created:** 20/04/2024 - 20:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Unpooling
- The inverse of a [[Pooling]] operation, commonly used in a [[Generative_adversarial_networks|GAN]]