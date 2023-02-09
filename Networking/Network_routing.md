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
- Packet switching is a cost effective routing method, as dedicated channels are not needed for routing making the method ideal when traffic is unpredictable
- [[Network_architecture#Network criteria|Timeliness]] is important as packets are dropped if acknowledgement isn't received in time, 

> ![[Pasted image 20230209174325.png|500|500]]

- Routers act as [[Graphs|nodes]] in the network, redirecting packets based on various factors such as network congestion and distance while reading the packets header metadata 
- Packets receive repeated transmission delays as the entire packet needs to be stored before it can be forwarded, this is known as the **store and forward** method

> ![[Pasted image 20230209180745.png|500|500]]

### Network core
- A mesh of interconnected routers
- Used to help route packets from source to destination 

> ![[Pasted image 20230209180433.png|500|500]]
Routers need to use forwarding rules, which are produced by the routing algorithm 


### Packet queuing
- Occurs when packets arrive faster than they can be forwarded, causing congestion
- If arrival rate exceeds transmission rate, a buildup occurs and queue will need to drop packets

> ![[Pasted image 20230209181000.png|450|450]]
## Circuit switching (time division)
- Networks connected by dedicated links, optimal for services that require reliable and predictable communication such as with voice or video
- More predictable bandwidth but links remain idle when not in use, making the method more wasteful than packet switching. 

> ![[Pasted image 20230209181457.png|250|250]]

- Resource division with this routing method can be handled in two ways:

### Frequency division multiplexing (FDM)
- Frequencies divided into narrow bands
- Each call allocated its own band and transmit data at the maximum of that band

> ![[Pasted image 20230209182637.png|350|350]]

### Time division multiplexing (TDM)
- Time divided into slots, each call can only send data during its slot 
- Can transmit data up to maximum rate of frequency 

> ![[Pasted image 20230209182813.png||s]]