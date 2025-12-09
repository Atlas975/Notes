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
# Business continuity planning
- Outlines how a business can re-establish critical operations during a disaster that impacts operations at it's primary site. This is simpler than an [[Incident_response_planning|IRP]] or [[Disaster_recovery_planning|DRP]] 
- Consists of selecting a continuity strategy and integrating off-site data storage and recovery into it. In


![[Pasted image 20251209232757.png|550|550]]

## Continuity strategies 
- **Hot site**: fully ready-to-run facility, full duplicates of primary site services
- **Warm site**: may not have all equipment + updated backups, needs time to get up and running
- **Cold site**: bare-bone site that needs to be brought online from scratch


## Recovery time objective 
- Describes how long a system can afford to be offline before costs become overwhelming 
- 