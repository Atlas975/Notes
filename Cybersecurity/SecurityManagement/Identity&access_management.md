---
alias: IAM
---
> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/SecurityManagement
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Identity & access management
- Strong IAM polices are meant to prevent unwanted access to a system, also helping with regulatory compliance and the reduction of human error on a system 
- The core goal of this is to strike a balance between the usability and security of a system 