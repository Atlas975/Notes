---
aliases: TCP
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/TransportProtocols
> **Created:** 06/05/2023 - 22:53
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transmission control protocol
- A [[Transport_protocols|transport protocol]] that offers reliable / in-order data transfer
- point-to-point with one sender and receiver that can also be [[Reliable_data_transfer#Pipelined protocol|pipelined]]
- Tight flow control to prevent sender from overwhelming receiver, makes use of handshakes. The TCP receiver can advertise free buffer space with the **rwnd** field of the TCP header

![[Pasted image 20231016182410.png|450|450]]
## TCP congestion control
- TCP is valuable in [[Congestion_control|congestion control]] as it enables senders to limit the rate at which traffic is sent into its connection based on the networks current congestion level
- This allows dynamic changes in send rate based on this congestion level 
## TCP segment structure
- The **sequence number** acts as index for the incoming byte stream 
- Round trip time (RTT) is the measured time from transmission to ACK receipt

![[Pasted image 20230507150316.png|400|400]]
## TCP fast retransmit
- Deals with the issue of set timeouts that are longer than necessary, which results in a long delay before packet resending
- While corrupt/lost segments can be detected by duplicate ACKs, fast transmit allows the segment with the smallest seq# to be retransmitted if 3 ACKs are received for the same data

![[Pasted image 20230507151207.png|200|200]]
