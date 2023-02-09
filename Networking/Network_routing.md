> [!important]- Metadata
> **Tags:** #Networking #OperatingSystems 
> **Located:** Networking
> **Created:** 23/01/2023 - 14:18
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
# Network routing
- A host sending function will take an application message, break it up into smaller packets of **bit length (L)** and transmit those packets at a **transmission rate / link bandwidth  (R)** 
- The time taken for a host to push L bits is known as the packet transmission delay

$$\begin{align*}
\text{packet transmission delay}=\frac{L_{bits}}{R_{\text{bits per second}}}
\end{align*}$$

## Packet switching
- Routing method which divides data into small units called "packets" , packets use their [[Network_architecture#Network header|header]] information to be routed independently of each other
- Packets are reassembled at the receiving end to form the original data. The [[Internet_architecture|Internet]] is  a packet-switched network, packets are sent from one device to another through routers.
- [[Network_architecture#Network criteria|Timeliness]] is important as packets are dropped if acknowledgement isn't received in time

> ![[Pasted image 20230209174325.png|500|500]]
> Routers act as [[Graphs|nodes]] in the network, redirecting packets based on various factors such as network congestion and distance while reading the packets 

### Switches
- Connect devices together
- Set of interlinked nodes
### Packets
- Packets can follow different paths from source to destination. 
- Recompiled at end node.
## Circuit switching (time division)
- Networks connected by physical links, designed specifically for voice communication.
- Time division is whats used to allow multiple access by allocating time slots to users.
- Circuits can share links have have limited capacity but new links cant be made if capacity is reached.
- Each circuit allocated fixed amount of link capacity, wasted on silent telephone lines for example.
- Like a liquid, data flows continuously and path is fixed 
- Requires very high bandwidth to handle traffic.

## Circuit vs packet switching
- Packet switching is more cost efficient, packets don't don't need a dedicated channel to travel to their destination.
- Packet switching is more resource efficient, not using channels throughout the delivery of data.
- Circuit switching allows for data to be delivered at a consistent bandwidth
- Circuit switching allows for data to be delivered with minimum delay, better timeliness.
