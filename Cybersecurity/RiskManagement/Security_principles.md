> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 23/04/2024 - 17:07
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Security principles
- Helps achieve [[Cryptography#Cryptosystem goals|information security goals]]
- These take into account the entire security systems and it's users 
## Simplicity
- Keep the design as small and simple as possible 
- Easy to maintain and review for vulnerabilities 
## Open design
- The design should not be secret 
- Secrets can be hard to protect so these should not be relied on for security
## Compartmentalisation
- Organise resources into isolated groups based on similar needs 
- Access should be limited based on tasks and needs (eg [[OOP_principles|OOP]])
## Least privilege
- Every program / user should operate on the least amount of privilege necessary 
- Privileges should be reduced to a minimum to avoid unnecessary risk
## Trust and trustworthiness
- Trust has to be minimised
- Trustworthiness has to be maximised 
## Fail-safe defaults
- System should start and return to a secure default state in the event of failure 
- A security system should always be active on system startup 
## Complete mediation
- Every object access must be checked for authority 
- This requires object access be monitored with control mechanisms being unbypassable 

## No single point of failure 
- Build redundant security mechanism, security should not rely on a single mechanism 
- Prevents single points of failure AKA defence in depth
## Usability 
- Security mechanisms should be easy to use for both users and developers
- Mechanisms should always be designed with these end users in mind

## Attacks and controls 
- An attack on a system involves the exploitation of a vulnerability 
- Controls are protective measures designed to contain a vulnerability 