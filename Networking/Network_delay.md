> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 10/02/2023 - 17:01
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
# Network delay
- 4 types of [[Network_architecture|network]] delay exist 
	- Processing Delay
	- Queuing Delay
	- Transmission Delay
	- Propagation Delay
- Multiple [[Network_tools| network tools ]] exist to identify if these delays are occuring 
## Processing delay
- Dependent on how busy a device is, the time taken for device to read and route a packet based on [[Network_architecture#Network header|header]] metadata, 
- This delay is typically small, but may include checking bit level errors in a packet 

## Queuing delay
- Dependent on network congestion, the time spent [[Routing_methods#Packet queuing|packet queuing]] before transmission 
- Queues only develop if arrival rate exceeds output link capacity 

![[Pasted image 20230210172826.png|400|400]]

## Transmission delay
- Dependent  on [[Routing_methods#Packet transmission delay|packet transmission delay]], since networks are store and forward, entire packets must be received before forwarding 
- Transmission delay is the time taken to transmit all packet bits onto the link

![[Pasted image 20230210173557.png|400|400]]

## Propagation delay
- Dependent on the speed of [[Transmission_mediums|transmission mediums]], each link has an associated propagation delay which is a measure of the time to transmit data over a link from one end to another
$$\begin{align*}
\text{propagation delay}=\frac{d}{s}\\
d=\text{length of physical link}\\
s=\text{link propagation speed}
\end{align*}$$

- Different to transmission delay in the sense that it's dependent on packet travel time rather than time to push packets out of a device to the link

## End-to-end delay
- The total of all nodal delays from one host to the next
- **Round trip time (RTT)** is this time measured in both directions from one host to another and then back to the same host. Does not have to be the same route both ways 

## Packet loss
- Occurs when a router drops a packet, this reduces usable throughput ([[Network_architecture#Goodput|goodput]]) as the number of useful bits sent is lower than what it can be without drops 
- Reliable protocols cause packet retransmission to occur
- Packet loss tightly tied to [[#Queuing delay]], full buffers cause packets to be dropped upon arrival 

![[Pasted image 20230210182600.png|400|400]]

- Packet loss can also occur in physical medium, DNS attacks (buffers filled with mass packets causing arrival rate to exceed output rate) or hardware / software corruption where checksum verification may fail 
### Retransmission process
1. Destination host sets a timer for expected arrival time of each next expected packet 
2. If timer expires before packet arrival, a retransmission request is send to source host 
- Adds to [[#Transmission delay]] as data has to make the full journey from source again 

### Queuing disciplines
- Control exists for how packets should be dropped, instead of tail drop packets may use:
    - **Random drops**: drop any packet in queue 
    - **Quality of service (QOS) aware**: uses [[BinaryHeaps|priority queue]] to drop packets, guarantees throughput for sensitive services such as voice calls or live video 


### Time to live (TTL)
- A field in [[Protocol_stack|IP]] packets that is used to limit the lifespan of a packet in a network.
- When a device sends an IP packet, it sets the TTL value, which is the maximum number of hops (routers or network segments) that the packet can travel before being discarded.

![[Pasted image 20230219100407.png|400|400]]
- This counter is decremented on each hop, this prevent packets from circulating indefinitely
- If a packet is unable to reach its destination and its TTL reaches zero, it will be discarded, preventing it from consuming network resources or causing network congestion.

