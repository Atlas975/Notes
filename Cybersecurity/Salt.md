> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 25/04/2024 - 15:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Salt
- A random piece of data added to a user's input, typically a password, before it's hashed
- 
- 

![[Pasted image 20240425154354.png|450|450]]