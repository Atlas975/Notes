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
- The study of the economic principles that drive security design and policy, driven by incentives 
- This can often lead to suboptimal outcomes due to misaligned stakeholder goals


## Public good
- A good that has two key characteristics:
	- **Non-rivalrous**: consumption by one entity does not reduce the good's availability 
	- **Non-excludible**: difficult or impossible to prevent people from using the good
- These can strong externalities in the context of security, where one malicious system on the [[Internet_architecture|internet]] can inflict a cost on everyone using it
- This makes [[Network_security|network security]] a shared interest akin to avoiding air pollution. On a smaller scale internet providers may be responsible but on a larger scale this may fall under national security
