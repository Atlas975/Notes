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
- Uses the same or easily computable [[Keys#Symmetric|key]] for encryption and decryption
- Requires $\frac{N(N-1)}{2}$ keys between $N$ parties, making this costly to scale
- Also requires secure key exchange making key management a challenge. 


![[Pasted image 20240331193809.png|350|350]]

$$\color{#8DB600}e \text{ goes public}\color{white}$$
$$\color{#8DB600}d \text{ goes public}\color{white}$$
## Block-based ciphers
- Encrypts block of information sequentially (eg [[Advanced_encryption_standard|AES]])
- Stronger than stream based but slower 
## Stream-based ciphers
- Works one bit at a time, mixing plaintext with key-stream
- Good for real-time services, this method is fast and easy to implement
- Less secure than block ciphers 
