> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Application architecture
-  Refers to the way in which software applications are designed to communicate and exchange data over a [[Network_architecture|network]]
- This includes the protocols, interfaces, and software components that allow applications to interact with each other across a network.
- Architectures use for an application may also be heterogeneous, example with Napster which used centralised discovery but decentralised file transfer:

## Client-server architecture
- A model of network communication where one computer (client) requests services or resources from another computer (server). 
- The server acts as an always-on host with a permanent IP address
- Clients may have dynamic IP address and do not communicate directly with each other.
- Clients may still have an intermediate connection to a server, servers can also make use of data centres for scaling. This model closely resembles [[Network_topology#Star topology|Star topology]]

![[Pasted image 20230318153513.png|300|300]]

- Offers centralised control making, easy scaling and specialised services, eg a [[Database_systems|database]] may be a challenge for clients to implement 
## P2P Architecture
-  A model of network communication where computers communicate directly with each other, without the need for a centralised server.
- No server that's constantly on, end hosts are able to communicate directly 
- Each device can act as both a client and a server, and can request or provide resources to other devices in the network.
- Complex to manage as peer IP addresses can change routinely

![[Pasted image 20230318154122.png|200|200]]
- Offers cheap self-scalability for new device demands as peers bring new service capacity. This makes the architecture highly flexible and resilient due to decentralisation 

## Application architecture case studies 
### Napster
- Example of heterogeneous application architecture 
- Used centralised discovery but decentralised file transfer:
 
 ![[Pasted image 20230318171002.png|250|250]]
  ### Gnutella
- Full decentralised with no central bottleneck
- Suffers from potentially long search times and prone to free loading (participants who benefit from the network's resources without contributing to the network's operation or maintenance)

  ![[Pasted image 20230318171912.png|400|400]]
  
 