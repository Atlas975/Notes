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
P2P systems are decentralized networks where each node acts both as a client and a server, contributing to and consuming resources within the network.

- **Self-scalable Property:** The network's capacity expands with the addition of each node, potentially increasing the overall system's robustness and resource availability.
- **Challenges:** P2P systems must manage churn (nodes frequently joining and leaving), network divergence, and the risk of selfish users who consume more resources than they provide.

### Distributed Hash Tables (DHT)

DHTs are a type of structured P2P network that store key-value pairs across a distributed network of nodes. They support basic operations like `put(key, value)` and `get(key)`.

- **Chord Protocol:** An example of a DHT that organizes nodes in a ring-like structure, ensuring data is stored and retrieved efficiently.
- **Operation:** Nodes are assigned a segment of the hash table based on their hash value, and they store key-value pairs that fall within their segment.