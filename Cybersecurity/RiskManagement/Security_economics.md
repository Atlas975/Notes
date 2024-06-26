> [!important]- Metadata
> **Tags:** #Cybersecurity #Economics 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 28/04/2024 - 22:36
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Security economics
- The study of the economic principles that drive security design and policy, driven by incentives 
- This can often lead to suboptimal outcomes due to misaligned stakeholder goals
- Security often fails as it's guards don't suffer a point of failure, risks are dumped on others
## Public good
- A good that has two key characteristics:
	- **Non-rivalrous**: consumption by one entity does not reduce the good's availability 
	- **Non-excludible**: difficult or impossible to prevent people from using the good
- These can strong externalities in the context of security, where one malicious system on the [[Internet_architecture|internet]] can inflict a cost on everyone using it
- This makes [[Network_security|network security]] a shared interest akin to avoiding air pollution. On a smaller scale internet providers may be responsible but on a larger scale this may fall under national security

## Marginal cost incentive
- Information has a high fixed cost and a marginal cost of 0, this is what result's in so much free information being readily available. This leaves no opportunity to undercut competitors 
- With software, technical lock in becomes a valuable incentive, where the cost of switching to free software is higher than the cost of a paid software licence  

## Information asymmetry
- The phenomena where low quality products drive out high quality ones due to buyers not being able to tell the difference. This leads to cheap low-quality products dominating the market 
- This often applies to security with poor security products racing to the bottom in price 
## System reliability
- System reliability can stem from any of the 3 following categories:
	- **Total effort**: reliability depends on the sum of effort exerted 
	- **Weakest link**: reliability depends on the minimum effort
	- **Best shot**: reliability depends on the maximum effort
- Total effort cases typically have the best reliability as there is an incentive for all individuals to make a high quality contribution
### Free-rider problem
- Since individual efforts in cybersecurity benefit everyone, temptation is created for stakeholders to underinvest in their own cybersecurity measures 
- This can lead to overall weaker security across the system as stakeholders do not take the appropriate cybersecurity measures 

## Digital rights management 
- DRM is a set of access control technologies used by publishers, manufacturers, and copyright holders to restrict the use of digital content 
- Designed to prevent unauthorised distribution, also allows for usage tracking. However, heavy handed DRM measures can largely be seen as anti-consumer