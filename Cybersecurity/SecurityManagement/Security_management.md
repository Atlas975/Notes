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
# Security management



## Information security
- Involves the protection of confidentiality, integrity and availability of information assets weather through storage, processing or transmission
- This security is carried out through the application of policy, SETA (security education, training and awareness) and technology



## Safety vs security
- **Security** concerns the protection of an entity against intentional  / malicious attacks
- **Safety** concerns protection of an entity caused by accidental events
- A system can be safe but not secure eg:
	- A website that only displays information is safe, but not secure if it uses [[Hypertext_transfer_protocol|HTTP]] instead of [[Hypertext_transfer_protocol#HTTPS|HTTPS]] meaning a users connection isn't encrypted 
	- An unlocked house is safe from the dangers of fire or collapse, but it's not secure because it lacks protection from intruders
