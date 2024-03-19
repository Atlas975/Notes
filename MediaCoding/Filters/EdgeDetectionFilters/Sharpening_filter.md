> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters
> **Created:** 18/03/2024 - 20:50
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sharpening filter
- Designed to accentuate the edges and fine details of an image. Emphasises the contrast at the boundaries between different regions, making the edges appear more distinct
- This approach effectively highlights transitions in intensity, which are crucial for edge detection and detail enhancement in images.

![[Pasted image 20240318234718.png|450|450]]

## Sharpening filter general formula 
$$I_{\text{original}}-I_{\text{blur}}=I_{\text{detail}}$$
$$I_{\text{original}}-I_{\text{detail}}=\color{red}I_{\text{sharp}}\color{white}$$
$$I_{\text{original}}+(I_{\text{original}}-I_{\text{blur}})=\color{red}I_{\text{sharp}}\color{white}$$
$$2 \cdot I_{\text{original}}-I_{\text{blur}}=\color{red}I_{\text{sharp}}\color{white}$$

- Not the results of sharpening might contain negative values (i.e., re-map them to \[0, 255\])