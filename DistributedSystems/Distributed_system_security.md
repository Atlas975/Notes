> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 25/10/2023 - 14:37
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distributed system security
- [[Distributed_systems|Distributed systems]] feature numerous potential avenues for exploitation, this requires the use of effective [[Security_principles|security policy]] to describe what actions are allowed within a system
- Once a security policy has been implemented, it becomes possible to concentrate on enforcing the required [[Cryptography#Cryptography functions|security mechanisms]]


## Common distributed system threats
-  **Eavesdropping:** unauthorised interception of private communication.
-  **Tampering:** modifying data in transit
-  **Masquerading:** impersonating another user or device to gain unauthorised access.
-  **Replaying:** re-transmitting valid data repeatedly to disrupt operations \/ duplicate transactions 
- **Non-Repudiation:** users must not be able to deny the authenticity of their document signature 

### Auditing
- Involves the analysis of security breaches, this is another useful security mechanism to have 
- This allows security policies to be revised in the future to prevent similar attacks 


## Authentication using secret keys
- Makes use of [[Symmetric_encryption|symmetric encryption]] using the following procedure:
	1. Alice (client) sends request to setup communication 
	2. Bob (server) sends a challenge nonce 
	3. Alice encrypts and sends the challenge using shared secret key, proving identity
	4. Alice sends a challenge nonce 
	5. Bob encrypts Alice's challenge and sends, completing authentication 

![[Pasted image 20240508125737.png|300|300]]


### Reflection attack
- This 5 step handshake is needed to avoid a reflection attack where an attacker tricks a legitimate user or system into unwittingly responding to its own requests
- For example, this 3 step handshake is vulnerable to reflection attacks. This cannot be done with symmetric encryption but it can be done using [[Asymmetric_encryption|asymmetric encryption]]

![[Pasted image 20240508131838.png|350|350]]

- This type of network attack has a malicious actor send requests to a legitimate service using a forged sender address, causing the service to send the response to the victim's address instead
## Security in Layers
- **Network Layer:** Could involve encryption at routers.
- **Transport Layer:** Uses protocols like SSL/TLS to secure communication.
- **Middleware / application Layers:** security measures tailored to specific applications / data
