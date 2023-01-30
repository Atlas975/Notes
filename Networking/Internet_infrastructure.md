> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 26/12/2022 - 03:56
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Internet infrastructure
- Supports a diverse of applications that rely on web services 
- Core components include 
	- **Hosts**: the end system computing devices that run network applications
	- **Communication links**: physical or digital links, speed measured in bandwidth 
	- **Switches**: used to forward packet (data blocks) down links 

> ![[Pasted image 20230123143523.png|400|400]]
- The internet itself can be taught of as a network of networks with protocols such as TCP / IP / HTTP governing the way data is transmitted. 
- Internet standards also exist to define how communication over the internet needs to be established between hosts
## Web 
- An interconnected systems of public web pages that can be accessed through the internet 
- Web pages are written in HTML and transferred between server and client
## Response sequence

>![[Pasted image 20211109094505.png|500|500]]

## Internet architecture

>![[Pasted image 20211109094734.png|500|500]]

- Presentation is mostly whats missing from 2 tier architecture.
### Presentation tier
- Data display / input
- Verification (HTML/Javascript input form verification)
- Must not directly interact with a [[Database_design|DBMS]]
### Logic tier
- Processes data received by clients.
- Does not update data, only makes request
- Needs to verify format / type of received data.
### Data tier
- Stores data and returns data to logic tier.
- Data stored in DBMS, all database functions are handled here. 

# Protocols
- The rules the sender, receiver and devices need to follow for effective data communication.
- Part of **transport layer** of the OSI model 
- Defines what is communicated, how it's communicated and when. It also defines the overall format of data for allowing accurate and timely data transmission.
## HTTP
- Example of an application protocol
1. Client sends request
2. Server returns a response
3. HTTP uses TCP (transmission control protocol) services 

# Principles of protocol layering.
## Bi-directional communication
- In bidirectional communication, each layer must perform 2 opposite tasks. Each object (protocol) however, must be identical 

>![[Pasted image 20211105233536.png]] 
in this case one must talk the other listen.

- Other examples may be to encrypt in one direction and decrypt in the other.
- Multiple layer communication

> ![[Pasted image 20211105234139.png|500|500]] 

- Each layer has a specific protocol only understood by that layer.

# TCP/IP Protocol suite (older model)

>![[Pasted image 20211105234427.png]]

- Thought of as 4 software layers that go over the hardware layer. 
- Hierarchical, each upper layer depends on service from previous layer. 

# OSI model

> ![[Pasted image 20211105235648.png|100|125]]

## Example layer involvement:

> ![[Pasted image 20211105235208.png]]

# 5 Layer network model explained:
## Application
- The actual protocols needed for effective data communication, designed to meet requirements for different applications. Layer where people interact.
## Transport
- Lowest layer in which communication instead of packets are used. Eg. flow control, allowing devices to tell each other to lower or increase data transmission rates based on what they're capable of.
## Network
- Transfers data packets, in a WAN this involves creating a route as well. In a LAN this is not the case
## Data link
- Transmits data packets that are directly connected by physical link. In a WAN this is between routers, in a LAN this is between hosts (unique user IP's)
## Physical
- Transfers binary data using electrical signals.

### Routers only work on the first 3 layers, switches work on first 2 (physical,data)

# TCP / IP protocol stack
![[Pasted image 20211109092413.png|500|500]]
## Link layer switch
- An Ethernet switch operating on the first two layers (**physical & data link**) that can examine arriving packet's MAC address and determine which port to forward to.
- Note routers in general only operate on the first two layers and only these protocols need to be changed when replacing a router. 
# Exchange using OSI
> ![[Pasted image 20211106001757.png|450|450]]
- Headers are what allow distinguishing between layers.

