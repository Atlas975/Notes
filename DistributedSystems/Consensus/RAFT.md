> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems/Consensus
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# RAFT
- A consensus protocol designed to be more understandable than [[Paxos|Multi-Paxos]]. It ensures that multiple replicas agree on the sequence and state of log entries in a [[Distributed_systems|distributed system]]
- Crucial for maintaining a consistent replicated state machine with totally-ordered client requests. 
## RAFT leader 
- RAFT is a leader driven protocol, with the leader chosen through an election system. 
- The leader is responsible for the following: 
    - Accepting client requests and replicating them across replicas
    - Telling other replicas when it's safe to commit log entries (using [[Remote_invocation|RPC]])
    - Ensuring that if any log is already committed, it will eventually be present in the logs of all other replicas using the same log index (index is never rewritten)
- Log entries also contain a term number. This indicates which leader committed these logs. This term is used as a [[Time_keeping|logical clock]]. Replicas on older term numbers can have messages ignored 

![[Pasted image 20240513131349.png|250|250]]


### RAFT election
- Replicas start as followers. A follower can become a candidate leader if it suspects there is no viable leader, which could happen if it stops receiving heartbeats from the leader.
- Candidates request votes from other replicas. Becoming the leader if it gains a majority quorum

![[Pasted image 20240513132109.png|350|350]]
### RAFT Operations

- **Election Process:**
    - Terms are used to measure time in RAFT, and each term starts with an election.
- **Log Management:**
    - The leader accepts client commands, appends them to its log, and then replicates these entries across its followers.
    - Followers append entries to their logs once they are assured of their safety and correctness, as dictated by the leader.

### Detailed Processes in RAFT

- **Leader Election:**
    - A timeout triggers the election process if a follower receives no communication from a leader.
    - The follower transitions to a candidate and starts a new election term, voting for itself and requesting votes from others.
    - A candidate becomes a leader if it receives votes from a majority of the servers.
- **Handling Log Entries:**
    - The leader sends `AppendEntries` requests to its followers. These entries are committed once the leader has safely replicated them on a majority of servers.
    - Followers append entries to their log based on the leader’s `AppendEntries` requests.

### Safety and Consistency

- **Term Uniqueness:** Each server’s log includes a term number for each entry, which helps servers detect inconsistencies between their logs and the leader’s.
- **Committing Entries:** An entry from the current term that has been replicated on a majority of the servers is considered committed and can be applied to the state machines.

### Failure Handling

- **Leader Crashes:** If a leader crashes, followers perceive the lack of heartbeat and start a new election.
- **Network Partitions:** RAFT handles network partitions by ensuring that no data loss occurs as long as a majority of the servers can communicate with each other.

### Advantages of RAFT

- **Understandability:** Unlike Paxos, RAFT is structured around a strong leadership and simpler logical foundations, making it easier to understand and implement.
- **Efficiency:** RAFT optimizes the process of log replication and leader election, reducing the overhead and complexity associated with these processes.

### Applications

RAFT is widely used in distributed systems for managing replicated logs, ensuring data consistency, and handling failures gracefully. It is particularly effective in environments where system state needs to be replicated across multiple nodes reliably.