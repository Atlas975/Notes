---
aliases: IP address
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 08/05/2023 - 00:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Internet protocol
- The set of rules computers use to communicate over the [[Internet_architecture|internet]]
- IP addresses are a key part of this and are used in packet headers to indicate a src and dst. This is also used to make routing decisions on the network path
- An IP datagram itself is self-contained and includes all required addressing info 

![[Pasted image 20230509145446.png|450|450]]
## IPV4 encoding
- A **32 bit** address, typically written in dotted notation with the decimal system 
- 4 groups each encoded with 8 bits  eg `192.168.21.76`, leading zeroes omitted
## IPV6 encoding
- A **128 bit**  address,  separated by ':' with groups of zeros emitted with '::'
- 8 groups each encoded with 16 bits (4 hex digits), leading zeroes omitted eg:
```
2001:0db8:0000:0000:0000:ff00:0042:8329 // can be written as:
2001:0db8::ff00:42:8329
```

## IP transition costs
- Various costs exist in transitioning from IPV4 to IPV6
- These are incurred from having to maintain compatibility with legacy protocols as well as upgrading both routers and hosts
### IP tunneling
- Technique used to encapsulate a protocol within another protocols packet. Used to create a virtual network where the header contains a new src and dst to move through the tunnel endpoints
- Significant overhead to encapsulate and de-encapsulate packets

### IP blocklists
- Used to track IPs of spammers / bots 
- Blocksize is reasonably small for IPV4 but will not work for IPV6's large address space  
## Routing tables
-   Data structure used by a router to determine the best path for forwarding an IP packet towards its dst
-   Contains a list of network addrs, associated subnet masks, and next-hop IP addrs, which are used by the router to match the dst addr of an incoming packet to the appropriate outgoing interface.

![[Pasted image 20230508004630.png|500|500]]

- Needs to give the next hop for every possible IP with  2^32 possibilities existing for 32-bit addresses
- This can be extremely slow to process so a hierarchal addr scheme is used that separates this further:

![[Pasted image 20230508004930.png|400|400]]

- This also divides addrs into 3 classes based on number of bits used for network + host portions 
- This is known as **classful addressing** and has limitations in regards to inefficient use of address space and difficulty in assigning IP

### Classless inter-domain routing (CIDR)
- Offers better tradeoff between size of routing table and efficient use of IP addr space 
- No IP classes, uses mask instead of prefix,  allows for dynamic sized network and host portions 

![[Pasted image 20230509143712.png|450|450]]
- Slash notation: Written as network number/mask length; e.g. `12.4.0.0/15 or 12.4/15`
- This mask is known as a **subnet mask**
## Subnets
- A set of devices interfaces that can reach each other without an intermediate router 
- All IP addrs in a subnet share a network part 

![[Pasted image 20230508151334.png|250|250]]
### Subnet mask
- A subnet mask is a 32-bit value used in IP networking to identify the network and host portions of an IP address. It is used to divide an IP address into two parts: the network ID and the host ID.
- The subnet mask is applied to the IP address by performing a logical "AND" operation between the IP address and the subnet mask.
- This operation results in the network ID, which is used by routers to determine the network to which a packet should be sent. Commonly used with [[#Classless inter-domain routing (CIDR)|CIDR]]
## Max transmission unit size (MTU)
- Each network has its own max transmission unit size (**MTU**), IP datagram size must be greater this despite the minimum MTU not always being known for a given path
- Fragmentation is done to remedy this with the cost of additional overhead. Each frag can travel across different paths and needs to be reassembled at end-host without help form the network 

![[Pasted image 20230509140301.png|450|450]]
- Loss of frags also lead to degraded performance, requiring datagram retransmission

## Hierarchal IP addresses
- A network addressing scheme that organises IP addresses into hierarchical levels or "subnets". 
- This allows for more efficient and organised allocation of IP addresses, and simplifies network management by dividing a large network into smaller sub-networks

![[Pasted image 20230509161051.png|450|450]]
- Numerous benefits to networking including: 
    -   Efficient use of IP addresses by allocating them to subnets based on actual network needs
    -   Simplified net management by dividing a large network into smaller, more manageable subnets
    -   Improved scalability by adding additional subnets as needed
    -   Better traffic control by enabling more granular control over network traffic and better network security by implementing access controls at the subnet level.
## Reserved IP addresses
1.  **Loopback address (127.0.0.0/8)** - This address range is reserved for loopback purposes, meaning that any traffic sent to this address range is looped back to the same machine. The most commonly used loopback address is 127.0.0.1, which is used to test network services on the local machine.
2.  **Private address ranges** - These are IP address ranges that are reserved for use in private networks and are not routable on the public internet. There are three private address ranges:
	-   **10.0.0.0/8** - This address range provides up to 16,777,214 IP addresses for use in private networks.
	-   **172.16.0.0/12** - This address range provides up to 1,048,574 IP addresses for use in private networks. The range is divided into 16 subnets of 65,534 IP addresses each.
	-   **192.168.0.0/16** - This address range provides up to 65,534 IP addresses for use in private networks.
3.  **Link-local address (169.254.0.0/16)** - This address range is reserved for link-local purposes, meaning that it is used for communication between devices on the same physical network segment when no DHCP server is available to assign IP addresses.
4.  **Multicast address ranges** - These address ranges are reserved for multicast purposes, meaning that they are used to send traffic to multiple hosts simultaneously. There are several multicast address ranges, including:
	
	-   **224.0.0.0/4** - This address range is used for local network multicast traffic.
	-   **239.0.0.0/8** - This address range is used for administratively scoped multicast traffic.
