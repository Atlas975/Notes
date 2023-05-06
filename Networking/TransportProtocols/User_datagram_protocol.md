---
aliases: UDP
---
> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/TransportProtocols
> **Created:** 06/05/2023 - 21:44
> ```dataviewjs
> let f =dv.current().file;
> let s = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p =>!p.endsWith(".png"))); s.delete(f.path);
> dv.table(["Connections", "Tags"], [...s].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# User datagram protocol
- A [[Transport_protocols|transport protocol]] that's loss tolerant and rate sensitive, common with streaming applications
- Relies on the [[Application_architecture|application layer]] to provide reliable data transfer if needed, this allows for application specific data recovery ie different requirements for UDP use in [[Domain_name_server|DNS]] and streaming

![[Pasted image 20230506214950.png|450|450]] 
- A small [[Internet_headers#UDP header|header]] also means less overhead allowing for a larger payload to be sent, UDP is mostly IP with a short transport header
- Aside from [[Transport_protocols#Transport multiplexing|multiplexing]], the [[Checksum]] is the only service provided by UDP

![[Pasted image 20230506215834.png|500|500]]

## UDP checksum
- The UDP checksum is a 16 bit sum of words in the packet, this covers part of the IP header and the UDP header + its payload
- This results in a payload that when summed with the checksum, will result in all ones if valid. If this is not the case the packet is corrupt

![[Pasted image 20230506224627.png|450|450]]