> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems/DistributedLedgers
> **Created:** 16/04/2024 - 17:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Blockchain
- A growing list of records / blocks, with each block linked to the previous one via a cryptographic [[Hashing|hash]] function. This is an append-only [[Distributed_ledger|ledger]]
- This use of linking via hash makes the technology highly resistant to tampering 

![[Pasted image 20240416173625.png|450|450]]