> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Watermarking
> **Created:** 29/03/2024 - 19:33
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Frequency domain watermarking
- Involves embedding a [[Watermarking|watermark]] using the [[Media_coding#Frequency domain|frequency domain]]
- Typically uses a [[Discrete_cosine_transform|DCT]] to do this, making the inserted watermark more robust 

![[Pasted image 20240330175537.png|400|400]]


![[Pasted image 20240330004624.png|300|300]]