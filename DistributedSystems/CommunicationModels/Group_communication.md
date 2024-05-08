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
- Multicast maintains low and relatively constant bandwidth usage regardless of the number of recipients due to sending a single message that is duplicated in the network only where necessary

![[Pasted image 20240508145803.png|450|450]]

## Types of group Communication

Group communication can vary based on membership and structure:

- **Structure:**
    - **Hierarchical:** Communication flows through a tiered structure.
    - **Peer-to-Peer:** Nodes interact directly without hierarchical order.
    - **Client-Server/Replicated Servers:** Central servers manage communication to multiple clients.

## Reliability Guarantees
- **Best Effort:** minimal reliability, messages may be lost.
- **Reliable Multicast:** Enhances reliability by trying to overcome message losses but does not guarantee delivery if the sender crashes.
- **Atomic Multicast:** Ensures all members receive the message, providing the highest level of reliability.

### Implementing Reliable Multicast

To implement reliable multicast:

- Messages are sent to each group member, and acknowledgments are awaited.
- If acknowledgments are not received within a set time, the message is resent.
- Scalability issues arise due to potential "ACK explosion" where too many acknowledgments can overwhelm the network.

### Advanced Techniques

- **Negative ACKs (NACKs):** Used to indicate missing messages, reducing the number of ACKs
- **NACK Suppression:** Limits redundant NACKs by suppressing duplicate message requests 
- **Hierarchical Feedback Control:** Uses a hierarchical structure to manage message retransmissions and acknowledgments effectively.

### Atomic Multicast and Distributed Commit

Atomic multicast and distributed commit protocols ensure the highest level of message reliability across group communications:

- **Atomic Multicast:** Either all or none of the recipients receive the message, ensuring consistency across distributed systems.
- **Distributed Commit (e.g., Two-Phase Commit):** Ensures that all actions (e.g., database transactions) are either committed or aborted across all nodes, preventing partial updates.

### Challenges and Considerations

Implementing group communication involves addressing several challenges:

- **Reliability:** How reliable does the communication need to be?
- **Scalability:** Can the system handle large numbers of users or nodes?
- **Ordering:** Are messages received in the order they were sent?
- **Coordination:** How are actions coordinated among group members?

### Practical Applications

Group communication is essential in many real-world applications:

- **Live Video Streaming:** One-to-many communication where the video stream is distributed to multiple viewers.
- **Air Traffic Control and Multi-player Gaming:** Many-to-many communication where multiple nodes interact in real-time.
- **Server Replication:** Ensures data consistency across replicated servers.

### Conclusion

Group communication systems must balance between complexity, efficiency, and reliability. The choice of the specific communication and reliability model depends on the application requirements and network environment.