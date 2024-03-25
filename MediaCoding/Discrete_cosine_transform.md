---
aliases:
  - DCT
---

> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 25/03/2024 - 22:38
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Discrete cosine transform
- The process of taking data and representing it as the sum of multiple cosine waves 
- This offers a lot of flexibility as adding waves can create new complex shaped waves, however because of constructive interference the average of added waves is usually taken

![[Pasted image 20240325224006.png|450|450]]
![[Pasted image 20240325224602.png|350|350]]

