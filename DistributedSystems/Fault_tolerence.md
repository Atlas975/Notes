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
# Fault tolerance
- The process of ensuring that a system continues to operate correctly despite failures. 
- Involves understanding the nature of failures and mitigating their impacts.
## Fault tolerance terms
- **Failure:** inability of a system component to perform its required function.
- **Error:** transition of a system into an invalid state, caused by a fault.
- **Fault:** the root cause of an error or failure in the system. From easiest to hardest to detect:
	- **Omission:** Expected response or event does not occur. 
	- **Crash:** System stops responding entirely.
	- **Timing:** Response arrives outside the expected timeframe.
	- **Byzantine:** Responses are erroneous, unpredictable, or malicious.

![[Pasted image 20240512161001.png|350|350]]


## Service performance
- At a high level a service can be modeled in terms of availability (readiness to offer a service) and reliability (continuity of correct service)
- Improving one often has a tradeoff with another eg a system that never crashes but requires frequent maintenance hash high reliability but low availability 
- This often relies on ==graceful degradation== where total failure is avoided by potentially reducing services (availability). Gives devs time to react


## Impossibility of distributed consensus
- The only way to detect crash failures is to ping a node and wait for response, however it is impossible to determine how long a wait time is sufficient 
- There is no way of distinguishing between a crash vs being slow, busy, network delay. Instead an upper bound of wait time needs to relied on
- This can lead to network partitions if a node comes back online after presumed failure, meaning a system also needs a way to deal with inconsistent states

![[Pasted image 20240512162704.png|300|300]]
## Fault tolerance approaches
- [[Replication]]: running multiple copies of a service to ensure availability + reliability.
- **N-Version Design:** design a system in multiple different ways, reduces the likelihood that all versions will be vulnerable to the same class of error 
- **Checkpointing / operation logs:** regularly saving the state of a system to enable recovery from recent checkpoints in case of a failure. 
## Message ordering
- Message ordering is critical in distributed systems to ensure consistency and reliability, especially when using replication for fault tolerance. 
- This refers to the order at which messages arrive at the application layer. The [[Group_communication|group communication]] middleware can optionally buffer and re-order messages 
- Depending on the ordering scheme more or less flexibility can be given as to how replicas receive new messages, strict message ordering comes with high complexity

![[Pasted image 20240512172235.png|200|200]]


### Message ordering schemes
- **No ordering:** messages are processed as they arrive, regardless of their order. With stateful systems this is challenging to reorder due to needing synced [[Time_keeping|timestamps]]
- **FIFO:** messages from the same sender are processed in the order they were sent. This gives partial ordering and can easily be handled by logical timestamps / sequence numbers 

![[Pasted image 20240512173605.png|200|200]]
- **Causal ordering:** Messages are processed according to causal (happens-before) relationships (if it exists), irrespective of their send order. Offers partial ordering
- **Total ordering:** all messages are processed in the same strict order by all processes. This requires distributed consensus by all processes for a ordering scheme (needs a central leader). Leaders typically multicast new messages via FIFO ordering

![[Pasted image 20240512173914.png|350|350]]



## Consensus Algorithms
- Consensus is necessary when multiple nodes must agree on a single data value or a sequence of events in a distributed system. Key consensus algorithms include:
	- [[Paxos]]: A protocol that ensures consensus even in the presence of failures.
	- [[RAFT]]: A more understandable and easier to implement version of Paxos
- Note that consensus isn't guaranteed if the majority of nodes fails. However, most consensus algorithms are guarantee to avoid situations where 2+ values are agreed on at the same time

