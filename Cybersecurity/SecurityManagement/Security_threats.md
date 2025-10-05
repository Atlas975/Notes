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
# Security threats
- A potential cause of an unwanted incident which can result in harm to a system or organisation
- Various frameworks exist to deal with the wide range of possible threats to a complex system

![[Pasted image 20251002214343.png|550|550]]
## Threat categories 
- Threats also fall into various categories especially in regards to information security 
- These can be both digital and physical. Human error is typically the cause of software threats

![[Pasted image 20251002214728.png|500|500]]


## Threat trees
- A single threat can also lead to sub-threats, this an be represented as an attack tree 
- An example of this is a compromised password leading to other key resources in an organisation being exposed to attacks as well


![[Pasted image 20251005113346.png|450|450]]
