---
aliases: IP stack
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 06/02/2023 - 15:02
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
# Protocol stack
- The rules the sender, receiver and devices need to follow for effective data communication.
- Part of **transport layer** of the OSI model, defines when, how and what is communicated,  it also defines the format of data for allowing accurate and timely data transmission.
- TCP/ IP was developed to allow for this to be done between distinct networks

## Network abstraction
- Gives [[Internet_architecture|internet]] applications a common interface to work with a protocol layer 
- Abstracts away the underlying implementations of a layer allowing for modularity 

![[Pasted image 20230216083059.png|450|450]]

## Protocol layering
- A technique used to implement network abstraction, dividing communication into layers 
- Lower layers transmit data while higher layers format and send data

![[Pasted image 20230216083526.png|450|450]]

- Hierarchical, each layer depends on the service of the layer beneath it
- Changes to a lower layer can have a cascading effect, requiring changes to the layers above it 
- However, layers can be swapped out without impacting other layers if they share the same API 

### Layering trade-offs
- Added overhead by added protocol headers, resulting in lower performance 
- Potential duplicate functionality between layers 
- Layering regularly violated by need for firewalls, transparent proxies, NAT's etc 

## Bi-directional communication

- In bidirectional communication, each layer must perform 2 opposite tasks.
- Data must also be able to be transmitted in both directions simultaneously 

![[Pasted image 20211105234139.png|500|500]] 

- Each layer has a specific protocol only understood by that layer.
- Opposite objects (protocols), must be able to perform identical tasks

![[Pasted image 20211105235208.png|500|500]]

## OSI model
- An extended IP stack, including layers between application and transport  

![[Pasted image 20230216094539.png|450|450]]

# Internet protocol stack
- Layered communication architecture that defines the protocols and services of network communication between devices 
- Typically organised into 5 layers

![[Pasted image 20211109092413.png|350|350]]

- Packet headers are used to distinguish between layers
- When data is delivered, no header should remain (encapsulation downwards)

![[Pasted image 20230216094754.png|450|450]]

- The network layer is kept dumb as possible in order for more abstract processes to be implemented on the transport and application layer
- Packet encapsulation process:

![[Pasted image 20230216095033.png|400|400]]

- Header encapsulation used to achieve separation of concerns between each layer
- Processes send/receive messages to/from [[Network_architecture#Network socket|sockets]]

## Application layer
- Defines the protocols and services used by applications to communicate over the network.
- File transfer, email and [[Domain_name_server|DNS]] all fall here
## Transport layer
- Handles end-to-end data delivery between applications 
- Lowest layer in which communication instead of packets are used. Eg. flow control, allowing devices to request lower or higher data transmission rates based on capabilities 
## Network layer
- Inserts information into a packets header to be properly addressed and routed
- Least amount of flexibility, ties the whole protocol stack together 
- Transfers data packets, in a WAN this involves creating a route as well. 
## Data link layer
- Responsible for reliable transmission of data frames between devices on the same physical network, defines protocols such as ethernet, wifi and bluetooth,
- [[Network_architecture#MAC address|MAC addresses]] used to handle physical addressing of frames 
- Transmits data packets that are directly connected by physical link. In a WAN this is between routers, in a LAN this is between hosts (unique user IP's)
## Physical layer
- Handles the physical characteristics of a [[Transmission_mediums|communication medium]]
- Responsible for transferring binary data using electrical signals.
