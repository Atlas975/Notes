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
- A single threat can also lead to sub-threats (insider threats), this an be represented as an attack tree 
- An example of this is a compromised password leading to other key resources in an organisation being exposed to attacks as well


![[Pasted image 20251005113346.png|450|450]]

- Threat annotations can also be used to describe the metadata of a threat 
- These includes relevant information about a specific threat such as likelihood and danger

![[Pasted image 20251007202524.png|350|350]]

## Attack strategies
- There are multiple factors that are considered before an attack (attack attributes) such as the cost, time taken and the equipment needed to carry out the attack
- Attack strategies use these attributes to pick an attack method eg cheapest possible attack or attacks that require no special equipment

![[Pasted image 20251007203116.png|350|350]]


## Vulnerability types
- [[Vulnerability_analysis|Vulnerabilities]] describe the weaknesses or flaws within software / systems / processes or even human behaviours that can be exploited to disrupt operations
- Multiple vulnerability types exist:
	- **Personal**: inadequate recruitment, insufficient training etc  
	- **Site**: inadequate physical control (ie security), unstable power etc
	- **Organisation**: audits not conducted on a regular basis, event monitoring not implemented etc


![[Pasted image 20251007203837.png|550|550]]


- Multiple threats can also exploit the same vulnerability, these lead to the same impacts but highlight how important it is to consider every possible threat avenue 
- The opposite can also be true with a single threat exploiting multiple vulnerabilities:

![[Pasted image 20251007204354.png|450|450]]


 Chain of consequences 
- Used to visualise the possible impacts a single threat may lead to based on the actions taken by the attack after exploiting the initial vulnerability
- Creating effective security policies requires accounting for these possible sub-threats

![[Pasted image 20251007215617.png|450|450]]

## Risk assessment 




>$$\text{Threat}\cdot \text{Vulnerability}=\text{Impact}$$$$\text{Impact}\cdot \text{Likelihood}=\text{Risk}$$
