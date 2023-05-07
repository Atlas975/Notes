---
aliases: network layer
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 19/03/2023 - 12:33
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Routing protocols
- The [[Protocol_stack#Network layer|network layer]] and by extension routers are responsible for the following functionality:
	- **Forwarding**: move packets from routers input to appropriate router output 
	- **Routing**: determine route taken by packets from src to dst

![[Pasted image 20230507135259.png|450|450]]


## Routing algorithms
- Responsible for determining ideal path through a network based on 
	- **Shortest distance**
	- **Load balancing**
	- **Lowest cost**
- [[Network_topology|Network topology]] follows a [[Graphs|graph]] style model with nodes as routers/subnets, edges as links and the cost as delay/congestion etc 
- Routers periodically exchange reachability info with neighbours 