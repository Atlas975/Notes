---
aliases: NAT
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 09/05/2023 - 16:15
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Network address translation
- Technique used to allow devices on a private [[Network_architecture|network]] to share a single public IP
- Local network uses just one IP address as far as outside world is concerned, this reduce the range of IPs needed from an ISP
- Works by translating the private IP addresses of devices on the local network into a single public IP address that is visible on the internet.

![[Pasted image 20230509162158.png|450|450]]
## NAT process
1.  A device on the local network sends a request to access the internet.
2.  The NAT device receives the request and replaces the source IP address of the request (the private IP address of the requesting device) with its own public IP address.
3.  The NAT device then forwards the request to the internet.
4.  When a response is received from the internet, the NAT device replaces the destination IP address of the response (its public IP address) with the original private IP address of the requesting device.
5.  The response is then forwarded back to the requesting device on the local network.


![[Pasted image 20230509162455.png|450|450]]
- Makes use of a NAT table which maps (src IP, port#) to (natIP, new_port#)
## NAT benefits
1.  **Security**: By using NAT, the private IP addresses of devices on the local network are hidden from the internet, providing a level of security against external threats.
2.  **Cost-effectiveness**: NAT allows multiple devices on a local network to share a single public IP address, which can save on the cost of purchasing additional IP addresses.
3.  **Flexibility**: NAT allows devices on a local network to communicate with the internet without requiring public IP addresses, which can be limited or expensive to obtain.

## NAT downsides 
- Requires two computations of checksum 
- Adds overhead and causes routers to need to operate on the [[Protocol_stack#Network layer|network layer]]. this adds a lot of additional responsibility to routers
- NAT acts as a natural firewall, making [[Application_architecture#P2P Architecture|P2P]] difficult to work with due to only allowing incoming packets where an entry in the NAT table exists (must originate from within the LAN)
