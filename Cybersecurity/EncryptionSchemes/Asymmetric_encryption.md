> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 31/03/2024 - 22:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Asymmetric encryption
- Uses different but related [[Keys#Asymmetric|keys]] for encryption and decryption
- Anyone can use the public key to encrypt, but only the private key owner can decrypt. This is useful for secure communication where only one party needs to be able to encrypt 
- This has the benefit of not requiring secure key exchange, but is often slow to encrypt 


![[Pasted image 20240423151949.png|450|450]]


$$\color{#8DB600}e \text{ goes public}\color{white}$$
$$\color{#FF033E}d \text{ kept as a secret}\color{white}$$