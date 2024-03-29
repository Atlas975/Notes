> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Watermarking
> **Created:** 29/03/2024 - 18:29
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Least significant bit modulation
- A [[Media_coding#Spatial domain|Spatial domain]] watermarking technique that involves direct bit manipulation 
- Involves selecting an appropriately sized block in the original image and setting the least significant bit for each value to that of the watermark. 
- The watermark itself uses binary encoding, this is not robust and is covert

![[Pasted image 20240329183206.png|450|450]]
