> [!important]- Metadata
> **Tags:** #Cybersecurity #Economics 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 28/04/2024 - 22:36
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Security economics
- The study of the economic principles that drive security, vital in understanding the incentives that drive the creation of good security design and policy 
- The main question that arises in this involves asking who should bear the cost of security


## Public good
- A good that has two key characteristics:
	- **Non-rivalrous**: consumption by one entity does not reduce the good's availability 
	- **Non-excludible**: difficult or impossible to prevent people from using the good

