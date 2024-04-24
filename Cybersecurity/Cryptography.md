> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 30/03/2024 - 22:45
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Cryptography
- The study of mathematical techniques related to aspects of information security.
- Provides confidentiality, data integrity, authentication, authorisation, and non-repudiation

## Cryptosystem Components
- A cryptosystem is a five-tuple (P, C, K, E, D), where P is plain texts, C is cipher texts, K is key space, E is encryption function, and D is decryption function
- Central to security, based on **Kerckhoff’s principle** (should be secure even if everything about the system except the key is public knowledge)

$$E_{k}:P\to C,k\in K$$
$$D_{k}:C\to P,k\in K$$

### Cryptographic key 
- Used as an input to a cryptographic function
- The security of the cryptosystem is based on the key secret

## Cryptosystem goals 
- **Confidentiality**: ensure only authorised users have information access 
- **Integrity**: safeguarding the accuracy and completeness of information 
- **Availability**: ensure authorised users are able to access information 

![[Pasted image 20240423170256.png|350|350]]


## One-time Pad
- Uses XOR operation between message stream and key-stream
- Considered unbreakable if used correctly (one time use, secure distribution, random)

```
Message stream:    1001010111 
Keystream:         0011101010 
Ciphertext stream: 1010111101
```

