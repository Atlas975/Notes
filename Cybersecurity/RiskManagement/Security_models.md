> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 27/04/2024 - 17:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Security models
- Security models are used to enforce [[Access_controls|access control]] within computer systems
- Each model addresses different security concerns regarding confidentiality and integrity
## Bell-LaPadula model
- Focuses on **confidentiality** and is suitable for environments where the primary concern is the unauthorised disclosure of information
- Ensures that information flows in a controlled manner, generally preventing information from flowing from higher classified levels to lower ones
-  Uses a set of access control rules based on security labels (classification levels) assigned to both subjects and objects
### Key properties
- **No read-up**: A subject may not read data at a higher security level 
- **No write-down**: : A subject may not write (but can read) to data at a lower security level
## Biba model 
- Focuses on **integrity** and is ideal for environments where data corruption poses a risk
- Ensures that data remains accurate and uncorrupted by preventing improper data modification and ensuring that higher integrity levels are not influenced by lower ones.

### Key properties 
- **No write-up**:  subject may not write (but can read) data to a higher integrity level 
- **No read-down** subject may not read data from a lower integrity level 