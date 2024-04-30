> [!important]- Metadata
> **Tags:** #RiskManagement 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 30/04/2024 - 20:19
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Cyber threat analysis
- The process of threat assessment, this is needed to inform the [[Risk_management|risk management]] process to identify likely threat culprits 
- A threat actor can be either malicious or accidental and has the opportunity to exploit potential [[Vulnerability_analysis|vulnerabilities]] in a system

## Time analysis 
- Cyber threats can be challenging to prepare for due to having an unobservable build up and a lower threshold to initiate than physical attacks
- The flexibility of being able to attack from any location without having to move physical resources can also make planning against these attacks difficult
- Overall, the short timescale to deploy attacks means that preparation must be done beforehand 


## Intelligence creation

![[Pasted image 20240430205356.png|300|300]]
![[Pasted image 20240430205553.png|300|300]]


## Data sources 
- Data sources are required for 
- 
![[Pasted image 20240430205811.png|300|300]]