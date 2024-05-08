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


### Encryption Techniques

**Cipher Block Chaining (CBC):** A mode of operation for block ciphers. It uses what was previously encrypted as input for the encryption of the next block.

### Authentication Protocols

**Challenges:**

- **Symmetric Key Authentication:** Vulnerable to replay attacks where a valid data transmission is maliciously or fraudulently repeated.
- **Public Key Authentication:** Utilizes public keys for encrypting messages that can only be decrypted by a corresponding private key, ensuring that messages are sent by the rightful owner of the private key.

### Public Key Infrastructure (PKI)

**Components:**

- **Certification Authority (CA):** Issues digital certificates to entities, verifying their identity.
- **Registration Authority (RA):** Verifies the identity of entities requesting digital certificates before they are approved by the CA.

### Security in Layers

- **Network Layer:** Could involve encryption at routers.
- **Transport Layer:** Uses protocols like SSL/TLS to secure communication.
- **Middleware and Application Layers:** Implement security measures tailored to specific applications and data handled.
