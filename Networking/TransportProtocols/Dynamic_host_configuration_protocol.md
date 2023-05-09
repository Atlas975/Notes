---
aliases: DHCP
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/TransportProtocols
> **Created:** 08/05/2023 - 00:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Dynamic host configuration protocol
- Deals with assigning [[Internet_protocol|IP addresses]], communicating with IP requires and IP addr, subnet mask, gateway router (initial point of contact to the  [[Internet_architecture|internet]]) and occasionally a DNS server (useful to use the web)
- IP addrs can be hard-coded or use DHCP for automatic addr allocation([[Protocol_stack#Application layer|application layer]]) using [[User_datagram_protocol|UDP]]
- DHCP leases an IP for use, allows reuse of addrs that are binded by  [[Network_architecture#MAC address|MAC address]]. Clients can send a **DHCP discovery message** without an IP. DHCP format:

![[Pasted image 20230509155657.png|400|400]]

- DHCP is useful as it relieves network admins of manual config and allows for devices to move from network to network while automatically obtaining valid config parameters 
- However, a continuous DHCP server is required. The use of UDP is also unreliable / un-secure along with DHCP itself being an unauthenticated protocol (risk of malicious attacks) 

## DHCP procedure
1.  Client sends request for an IP, 
2. Server allocates addr from addr pool
3. Server adds client to lease DB with a timeout 
4. Server replies to client with addr, server etc 

![[Pasted image 20230509153000.png|350|350]]
- Additionally clients can renew this addresses during this lease period 
- [[#DHCP server|DHCP servers]] also transmit details such as first hop router, network mask and other config info such as web [[Proxy_pattern|proxy]], network allocated hostname etc

![[Pasted image 20230509152939.png|450|450]]


## DHCP leases 
- If multiple servers exist clients can also select a best offer 
- Address lease types include 
    - **Manual lease**: network manager explicitly assigns all IP addrs 
    - **Automatic lease**: DHCP server assigns some permanent and some dynamically 
    - **Dynamic**: DHCP server assigns dynamically when permanent addrs not required 
## DHCP server
- Manually assigned to specific [[Network_architecture|networks]]
- Preconfigured [[Internet_protocol#Subnet mask|subnet mask]], gateway router and [[Domain_name_server|DNS]]
- Makes use of two [[Database_systems|databases]]
	- 1st DB for manual IP accusation permanently bound by hardware
	- 2nd DB for pool of addrs dynamically assigned on req


## DHCP message types
- **DHCPDISCOVER**: Broadcast by a client to find available DHCP servers
- **DHCPOFFER**: Response from a server to a **DHCPDISCOVER** offering IP address and other data
- **DHCPREQUEST**: Message from a client to servers that does one of the following:
    -  Requests the parameters offered by one of the servers and declines all other offers 
    - Verifies a previously allocated addr after a system or network change 
    -  Requests the extension of a lease on a particular address
- **DHCPACK**: ACK from server to client with parameters, including IP address
- **DHCPNACK**: NACK from server to client, indicating that the 
client's lease has expired or that a requested IP address is incorrect
-  **DHCPDECLINE**: Message from client to server indicating that the offered address is 
already in use
- **DHCPRELEASE**: Message from client to server canceling remainder of a lease and relinquishing network address
- **DHCPINFORM**: Message from a client that already has an IP address requesting further configuration parameters from the DHCP server

![[Pasted image 20230509153506.png|450|450]]