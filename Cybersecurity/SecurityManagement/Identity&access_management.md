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
- The core goal of this is to strike a balance between the usability and security of a system. This is especially important to consider with lengthier multi-factor authentication  


![[Pasted image 20251028215600.png|350|350]]

- 

## IAM principles
- 
- **Authentication**: verifies that a user is who they say they are, an entity can have multiple identities 
- **Authorisation**: gives a user their legitimate access rights and resources 
- **Accounting**: ensures user activity can be traced back to them for diagnostic purposes 
