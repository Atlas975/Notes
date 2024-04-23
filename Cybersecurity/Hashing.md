> [!important]- Metadata
> **Tags:** #Cybersecurity
> **Located:** Cybersecurity
> **Created:** 31/03/2024 - 00:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Hashing
- A hash function must provide 
	- **Compression** 
	- **Efficiency**
	- **One-way**: infeasible to find x from y: h(x) = y
	- **Weak collision resistance**: should be difficult to find two preimages $(x_{1},x_{2}, x_{1}\neq x_{2})$ that have the same hash value $(h(x_{1})= h(x_{}))$
	- **Strong collision resistance**
