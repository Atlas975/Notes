---
aliases: [data-link layer]
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 10/05/2023 - 01:07
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Link layer
- The layer-2 protocol) implemented nodes in a [[Network_architecture|network]]:
	- **Nodes**: hosts and routers
	- **Links**: communication channels that connect adjacent nodes 
	- **Frame**: a layer-2 packet that encapsulates a [[Internet_protocol|datagram]] 
- Many different link layer protocols underlying an end-to-end route through the internet, most of which are LAN based and employ [[Transmission_mediums|broadcast media]]. Not all of these provide [[Reliable_data_transfer|RDT]]
- Ethernet frame struct

![[Pasted image 20230510112900.png|450|450]]

- The preamble is an 8 byte pattern used to sync recv and sender clock rates 
- The link layer itself is implemented in the network interface car (**NIC**)

![[Pasted image 20230510113316.png|300|300]]
## Carrier sense multiple access (CSMA)
- Listen before transmit 
	- **If channel sensed idle**: transmit entire frame 
	- **If channel sensed bust**: defer transmission 
- Collision detection (**CD**) is easy to detect in wired LANs, difficult in wireless
## Link types
- **Point-to-point**: link between [[Transmission_mediums#Ethernet|Ethernet]] switch and host 
- **Broadcast**: shared wire of medium 
