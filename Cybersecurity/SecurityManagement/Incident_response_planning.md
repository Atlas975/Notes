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
- Strong IRP polices are meant to prepare for what happens when a system is comprised, this can be taught of as a reactive security system while [[Access_controls|IAM]] acts as a proactive system
- Developing these predefined responses enables an organisation to react quickly to a detected incident. This may also require an incident response team (IRT)


![[Pasted image 20251104174005.png|450|450]]



- **Disaster recovery planning (DRP)**
- **Business continuity planning (BCP)**: occurs concurrently with the DRP when the damage is major or long term
## IRP phases
![[Pasted image 20251031153840.png|450|450]]

### Plan and prepare

### Detect and report

### Assess & decide

### Response


### Lesson learnt
