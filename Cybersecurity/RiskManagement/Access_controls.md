> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 24/04/2024 - 17:15
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Access controls
- Set of security features that control how users and systems interact
- Helps enforce [[Security_principles|security principles]] by prevent unauthorised access
- Level of authorisation is determined after successful authentication

![[Pasted image 20240425151529.png|250|250]]
## Access control components 
- **Access**: flow of information between subject and an object 
- **Subjects**: active entities that requests access to an object or it's data 
- **Objects**:  passive entities that contain information