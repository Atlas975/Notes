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

![[Pasted image 20240512192216.png|350|350]]
## Paxos roles
- **Proposers:** Initiate the agreement process.
- **Acceptors:** Participate in the agreement to choose a proposal.
- **Learners:** Learn the outcome of the agreement

![[Pasted image 20240512181043.png|250|250]]

- These roles can be merged such as with learners commonly being merged with acceptors
- Each node must also write it's state transitions to disk, allowing for partial recovery upon a crash  
- The majority vote (quorum) is expected prior to phase 2 for the case where multiple proposers appear due to presumed failure from other proposers. 
## Paxos Process
1. Prepare & Promise
	- **Proposer** sends a "prepare" request with a unique number (to all nodes including self)
	- **Acceptors** respond with a "promise" not to accept a lower number.
1. Acceptance
	- **Proposer** sends "accept" request for proposed value if a majority of acceptors promised.
	- **Acceptors** accept the proposal if they have not promised to a higher proposal number. This number along with the new value is also written to disk prior to sending it's reply


![[Pasted image 20240512182756.png|450|450]]
### Paxos in operation

- Paxos ensures that if a proposal with a particular number is chosen, then every higher-numbered proposal issued by any proposer will also choose the same value.
- The protocol typically includes a mechanism for proposers to learn the last value that was agreed upon, to support proposals for subsequent values.

## Failure resistance
- **Proposer failures:** The system continues if there are other proposers. This can still trigger after a promise is sent via a timeout from waiting for phase 2
- **Acceptor failures:** As long as a majority of acceptors are functional, the system can continue.

![[Pasted image 20240512183321.png|450|450]]

- Paxos is also able to tolerate a proposer failure after partially sending out accept requests and nodes have already written accepted values to disk
- This is handled via the node that didn't receive an accept request. This node can accept the original value by communicating with other live nodes and accepting a new proposal number 

![[Pasted image 20240512190148.png|450|450]]

```
onPrepare(n) 
    if (n > N)
        N=n 
        write(n) 
        if (value != null) // used to share value if proposer failed accept phase
            promise(N,lastN,value) 
        else 
            promise(N) 
```
## Paxos uses

- **Multi-Paxos:** used for agreeing on a sequence of values, where Paxos is run multiple times. This struggles with dynamic membership where the quorum is not always known
- **Configuration:** Often used in systems where a sequence of commands must be agreed upon by all nodes, such as replicated state machines.
### Safety and Liveness
- **Safety:** guarantees that no two nodes make different decisions on the same proposal.
- **Liveness:** system will eventually make progress in the absence of excessive failures.

## Implications for distributed systems

- Paxos is critical for systems requiring strong consistency and availability in the face of network partitions and node failures. Requires a minimum of 3 nodes
- Paxos does not support [[Byzantine_generals_problem|Byzantine]] fault tolerance as it assumes that no node makes attempts to subvert the protocol. The protocol only assumes failure is indistinguishable by latency
