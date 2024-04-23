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
- A hash function must provide 
	- **Compression**: should reduce the size of input data 
	- **Efficiency**: should be fast to apply
	- **One-way**: infeasible to find x from y: h(x) = y
	- **Weak collision resistance**: should be hard to find two inputs with same output 
	- **Strong collision resistance**: should be hard to find two identical hashes

## Cryptographic attacks
- **Cipher-only**: obtained output from several messages using the same encryption
- **Known-plaintext**: has input, output pair of one or more messages 
- **Chosen-plaintext**: has control over what input gets encrypted 
- **Chosen-ciphertext**: has control over what output get decrypted
- **Differential cryptanalysis**: look at statistical differences in encrypted inputs
- **Side-channel**: gather outside information (eg clock speed)
- **Social engineering**: non-technical, carried out on people


![[Pasted image 20240423160604.png|400|400]]