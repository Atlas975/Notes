---
aliases:
  - AES
---

> [!important]- Metadata
> **Tags:** #Security
> **Located:** Cybersecurity
> **Created:** 27/02/2024 - 18:36
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Advanced encryption standard




- **Confusion**: each bit in the ciphertext depends on many bits in the key
- **Diffusion**: spread out statistical structure by spreading out data evenly (avalanche effect)



## AES counter mode 
- Ensures that identical plaintext input blocks wont result in the same ciphertext 
- This is done by using a unique counter value each block

![[Pasted image 20240331223419.png|450|450]]