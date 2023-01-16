#OperatingSystems [[Network_basics]]
# Internet
- A network of interconnected set of computers(host)

# The web
- A service, distributed around the world, important for web based information systems eg e-commerce and access databases using WWW.  
- Web pages are written in HTML and transferred between server and client
# Dynamic client / server request / response sequence

>![[Pasted image 20211109094505.png|500|500]]

# 3 Tier architecture

>![[Pasted image 20211109094734.png|500|500]]

- Presentation is mostly whats missing from 2 tier architecture.
## Presentation tier
- GUI
- Data display
- Data input
- Verification (HTML/Javascript input form verification)
- Must not directly interact DBMS
## Logic tier
- Processes data received by users.
- It does not do the updating of the DBMS, it makes the request by pointing it to executable code like SQL.
- Needs to verify format of received data.
## Data tier
- Stores data and returns data to logic tier.
- Data stored in DBMS, all database functions are handled here. 

# Protocols
- The rules the sender, receiver and devices need to follow for effective data communication.
- Part of transport layer.
- Defines what is communicated, how it's communicated and when. It also defines the format of data overall allowing accurate and timely data transmission.
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

> ![[Pasted image 20211105235648.png|200|200]]

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
- An Ethernet switch operating on the first two layers (physical & data link) that can examine arriving packet's MAC address and determine which port to forward to.
- Note routers in general only operate on the first two layers and only these protocols need to be changed when replacing a router. 
# Exchange using OSI
![[Pasted image 20211106001757.png|500|500]]
- Headers are what allow distinguishing between layers.
