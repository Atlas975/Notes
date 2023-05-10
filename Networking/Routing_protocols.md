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
	- **Lowest cost** (high bandwidth / min delay)
- [[Network_topology|Network topology]] follows a [[Graphs|graph]] style model with nodes as routers/subnets, edges as links and the cost as delay/congestion etc 
- Routers periodically exchange reachability info with neighbours 

![[Pasted image 20230510000815.png|400|400]]
- Routers initially only aware of cost to reach local neighbours 
- The path is the sequence of routers packets traverse from src host to dst host 

### Routing algorithm classification
- **Centralised**: all routers have complete [[Network_topology|toplogy]] ([[Link_state_routing|Link state routing]])
- **Decentralised:** iterative compute involving exchanging info with neighbours ([[Distance_vector_routing#Distance vector routing|Distance vector routing]])
## Router control planes
### Pre-router control plane
- Controller for routing algorithms present in all routers, work together to form routing tables 

![[Pasted image 20230510001829.png|350|350]]

### Logically centralised control plane
- Distinct remote controller interacts with the local control agents (CA) in routers to form routing tables for the network to work with 


![[Pasted image 20230510001944.png|350|350]]
## Output port functions
- **Buffering**: when datagrams arrive faster than outgoing transmission rate 
- **Scheduling discipline**: chooses among queued datagrams for next transmit 

![[Pasted image 20230510000708.png|450|450]]

## Destination-based forwarding (CIDR)
- Uses longest prefix matching, the reasoning behind this is that this provides the most specific address possible. Longest matching prefixes are always ideal  
- In the following case dest 2 is chosen for being the min subnet mask that matches:

![[Pasted image 20230510001407.png|450|450]]


## Routing protocol scale 
- All destinations cannot be stored in routing tables, network admins may also want individual routing control within their networks giving administrative autonomy for distinct autonomous systems (**AS**) 

### Intra-AS  / interior gateway protocol (IGP)
- Route within same network (inter-domain)
- Links between gateway router edges between AS'es

### Inter-AS  / exterior gateway protocol (EGP)
- Route between different autonomous systems 
- Routing protocols are under the control of multiple network administrators,


## OSPF

-   OSPF (Open Shortest Path First) is a link-state routing protocol used in computer networks to determine the best path for forwarding packets of data from one network node to another.
-   OSPF uses a hierarchical network design with areas, allowing for efficient use of network resources and easier network management.
-   OSPF supports multiple paths to a destination and can quickly adapt to changes in the network topology.

## BGP

-   BGP (Border Gateway Protocol) is an interdomain routing protocol used in the internet to exchange routing information between different autonomous systems (AS).
-   BGP uses a path vector algorithm to select the best path for forwarding packets across different AS.
-   BGP allows for policy-based routing, which gives network administrators more control over how traffic flows across different networks. Largest based on **business relationships**

![[Pasted image 20230510015246.png|450|450]]


## Hot potato routing 

![[Pasted image 20230510015637.png|450|450]]