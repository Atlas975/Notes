> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 24/04/2024 - 15:29
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Keys
- A digital string of data used within cryptographic algorithms to encrypt and decrypt information, ensuring that only authorised users can access or modify it.
- Keys transform readable data (plaintext) into a scrambled format (ciphertext)


![[Pasted image 20240424151954.png|400|400]]

## Key types 
- Cryptographic keys come in two main types, symmetric and asymmetric, each serving distinct purposes in the realm of digital security and data encryption
- The type of key system used depends on needs with symmetric keys generally being faster but less secure than their asymmetric counterparts 

### Symmetric 
- **Use**: The same key is used for both encrypting and decrypting data.
- **Security Requirement**: key must be kept secret between communicating parties 

![[Pasted image 20240331193809.png|350|350]]

### Asymmetric 
- **Use**: two unique but related keys used. Private key to encrypt, Public key to decrypt
- **Public Key**: known to everyone and can be freely distributed.
- **Private Key**: kept secret by the owner and used for decryption.

![[Pasted image 20240423151949.png|350|350]]

## Usage 
- **Data Encryption**: Protecting data at rest (eg on hard drives) and in transit 
- **Digital Signatures**: Ensuring the authenticity and integrity of messages and documents.
- **Secure Communications**: Enabling confidential / authentic communication channels (eg HTTP)

## One-time Pad
- Uses XOR operation between message stream and key-stream
- Considered unbreakable if used correctly (one time use, secure distribution, random)

```
Message stream:    1001010111 
Keystream:         0011101010 
Ciphertext stream: 1010111101
```