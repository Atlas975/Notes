---
aliases: congestion
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 07/05/2023 - 16:19
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Congestion control
- [[Reliable_data_transfer|RDT]] utilises several methods to treat packet loss but does not treat the cause 
- Congestion control deals with the issue of too many sources / too much data or data arrival being too fast for the the network to handle. This manifests as:
	- **Lost packets**: buffer overflow at routers 
	- **Long delays**: queuing in router buffers
## Congestion general rules
$$\text{Delay}\propto \text{(Capacity remaining)} ^{-1}$$
$$\text{Throughput}\propto(\text{pckt loss, retransmission, duplicates})^{-1}$$
$$\text{Throughput}\leq{\text{Capacity}}$$


## Infinite buffer solution
- Involves one router with an infinite buffer that requests pass through 
- No retransmission required, max in/out capacity set at R. Here the bottleneck is the amount of packets that can leave the central router at a time, this also causes a growth in delay time

![[Pasted image 20230507164311.png|400|400]]

## Finite buffer solution
- Additional overhead required on sender side to know when router buffer is available 
- This requires the use of [[Reliable_data_transfer#Reliable data transfer|Reliable data transfer]], as max capacity is reached, packet drop occurs which causes a fall in throughput rate 

![[Pasted image 20230507164406.png|450|450]]
- With premature timeouts, the sender may end up forwarding redundant duplicates, in which case the resiever needs to be able to handle this
## Multi-buffer solution
- Allows for more flexible routing, but with a potentially higher congestion cost 
- This is due to packet loss resulting in wasted work for all upstream transmission capacity and buffering previously used for that packet 

![[Pasted image 20230507164608.png|550|550]]


## End-end congestion control
- This is the approach taken by [[Transmission_control_protocol#TCP congestion control|TCP congestion control]], this works by **inferred** congestion based on observed loss and/or delay 
- No explicit feedback received from the network

## Network assisted congestion control
-  Feedback **directed** from routers to src & dst hosts that flow through a congested router 
- Can either explicitly set sending rate or simply indicate congestion level

![[Pasted image 20230507215711.png|450|450]]
- Receival of 3 duplicate ACKs
