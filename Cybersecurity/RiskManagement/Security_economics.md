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
- The study of the economic principles that drive security, this is vital to understand as good security requires good incentives to drive security design and policy 
- Explores how economic factors influence security decisions and policies