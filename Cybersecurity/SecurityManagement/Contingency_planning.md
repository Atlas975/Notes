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
# Contingency planning
- If [[Risk_management|risk management]] is about identifying risk and [[Incident_response_planning|incident response planning]] is about reacting to system attacks, than contingency planning is about the strategies used to deal with future incidents 
- The respond and recover aspects of [[Incident_response_planning#NIST incident response|NIST]] tie into this, making sure a specific incident cannot cripple an organisation again in the future 