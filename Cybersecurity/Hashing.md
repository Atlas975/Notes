> [!important]- Metadata
> **Tags:** #Cybersecurity
> **Located:** Cybersecurity
> **Created:** 31/03/2024 - 00:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Hashing
- A one-way deterministic function that converts an input into a fixed-size character string
- The strength of a hash function often relies on NP hard problems such as prime factorisation
## Hash function requirements
- **Compression**: should reduce the size of input data 
- **Efficiency**: should be fast to apply
- **One-way**: infeasible to find x from y: h(x) = y
- **Weak collision resistance**: should be hard to find two inputs with same hash
- **Strong collision resistance**: should be hard to find two identical hashes
## Hashed output attacks
- **Cipher-only**: obtained output from several messages using the same encryption
- **Known-plaintext**: has input, output pair of one or more messages (==rainbow tables==)
- **Chosen-plaintext**: has control over what inputs gets encrypted 
- **Chosen-ciphertext**: has control over what outputs get decrypted
- **Differential cryptanalysis**: look at statistical differences in encrypted inputs
- **Side-channel**: gather outside information (eg clock speed)
- **Social engineering**: non-technical, carried out on people
## Collision-resistance properties
- Confusion and diffusion are used synergistically to enhance hash algorithm security
- This includes resistance to:
	- Preimage attacks (finding an input corresponding to a specific hash)
	- Second preimage attacks (finding an input with the same hash as another input)
	- Collision attacks (finding two different inputs that produce the same hash).
- This is quantified by the number of bits changed after a small input modification

![[Pasted image 20240424150500.png|350|350]]
### Confusion / avalanche effect
- Requires that the output hash be highly sensitive to input data in a non-predictable fashion
- This is achieved through mathematical functions that ensure the relationship between the input and output is non-linear
### Diffusion
- Requires that the output hash values are uniformly distributed over the output space so that changes to the input data (even minor ones) spread to affect many bits in the output hash
- This is crucial for minimising collisions using inputs similar to each other


### Obfuscation
- The practice of making a cryptographic algorithm or its implementation intentionally complex and difficult to understand. This makes it more difficult to decipher how an algorithm works
- Can involve altering code structure, using confusing variable names, or implementing complex execution paths that make reverse engineering challenging for attackers