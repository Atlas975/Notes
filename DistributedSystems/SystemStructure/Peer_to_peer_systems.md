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
- P2P systems must manage churn (nodes frequently joining and leaving), [[Network_architecture|network]] divergence, and the risk of freeloading users. However, this is able to avoid the need of always on servers
## P2P Code
- These systems interact with nodes identical to itself with the same code
- This can introduce a programming challenge similar to [[Recursion|recursion]] as nodes need to be able to call other instances of itself. Making P2P code challenging to understand

## P2P Joining
- All P2P systems have to have well-known nodes that act as an entry point to the system to join
- Often implemented with a fixed server or an advertised list of common [[Internet_protocol|IPs]]
- More recent implementations of P2P entry may use [[Domain_name_server|DNS]] to obtain well known peers

![[Pasted image 20240512194411.png|450|450]]
## Distributed Hash Tables (DHT)
- DHTs are a type of structured P2P network that store key-value pairs across a distributed network of nodes. They support basic [[Hashing|hash]] operations like `put(key, value)` and `get(key)`.
- These efficiently manage large volumes of data across nodes, enhancing the system's resilience and reliability by avoiding single points of failure and performance bottlenecks

### Chord protocol
- A DHT that organises nodes in a ring-like structure, ensuring data is stored / retrieved efficiently.
- Each node maintains a [[Network_architecture|network]] connection to a successor (s) and predecessor (p) node in the DHT key space. The Chord [[Network_topology|topology]]  protocol takes care of placing these nodes


![[Pasted image 20240512223836.png|450|450]]

- Nodes are assigned a segment of the hash table based on their IP's hash value, and they store key-value pairs that fall within their range segment (predecessor ID : node ID)
- This scales poorly so finger tables are used as well, with each node also containing links to an exponentially increasing jump to another node. Time complexity goes from `n -> log(n)`

![[Pasted image 20240512224419.png|550|550]]
