> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Group communication
-  A [[Distributed_systems#Middleware|middleware]] used for efficient data dissemination across networks, enabling applications like service discovery, publish/subscribe systems, replication, and shared channels.
- This middleware enables multicast of messages with a single action for either open membership (subscription based system) or closed membership (invitation only system)
## Communication models
- **Unicast:** 1:1, typical of web applications.
- **Broadcast:** 1:Many, where a message is sent to all nodes in a network.
- **Multicast:** Many:Many, supports group communication of either membership style:

### Multicast scalability
- The network bandwidth consumed by multicast differs from using multiple unicast
- Multiple Unicast results in a linear increase in bandwidth consumption with each additional due to separate messages being sent to each client 

![[Pasted image 20240508145803.png|450|450]]

- With [[Network_architecture|network]] infrastructure that supports multicast, bandwidth use is relatively constant regardless of number of recipients
- This is due to data being replicated only when necessary such as network junctions
### Communication model structures
- **Hierarchical:** Communication flows through a tiered structure.
- **Peer-to-Peer:** Nodes interact directly without hierarchical order.
- **Client-Server/Replicated Servers:** Central servers manage communication to multiple clients.
## Multicast reliability categories
- **Best-effort**: unreliable multicast (eg live streaming)
	- No delivery guarantee 
	- Message sent to all members but may or may not arrive 
- **Reliable multicast**: protection against faulty [[Network_architecture|network]]
	- Effort is made to ensure delivery in case of message loss (eg retransmission)
	- No guarantees if the sender crashes during multicast 
- **Atomic**:  (eg air traffic control)
	- All members receive a message or none of them does 
	- Guarantees protection against faulty nodes 

## Reliable multicast implementation
- Messages are sent to each group member with an ACK awaited from each of them. If an ACK is not received within a set time, the message is resent.
- Scalability issues arise due to potential "ACK explosion" where too many ACK's in a short time period can overwhelm the network.
### Negative acknowledgment (NACK)
- Used to indicate missing messages, potentially reducing the number of return messages 
- This makes use of sequence numbers to determine when a message is missing, requiring the sender to [[Caching|cache]] past messages for a long enough period for potential retransmission
- NACK's are only sent when a node notices it's sequence number is behind

![[Pasted image 20240509131534.png|400|400]]


### NACK suppression
- Helps avoid "NACK explosions". Message retransmission is done to all receivers in this setup
- When a receiver notices it's sequence number is behind, a NACK is also sent to all other receivers, allowing them to sup press any duplicate requests to the sender

![[Pasted image 20240509150305.png|350|350]]

### Hierarchical feedback control
- Uses a hierarchical structure allowing only coordinator nodes to communicate with the sender.  A local coordinator both forwards messages to children and handles retransmission
- Subgroups are typically formed based on geography, this acts as load balancing for the sender 

![[Pasted image 20240509151523.png|350|350]]


## Atomic multicast implementation
- Ensures the highest level of message reliability across group communications and can be built on top of reliable multicast. This is often needed for [[Replication|replica]] consistency 
- This allows for all other receivers to be updated even if the sender crashes mid-transmission

```
fn send(msg)
    for each node in group:
        reliable_multicast_send(msg, node)
 
Sender: 
    send(msg)

Reciever:
    if msg not in seen
        send(msg)
        accept m
        sequence_num += 1
    else:
        discard m
```

### Distributed commit
- Allows for atomic commitment, if a transaction is sent either all non-faulty nodes commit it or they all must abort. This also happens if any node crashes 
- This is typically done with a two phase commit (2PC)

![[Pasted image 20240509154901.png|300|300]]

- If a  `yes` response isn't heard back from all nodes a `global abort` is sent to halt commit
- The coordinator acts as a single point of failure, this can cause issues with receivers stalling if a crash happens mid-decision. Fault tolerance can be handled by writing to persistent [[Computer_memory|memory]]
