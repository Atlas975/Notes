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
# Paxos
- A consensus protocol that ensures that multiple parties can agree on a single value even in the presence of failures. Used to achieve reliability in [[Distributed_systems|distributed systems]] through [[Replication|replication]].
- The value agreed on must be comparable with other values to allow conflicts to be broken, the result being through a series of communication rounds the largest value is agreed one
- Paxos does not support [[Byzantine_generals_problem|Byzantine]] fault tolerance as it assumes that no node makes attempts to subvert the protocol. The protocol only assumes failure is indistinguishable by latency
## Paxos Roles
- **Proposers:** Initiate the agreement process.
- **Acceptors:** Participate in the agreement to choose a proposal.
- **Learners:** Learn the outcome of the agreement

![[Pasted image 20240512181043.png|250|250]]

- These roles can be merged such as with learners commonly being merged with acceptors
- Each node must also write it's state transitions to disk, allowing for partial recovery upon a crash  
## Paxos Process

1. Prepare & Promise
	- **Proposer** sends a "prepare" request with a unique proposal number.
	- **Acceptors** respond with a "promise" not to accept lower proposals.

![[Pasted image 20240512182601.png|450|450]]
1. Acceptance
	- **Proposer** sends "accept" request for proposed value if a majority of acceptors promised.
	- **Acceptors** accept the proposal if they have not promised to a higher proposal number.


![[Pasted image 20240512182756.png|450|450]]
### Paxos in operation

- Paxos ensures that if a proposal with a particular number is chosen, then every higher-numbered proposal issued by any proposer will also choose the same value.
- The protocol typically includes a mechanism for proposers to learn the last value that was agreed upon, to support proposals for subsequent values.

## Failure resistance
- **Proposer Failures:** The system continues if there are other proposers. This can still trigger after a promise is sent via a timeout from waiting for the acceptance stage

![[Pasted image 20240512183321.png|450|450]]

- **Acceptor Failures:** As long as a majority of acceptors are functional, the system can continue.

### Practical Usage of Paxos

- **Multi-Paxos:** Used for agreeing on a sequence of values, where Paxos is run multiple times.
- **Configuration:** Often used in systems where a sequence of commands must be agreed upon by all nodes, such as replicated state machines.

### Safety and Liveness

- **Safety:** Paxos guarantees that no two nodes make different decisions on the same proposal.
- **Liveness:** Paxos ensures that the system will eventually make progress in the absence of excessive failures.

### Implications for Distributed Systems

Paxos is critical for systems requiring strong consistency and availability in the face of network partitions and node failures. It is used in many practical systems to synchronize state, such as in databases and distributed ledgers.

### Summary

Paxos provides a foundation for building reliable distributed systems through consensus. It balances the complexity of ensuring agreement across distributed components with the need for system performance and fault tolerance.
