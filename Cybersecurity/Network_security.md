> [!important]- Metadata
> **Tags:** #Cybersecurity #Networking 
> **Located:** Cybersecurity
> **Created:** 26/04/2024 - 23:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Network security
- A critical aspect of IT that involves the policies, practices, and tools designed to protect computer [[Network_architecture|networks]] and data from unauthorised access
- The technologies used to handle this can operate on various parts of the [[Protocol_stack|protocol stack]]
## Firewalls
- Monitor and control incoming \/ outgoing network traffic based on predetermined security rules
- Essentially act as a barrier between a trusted internal network and untrusted external network
### Packet filtering
- Operates at the network layer, filters based on information from the packet header 
- Cannot prevent attacks using the layers above and is complex to configure
### Stateful inspection
-  Operates at the transport and network layer, more advanced than packet filtering as 
- Can track the state of active connections and filter based on packets that go through an already established connection that's more likely to be safe

### Proxy firewalls
- Act as an intermediary for requests from clients seeking resources from other servers, inspecting incoming traffic at the application level
- This can significantly degrade traffic performance 

### Dynamic packet filtering
- An extension of stateful firewalls that can modify rules dynamically based on traffic behaviour 
- This involves communication with the application layer to determine the ports needed
## Internet protocol security (IPSec)
- A suite of protocols designed to secure IP communications by encrypting and authenticating each IP packet in a communication session. Provides end-to-end security
- IPSec support is compulsory with [[Internet_protocol#IPV6 encoding|IPv6]],  increasing the baseline security standard from IPv4
### Authentication header (AH)
- Provides data integrity, origin authentication, and protection against replay attacks
- These traits ensure data has not been tampered with in transit (using [[Checksum]])
- Does not encrypt the data payload so no guarantee of data confidentiality 

![[Pasted image 20240427144120.png|400|400]]


### Encapsulation Security Payload (ESP)
- Provides all the services of AH but also encrypts adding data confidentiality 
- This ensures that payload cannot be read by unauthorised parties 
- The IP header is not protected as this needs to be read in transit 

![[Pasted image 20240427144347.png|400|400]]


- **Security Associations (SA)**: Defines the protocols and algorithms for securing data, established through the Internet Key Exchange (IKE) protocol.

### Modes of Operation
- Both AH and ESP can operate in two distinct modes:
	- **Transport Mode**: Encrypts/authenticates data payload; used for end-to-end communication.
	- **Tunnel Mode**: Encrypts/encapsulates entire packet, used in VPNs to link two networks.

## Anonymous network
- Involves using a overlaying network over an existing network (eg Tor)
- This improves anonymity over the internet using [[Transmission_control_protocol|TCP]] over TLS. This often makes use of the onion routing protocol where only the next router knows the key of the previous router 

![[Pasted image 20240427154217.png|300|300]]

- This method is vulnerable to multiple attacks such as DNS leaks and traffic analysis 
- Traffic from the exit node to the target is also not encrypted, leading to potential risk