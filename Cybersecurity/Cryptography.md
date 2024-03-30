> [!important]- Metadata
> **Tags:** #Cr
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
- Central to security, based on Kerckhoff’s principle (security depends on the key's secrecy)

$$E_{k}:P\to C,k\in K$$
$$D_{k}:C\to P,k\in K$$