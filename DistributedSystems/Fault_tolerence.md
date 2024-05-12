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
# Fault tolerence
- The process of ensuring that a system continues to operate correctly despite failures. 
- Involves understanding the nature of failures and mitigating their impacts.


### Key Terminology

- **Failure:** The inability of a system component to perform its required function.
- **Error:** The transition of a system into an invalid state, caused by a fault.
- **Fault:** The root cause of an error or failure in the system.

### Types of Faults
- From easiest to hardest to detect:
- **Omission:** Expected response or event does not occur. 
- **Crash:** System stops responding entirely.
- **Timing:** Response arrives outside the expected timeframe.
- **Byzantine:** Responses are erroneous, unpredictable, or malicious.

## Failure Detection

- **Fail-stop Detection:** Systems can detect when a component has stopped functioning.
- **Byzantine Failure Detection:** Systems need mechanisms to handle erratic or malicious behavior, which is inherently harder to detect and manage.

### Impossibility of distributed consensus 
- The only way to detect crash failures is to ping a node and wait for response, however it is impossible to determine how long a wait time is sufficient 
- There is no way of distinguishing between a crash vs being slow, busy, network delay. Instead an upper bound of wait time needs to relied on


### Common Approaches to Fault Tolerance

- **Replication:** Running multiple copies of a service to ensure availability and reliability.
- **N-Version Design:** Implementing multiple versions of a system to reduce the likelihood of simultaneous identical failures.
- **Checkpointing and Operation Logs:** Regularly saving the state of a system to enable recovery from recent checkpoints in case of a failure.

### Byzantine Fault Tolerance

- Handling Byzantine faults, characterized by arbitrary and potentially malicious faults, requires sophisticated algorithms and multiple system redundancies. The solution often involves using a formula of 3𝑓+1 servers, where 𝑓 is the maximum number of tolerable faults.

### Practical Application and Challenges

- **Passive vs. Active Replication:** Choosing between these depends on the specific needs for fault tolerance, response time, and system complexity.
- **Byzantine Generals Problem:** A theoretical representation of the challenges in achieving reliable consensus in a network with faulty nodes.

### Overview of Message Ordering and Consensus in Fault Tolerance

This session expands on replication schemes for fault tolerance by introducing message ordering in group communications and consensus algorithms crucial for maintaining consistency across distributed systems.

### Message Ordering in Group Communications

Message ordering is critical in distributed systems to ensure consistency and reliability, especially when using replication for fault tolerance.

**Types of Message Ordering:**

- **No Ordering:** Messages are processed as they arrive, regardless of their order.
- **FIFO (First In, First Out):** Messages from a single sender are processed in the order they were sent.
- **Causal Ordering:** Messages are processed according to causal relationships, irrespective of their send order.
- **Total Ordering:** All messages are processed in the same strict order by all processes.

### System Model for Message Ordering

Assumes typical internet communication where messages can be reordered in transit. Group communication middleware may reorder these messages before they reach the application based on selected ordering semantics.

### Challenges with Global Time Ordering

Implementing global time ordering involves significant synchronization costs:

- **Timestamps:** Each message is timestamped; however, synchronization across distributed systems is challenging.
- **Wait Buffers:** Systems may need to buffer messages to process them in the correct order, introducing delays and potential inconsistencies.

### FIFO and Causal Ordering

- **FIFO:** Ensures messages from the same sender are processed in the order sent but does not order messages between different senders.
- **Causal:** Extends FIFO by including the ordering of messages across different senders when there is a causal relationship.

### Total Ordering

Total ordering requires all nodes to process messages in the exact same sequence, often implemented through a central coordinator or leader to dictate the order. This method can introduce bottlenecks and reduce system throughput.

### State Machine Replication (SMR)

In SMR, each replica processes the same sequence of messages or commands, ensuring that all replicas maintain the same state. This replication strategy is fundamental in systems where consistency is critical, such as databases and critical application logs.

### Consensus Algorithms

Consensus is necessary when multiple nodes must agree on a single data value or a sequence of events in a distributed system. Key consensus algorithms include:

- **Paxos:** A protocol that ensures consensus even in the presence of failures.
- **Raft:** Similar to Paxos but designed to be more understandable and easier to implement correctly.

### Practical Implications

The choice of message ordering and consensus algorithm can significantly impact the performance, reliability, and scalability of distributed systems. Systems must balance the need for strict ordering and consensus with the potential overhead introduced by these protocols.

### Conclusion

Understanding message ordering and consensus algorithms is essential for designing robust fault-tolerant systems. These concepts help ensure that distributed systems can continue to function correctly even in the presence of node failures or network issues.
