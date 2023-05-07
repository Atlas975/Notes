---
aliases: RDT
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 06/05/2023 - 23:00
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Reliable data transfer
- Reliable data transfer refers to a set of techniques used to ensure that data transmitted over a [[Network_architecture|network]] is received correctly and completely by the intended recipient.
- [[Network_architecture|Network]] [[Transport_protocols|protocols]] such as [[Transmission_control_protocol|TCP]] exist to facilitate this among other methods that are designed work under different transmission scenarios

![[Pasted image 20230506231701.png|450|450]]

- When recovery from errors is required, RDT's make use of:
	- **Acknowledgements (ACKs)**: receiver tells sender that packet received OK
	- **Negative acknowledgement (NAKs)**: receiver tells sender packer has errors, immediate re-transmission occurs when a NAK is received  
## RDT 1: reliable transfer over a reliable channel
- Assumes underlying channel is perfectly reliable with no bit errors / packet loss 
- Separate [[Finite_state_machines|FSM]] exists for sender and receiver

![[Pasted image 20230506230702.png|500|500]]
## RDT 2: channel with bit errors
- Allows for re-transmission of packets to occur if corrupt, each packet is also given a sequence number with the receiver discarding any duplicate packets that may arrive
- Not able to handle corruption on ACKs and NAKs due to working on a stop and wait model

![[Pasted image 20230506232409.png|450|450]]

## RDT 2.1: handle corrupted confirmations
-  A version of [[#RDT 2: channel with bit errors|RDT 2]] that can handle corrupted ACK/NAKs and duplicates. 
- The **sequence number** is vital in ensuring that packets are received in the correct order, 0 and 1 are the only sequence numbers required to achieve this.
	- **0 (next / 1st in seq)**: identifies the next expected packet
	- **1 (following / 2nd in seq)**: identifies the following packet
- Corrupt ACKs / NAKs are treated the same, with retransmission occurring
- If a packet is not corrupt but has the wrong sequence number, this indicates its a retransmission and ACK is sent by the receiver 
### RDT 2.1: Sender side
![[Pasted image 20230506233041.png|450|450]]
### RDT 2.2: receiver side
![[Pasted image 20230507131924.png|450|450]]

## RDT 2.2: NAK-free protocol
- Same functionality as [[#RDT 2.1: sender handles garbled confirmations|RDT 2.1]] but with ACKs only, reducing the \# of possible states
-  NAK functionality emulated by sending a duplicate ACK for the last received packet, when this duplicate is received, retransmit current packet

![[Pasted image 20230507142637.png|450|450]]
## RDT 3: channels with errors and loss
- Assumes underlying channel may lose packets of data / ACKs
- Sender has a timeout for ACK waiting to prevent a [[Concurrency#Deadlocks|deadlock]] from occurring, retransmits if this timeout occurs but requires a timer.

![[Pasted image 20230507143426.png|450|450]]

- RDT3 goes through the following process during communication:
	1.  Sender sends a packet to the receiver with a sequence number.
	2.  Receiver receives the packet and sends an ACK to the sender indicating success. If the packet is corrupt or missing, the receiver sends a NAK instead.
	3.  Sender waits for  ACK/NAK. If it receives an ACK, it sends the next packet with the next sequence number. If it receives a NAK, it resends the previous packet.
	4.  Sender sends a duplicate packet with the same sequence number as before
	5.  Receiver detects a duplicate packet & discards it, as it has already received and ACKd that packet.
	6.  Receiver sends an ACK: indicating that it has received and processed the duplicate packet.
- RDT3 scenario examples:

![[Pasted image 20230507143630.png|450|450]]![[Pasted image 20230507143725.png|450|450]]

- Poor performance due to use of stop-and-wait operation, ACK is needed before more packets may be sent to receiver. This can be remedied through the use of pipelining 

![[Pasted image 20230507144750.png|450|450]]
## Pipelined protocol
- Sender allows multiple yet-to-be-ACKd packets. This requires buffering at the sender and/or receiver as well as an increase in the range of sequence numbers available
- Two core pipelining protocols exist, these being: 
	- **Go-back-N**: sender may have up to N un-ACKd packets in pipeline window, the sender has a timer was last sent un-ACKd packet and retransmits all of them when its timer expires. The receiver only sends a cumulative ACK that requires all packets to have arrived 
	- **Selective repeat**: sender may have up to N un-ACKd packets in pipeline window, receiver sends individual ACK for each packet. Extra overhead as sender maintains timer for all packets

![[Pasted image 20230507145334.png|450|450]]
