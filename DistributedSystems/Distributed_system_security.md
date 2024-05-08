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
- 
### Common distributed system threats
1. **Eavesdropping:** unauthorised interception of private communication.
2. **Tampering:** modifying data in transit
3. **Masquerading:** impersonating another user or device to gain unauthorised access.
4. **Replaying:** re-transmitting valid data repeatedly to disrupt operations \/ duplicate transactions.
5. **Non-Repudiation:** users must not be able to deny the authenticity of their document signature 

### Security Mechanisms

**Key Mechanisms:**

- **Encryption:** Used to maintain the confidentiality of messages.
- **Authentication:** Verifying the identity of a person or device.
- **Digital Signatures:** Providing a means to check the integrity and non-repudiation of a message.
- **Authorization:** Ensuring that only authorized users can access certain resources.
- **Auditing:** Monitoring and recording actions taken by users or automated systems.

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