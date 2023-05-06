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

![[Pasted image 20230506231701.png|500|500]]

- When recovery from errors is required, RDT's make use of:
	- **Acknowledgements (ACKs)**: receiver tells sender that packet received OK
	- **Negative acknowledgement (NAKs)**: receiver tells sender packer has errors, immediate re-transmission occurs when a NAK is received  
## RDT 1: reliable transfer over a reliable channel
- Assumes underlying channel is perfectly reliable with no bit errors / packet loss 
- Separate [[Finite_state_machines|FSM]] exists for sender and receiver

![[Pasted image 20230506230702.png|550|550]]
## RDT 2: channel with bit errors
- Allows for re-transmission of packets to occur if corrupt, each packet is also given a sequence number with the receiver discarding any duplicate packets that may arrive
- Not able to handle corruption on ACKs and NAKs due to working on a stop and wait model

![[Pasted image 20230506232409.png|500|500]]

## RDT 2.1: sender handles garbled confirmations
- 
- 
![[Pasted image 20230506233041.png|500|500]]