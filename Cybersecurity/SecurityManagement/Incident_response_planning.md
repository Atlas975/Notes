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


## Contingency planning
- A [[Risk_management|risk management]] process meant to deal with a disaster after it has occurred, consists of:
- **Incident response planning (IRP)**: focuses on immediate response
- **Disaster recovery planning (DRP)**: focuses on restoring a system after a disaster has occurred 
- **Business continuity planning (BCP)**: done concurrently with DRP if major / long-term damage occurs
## IRP phases
- Acts as a documented strategy that outlines how an organisation will respond to various security incidents. This helps in mitigating the impact of a breach
- Attacks are classified as incidents if:
    - Are directed against information assets 
    - Have a realistic chance of success 
    - Could threaten the [[Security_management#Information security|CIA]] aspects of an information resource 

![[Pasted image 20251031153840.png|450|450]]

### Plan and prepare
- Involves establishing an incident response team (IRT) and defining
### Detect and report

### Assess & decide

### Response


### Lesson learnt
