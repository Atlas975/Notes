> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/EncryptionSchemes
> **Created:** 26/04/2024 - 16:15
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# RSA
- An [[Asymmetric_encryption|asymmetric]] [[Cryptography|cryptography]] algorithm widely used for data transmission
- Plaintext is encrypted in blocks, with each block having a binary value less than $n$


## RSA functionality 
- Works based on the principle that while it's easy to multiply two large prime numbers $(p,q)$, it's very difficult to factor their product $(n)$, especially as the size of the numbers increases.
- This asymmetry between the ease of creating the public and private keys and the difficulty of reversing the process (without knowing the private key) forms the basis of RSA's security

```python
p = generate_large_prime()
q = generate_large_prime()
n = p * q
phi = (p - 1) * (q - 1)
e = find_coprime(phi) # public exponent
d = modular_inverse(e, phi) # private exponent
public_key = (e, n)
private_key = (d, n)
```

### Encryption 
- To encrypt a message $M$ (number smaller than $n$), compute ciphertext 𝐶 using the public key: 

$$C=M^{e}\mod n $$
### Decryption 
- To decrypt the ciphertext $C$ using the private key, compute the original message $M$:

$$M=C^d\mod n$$