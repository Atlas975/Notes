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
- Involves establishing an incident response team (IRT) and updating / testing security policies
- This also involves forming a relationship with internal / external organisations involved in an event
### Detect and report
- Involves detecting events, collecting info and reporting on them via manual or automatic means
- This comprises of the logging protocols needed to troubleshoot an issue from internal / external sources
### Assess & decide
- Involves event info assessment (eg verifying its true) and the decision on if to classify it as an incident
- This also requires providing the formal procedures for each notified person to follow
### Response
- The immediate actions taken including the distribution of responsibility depending on incident severity
- Also involves potential escalation after a review by the IRT team to see if things are under control
### Lesson learnt
- Involves the reviewing, identifying and improvements made to a system in response to the incident
- These are aided by metrics that are fed into a strategy on where to invest in information security controls
## NIST incident response 
- The NIST provides 6 model functions which organisations are advised to implement 
- Response time is important for damage prevention; hence why it is best to formulate certain incident response plan steps.