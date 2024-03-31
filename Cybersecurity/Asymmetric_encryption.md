> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 31/03/2024 - 22:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Asymmetric encryption
- Anyone can use the public key to encrypt, but only the private key owner can decrypt
- This has the benefit of not requiring secure key exchange, but is often slow to encrypt 