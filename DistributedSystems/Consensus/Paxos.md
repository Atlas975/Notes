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
Paxos is a consensus protocol that ensures that multiple parties can agree on a single value even in the presence of failures. It is widely used to achieve reliability in distributed systems through replication.

### Assumptions for Paxos

- **Node Behavior:** Nodes may operate at arbitrary speeds, fail, recover, and rejoin without attempting to subvert the protocol.
- **Message Handling:** Messages are sent asynchronously and can be delayed, lost, reordered, or duplicated.
- **Failure Indistinguishability:** Failures are indistinguishable from latency, requiring the protocol to handle mistaken failure detections.

### Paxos Roles

- **Proposers:** Initiate the agreement process.
- **Acceptors:** Participate in the agreement to choose a proposal.
- **Learners:** Learn the outcome of the agreement.

### Paxos Process

#### Phase 1: Prepare & Promise

- **Proposer** sends a "prepare" request with a unique proposal number.
- **Acceptors** respond with a "promise" not to accept any earlier proposals.

#### Phase 2: Acceptance

- **Proposer** sends an "accept" request for a proposed value if a majority of acceptors promised.
- **Acceptors** accept the proposal if they have not promised to a higher proposal number.

### Paxos in Operation

- Paxos ensures that if a proposal with a particular number is chosen, then every higher-numbered proposal issued by any proposer will also choose the same value.
- The protocol typically includes a mechanism for proposers to learn the last value that was agreed upon, to support proposals for subsequent values.

### Handling Failures

Paxos is designed to handle different types of failures:

- **Proposer Failures:** The system continues if there are other proposers.
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