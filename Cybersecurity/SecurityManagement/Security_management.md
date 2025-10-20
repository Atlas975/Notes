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
- The discipline focused on protecting an organisation's assets (ie: people, facilities, technology, and data) through risk assessment, policy development, and implementation of security controls
- This also requires monitoring and evaluating the effectiveness of implemented control and procedures 
- The coordinated activities used to implement the suitable controls and treat information security risks are known as the elements of ==information security management==
## NIST Cyber security framework
- A structured set of guidelines designed to help organisations manage and reduce cybersecurity risks
- This framework is meant to provide the best practices to help an organisation build resilient cybersecurity programs by addressing threats from identification to recovery

![[Pasted image 20251002205922.png|450|450]]



## National cyber security centre framework 

![[Pasted image 20251002210908.png|500|500]]
## Information security
- Involves the protection of confidentiality, integrity and availability of information assets weather through storage, processing or transmission
- This security is carried out through the application of policy, SETA (security education, training and awareness) and technology

![[Pasted image 20251002212833.png|250|250]]

- Some example of what different attacks effect:
    - DDOS attacks impact the availability of data 
    - Insider attacks impact confidentiality of data 
    - System errors may impact the integrity of data 

![[Pasted image 20251021000325.png|450|450]]
## Safety vs security
- **Security** typically concerns the protection of an entity against intentional  / malicious attacks
- Passwords are an example of a function that may be insecure but unintentionally so 
- **Safety** concerns protection of an entity caused by accidental events
- A system can be safe but not secure eg:
	- A website that only displays information is safe, but not secure if it uses [[Hypertext_transfer_protocol|HTTP]] instead of [[Hypertext_transfer_protocol#HTTPS|HTTPS]] meaning a users connection isn't encrypted 
	- An unlocked house is safe from the dangers of fire or collapse, but it's not secure because it lacks protection from intruders

## Impact categories 
- Impacts affect the organisation in different ways depending on origin 
    - **Primary / Immediate impacts**: result of an event itself (eg data comprise)
    - **Secondary / future impacts**: result of responding / recovering from an event
- Secondary impacts may also include outside effects like legal consequences to a response
- Impacts may also fall into 4 types: ==Operational, Financial, Legal / Regulatory or Reputational==