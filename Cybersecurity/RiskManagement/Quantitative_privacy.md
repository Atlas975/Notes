> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 25/04/2024 - 13:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Quantitative privacy
- Involves using numerical methods to measure and ensure individual privacy in datasets
- Focuses on [[Risk_management|risk assessment]] and the application of privacy-preserving techniques to balance the utility of data with the need to protect individual identities

![[Pasted image 20240429131841.png|350|350]]
## K-anonymity
- Handles privacy with equivalence classes, these are sets of records with the same non-sensitive attributes. Each of these classes must have at least k individuals
- Techniques:
	- **Suppression**: Hiding information by replacing it with asterisks or other placeholders.
	- **Generalisation**: replace non-sensitive attribute wi
- This can still lead to linkage attacks 

![[Pasted image 20240429131923.png|400|400]]
