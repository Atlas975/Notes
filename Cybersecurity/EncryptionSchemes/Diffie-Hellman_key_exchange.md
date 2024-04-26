> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/EncryptionSchemes
> **Created:** 26/04/2024 - 17:24
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Diffie-Hellman key exchange
- A method used to securely exchange [[Cryptography|cryptographic]] [[Keys|keys]] over a public channel
- This allows two parties to share a secret key that can then be used for subsequent encryption of messages, often with a [[Symmetric_encryption|symmetric]] key algorithm.

![[Pasted image 20240426173621.png|250|250]]

## Diffie-Hellman functionality 
- The security of this method relies on the difficult of the discrete logarithm problem (DLP) which is to compute the exponent $x$ given the values of $(g^{x}\mod {p})$
- The k