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
- Crucial for maintaining a consistent replicated state machine with totally-ordered client requests

### Key Features of RAFT

- **Leader Election:** RAFT dynamically elects a leader to manage the log replication across all other servers, ensuring that the leader's log is replicated on all followers.
- **Log Replication:** The leader takes client requests, turns them into log entries, and works to keep the logs consistent across all follower servers.
- **Safety:** Ensures that if any server has applied a log entry to its state machine, then that log entry is committed and will eventually be present in the logs of all other servers.

### RAFT Operations

- **Election Process:**
    - Servers start as followers. A follower can become a candidate if it suspects there is no viable leader, which could happen if it stops receiving heartbeats from the leader.
    - Candidates request votes from other servers. If a candidate gains a majority of votes, it becomes the leader.
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