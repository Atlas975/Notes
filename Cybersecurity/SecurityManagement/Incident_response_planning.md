---
alias: IRP
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
# Incident response planning
- Strong IRP polices are meant to prepare for what happens when a system is comprised, this can be taught of as a reactive security system while [[Identity&access_management|IAM]] acts as a proactive system
- Developing these predefined responses enables an organisation to react quickly to a detected incident. This may also require an incident response team (IRT)

![[Pasted image 20251031153840.png|450|450]]

