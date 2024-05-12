---
aliases:
  - P2P
---

> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Peer to peer systems
- Decentralised networks where each node acts both as a client and a server, contributing to and consuming resources within the network. Unlike client-server, this has a self-scalable property 
- P2P systems must manage churn (nodes frequently joining and leaving), network divergence, and the risk of freeloading users. However, this is able to avoid the need of always on servers


## P2P Code
- These systems interact with nodes identical to itself with the same code
- This can introduce a programming challenge similar to [[Recursion|recursion]] as nodes need to be able to call other instances of itseld
### Distributed Hash Tables (DHT)

DHTs are a type of structured P2P network that store key-value pairs across a distributed network of nodes. They support basic operations like `put(key, value)` and `get(key)`.

- **Chord Protocol:** An example of a DHT that organizes nodes in a ring-like structure, ensuring data is stored and retrieved efficiently.
- **Operation:** Nodes are assigned a segment of the hash table based on their hash value, and they store key-value pairs that fall within their segment.
