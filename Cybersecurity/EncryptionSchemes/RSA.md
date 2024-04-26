> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/EncryptionSchemes
> **Created:** 26/04/2024 - 16:15
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# RSA


## RSA functionality 
- Works based on the principle that while it's easy to multiply two large prime numbers, it's very difficult to factor their product, especially as the size of the numbers increases.