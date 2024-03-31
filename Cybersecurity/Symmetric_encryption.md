> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 31/03/2024 - 19:37
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Symmetric encryption
- Uses the same or easily computable keys for encryption and decryption
- Requires $\frac{N(N-1)}{2}$ keys between $N$ parties, making this costly to scale





![[Pasted image 20240331193809.png|350|350]]


## Block-based ciphers
- Encrypts block of information sequentially 
- Stronger than stream based but slower 
- Relies on two properties 
	- **Confusion**: key cannot be determined from ciphertext 
	- **Diffusion**: should demonstrate the avalanche effect, modifying even a small amount of the input data should result in a significant change to the output


## Stream-based ciphers 
- 