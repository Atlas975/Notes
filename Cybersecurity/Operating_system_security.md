> [!important]- Metadata
> **Tags:** #Cybersecurity #OperatingSystems 
> **Located:** Cybersecurity
> **Created:** 27/04/2024 - 15:48
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Operating system security

