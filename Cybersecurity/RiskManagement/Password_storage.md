> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 25/04/2024 - 15:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Password storage
- Multiple possible 


## Salt 