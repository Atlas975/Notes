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
- [[Transmission_control_protocol|TCP]] does not know if a duplicate ACK are due to segment loss or network reordering of segments, a 3rd duplicate ACK being sent is a strong indicator of segment loss

## Sender rate limiting
- A sender using [[Transmission_control_protocol|TCP]] limits transmission through the **cwnd (congestion window)**
- This works by sending cwnd bytes before waiting for ACKs. The cwnd is dynamically adjusted based on observed network control. 

$$\text{TCP rate}=\frac{cwnd}{RTT}\text{bytes/sec}$$


![[Pasted image 20230507234918.png|350|350]]

- The basic approach to adjusting the cwnd window is to increase send rate until packet loss occurs
- **sshthresh** is the variable that controls the maximum number of transmissions that can occur

![[Pasted image 20230507235134.png|450|450]]
- Multiple congestion avoidance algorithms exist, each with distinct window growth / compress rates that are known to ideal for network stability
- TCP Tahoe is the original with a slow start and fast retransmit, TCP Reno also has fast recovery 

![[Pasted image 20230508000834.png|450|450]]
![[Pasted image 20230508000945.png|450|450]]
## Delay-based TCP congestion control 
- Attempts reduce growth rate before packet loss occurs in buffers 
- This is done by taking the minimum round trip time (RTT) as the un-congested path, and scaling the packet send rate based on how much slower future measured throughput is 

```
if measured throughput “very close” to uncongested throughput
    increase cwnd linearly /* since path not congested */ 
else if measured throughput “far below” uncongested throughout
    decrease cwnd linearly /* since path is congested */
```

## Explicit congestion notification (ECN) 
- TCP deployments often implement network-assisted congestion control:
    - Two bits in IP header (ToS field) marked by network router to indicate congestion
        - Policy to determine marking chosen by network operator
    - Congestion indication carried to destination
    - Destination sets ECE bit on ACK segment to notify sender of congestion
    - Involves both IP (IP header ECN bit marking) and TCP (TCP header C,E bit marking)

![[Pasted image 20230508003354.png|500|500]]