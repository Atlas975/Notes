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
- The exchange of the public keys is done over an insecure channel and the keys themselves can be intercepted. The shared secret can't be found without either party's private keys

### Agree on Numbers
- **Initial Setup**: Both parties agree on two numbers publicly. These are:
    - **Base (g)**: A small prime number.
    - **Modulus (p)**: A large prime number. 
- These numbers can be known by anyone and can be reused in multiple sessions.
### Generate Private Keys

- Each party secretly selects a private number.
    - **Alice** chooses a private key **a**.
    - **Bob** chooses a private key **b**. 
- These numbers are kept secret and never shared
### Compute Public Values
- Each party computes a public value to share with the other party.
    - **Alice** calculates public value **A** using $A=g^{a}\mod {p}$ 
    - **Bob** calculates his public value **B** using $B=g^{b}\mod {p}$
- These computed values are sent over the insecure channel.
### Compute the Shared Secret
- Each computes shared secret using the received public value and their own private key.
    - **Alice** receives **B**, and computes the secret $S=B^{a}\mod {p}$
    - **Bob** receives **A**, computes the secret $S=A^b\mod {p}$
- Due to the properties of modular arithmetic, both calculations will result in the same value **S**.
- The shared secret **S** can now be used by both parties as the key for symmetric encryption