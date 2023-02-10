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
	• Processing Delay
	• Queuing Delay
	• Transmission Delay
	• Propagation Delay

## Processing delay
- Dependent on how busy a device is, the time taken for device to read and route a packet based on [[Network_architecture#Network header|header]] metadata, 
- This delay is typically small, but may include checking bit level errors in a packet 

## Queuing delay
- Dependent on network congestion, the time spent [[Network_routing#Packet queuing|packet queuing]] before transmission 
- Queues only develop if arrival rate exceeds output link capacity 

> ![[Pasted image 20230210172826.png|400|400]]

## Transmission delay
- Dependent  on [[Network_routing#Packet transmission delay|packet transmission delay]], since networks are store and forward, entire packets must be received before forwarding 
- Transmission delay is the time taken to transmit all packet bits onto the link

> ![[Pasted image 20230210173557.png|400|400]]

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

# Measuring network delay 
- Network delay can be measured through applications such as **tracerroute**
- This works by measuring RTT, sending three packets to a router that lies on path to destination and measures lag between transmission and reply  

> ![[Pasted image 20230210180038.png|450|450]]
> ![[Pasted image 20230210180129.png|550|550]]

## Measuring throughput 
- Standardised throughput measurements can be achieved through **iperf** which runs a client server model with the client requesting sample data served by the host
- Knowing the size of sample data and 