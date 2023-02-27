---
aliases: network
---

> [!important]- Metadata
> **Tags:** #Networking #OperatingSystems 
> **Located:** Networking
> **Created:** 26/12/2022 - 03:57
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Network architecture
- A network transmission consists of:
	1. Message
	2. Sender
	3. Receiver
	4. Medium
	5. Protocol 

![[Pasted image 20211029231531.png|500|500]]

- Data operates on a range of frequencies (bandwidth) regardless of data type.
## Network header
- The starting section of a network packet that contains metadata about the packet, such as source and destination IP addresses, protocol, length, and control flags. 
- The header information is critical in allowing  networking devices to route a packet to its intended destination

![[Pasted image 20230209105228.png|450|450]]

## Network criteria
- Effective  communication over a network requires accounting for the following:
	- **Delivery**: data needs to arrive to correct device only
	- **Accuracy**: data loss shouldn't occur from distortion or noise.
	- **Timeliness**: data packets must arrive without significant delay or else they'll be dropped  
	- **Jitter**: The delay in packet arrival must be consistent.

## Bandwidth
- In bits per second, refers to the speed of bit transmission a medium can accommodate.
- In hertz, refers to the range of frequencies that a medium can allow to pass.
- Certain bit rates may be needed for accurate data transmission.

![[Pasted image 20230209131139.png|500|500]]

## Throughput
- How fast data can actually be transmitted, when factoring in [[Network_delay|congestion, interference etc]]
- Bandwidth is potential bit rate while throughput gives true measurement.
- Lowest transmission speed acts as a bottleneck, so with multiple transmission speeds the lowest bandwidth becomes the one in use. This is known as the **bottleneck link**

### Instantaneous throughput
- Throughput rate at a given point in time (velocity)

### Average throughput
- Throughput rate over period of time (speed)
### Peak throughput
- Highest instantaneous throughput seen so far (max speed)

### Goodput
- Measures throughput of only useful data that has not been dropped, excludes protocol head + retransmission overheads
- Sometimes used interchangeably with throughput, Goodput measures network efficiency of delivering useful data while throughput measures network efficiency at transferring data
## Network categories
- Networks are typically heterogeneous consisting of multiple network types  
- The network used for a specific service depends on user needs, size, complexity and the technologies available 

### LAN
- Local area network, covers a small geographical area, such as a building or campus. 
- It allows computers to share resources, such as printers, and enables communication between devices within the same network. Multiple LAN layouts exist

![[Pasted image 20211030162605.png|450|450]]

### MAN
- Metropolitan area network, covers a larger geographical area than a LAN, such as a city or metropolitan area. 
- MANs are used to connect multiple LANs to form a larger network that can support a wider range of applications and services.
### SAN
- Storage Area Network, a specialised  high-speed network that provides block-level access to data storage devices
- SANs are used to improve the performance and reliability of storage systems and allow multiple servers to access a shared pool of storage resources.

![[Pasted image 20230206163117.png|200|200]]

### WAN
- Wide area network, covers a large geographical area, such as a region or country. 
- WANs are used to connect LANs and MANs to form a large, inter-connected network. 
- WANs typically use a combination of technologies, including leased lines, satellite links, and VPNs (virtual private networks), to provide connectivity over large distances.

### Point to point WAN
- Private network used for private communication in an organisation
- Connects distinct WAN's together to communicate over distinct geographical regions 

![[Pasted image 20211030163447.png|650|650]]

## MAC address

- A unique identifier assigned to network interface controllers (NICs) by the manufacturer.
- Used to identify devices on a local network, essential to Ethernet protocol.
- Unlike [[Internet_protocols|IP]] addresses, MAC addresses are permanent and unique to each device.

![[Pasted image 20230216090910.png||m]]

- Devices use MAC addresses to communicate with each other directly on the local network, without the need for a central routing or addressing system.
- Network switches use MAC address learning to store the MAC addresses of connected devices and forward Ethernet frames directly to the intended recipient.
## Link layer switch
- An Ethernet switch operating on the first two [[Internet_protocols#Protocol layering|layers]] (physical and datalink) that can examine arriving packet's MAC address and determine which port to forward to.
- Note routers in general only operate on the first two layers and only these protocols need to be changed when replacing a router. 

![[Pasted image 20230216090156.png|450|450]]

## Network port

- A communication endpoint used for exchanging data over a network.
- It is a logical construct used to identify a specific application or service running on a device connected to the network. 

![[Pasted image 20230216143345.png|450|450]]

- Network ports are identified by numbers ranging from 1 to 65535 and are associated with specific services or applications. Different network ports are used for different types of traffic, eg HTTP traffic on port 80 and SMTP traffic on port 25.
- When data is sent over a network, it is routed to the correct port on the destination device based on the port number. This allows the application or service running on the device to receive the data and process it appropriately.

## Network socket
- An endpoint for sending and receiving data across a computer network 
- It's a combination of [[Internet_protocols|IP]] address and a port number that uniquely identifies a specific process running on a device

![[Pasted image 20230216142622.png|350|350]]

- When two devices establish a socket connection, they create a virtual communication channel that allows them to exchange data
- The [[Operating_system_design|OS]] provides a socket interface to its networking subsystem 
