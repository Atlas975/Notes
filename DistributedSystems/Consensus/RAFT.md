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
### RAFT leader election
- Replicas start as followers. A follower can become a candidate leader if it suspects there is no viable leader, which could happen if it stops receiving heartbeats from the leader.
- Candidates request votes from other replicas. Becoming the leader if it gains a majority quorum

![[Pasted image 20240513132109.png|350|350]]

```c
on initialisation do
    currentTerm, votedFor := 0, null // stored on disk - preserve in case of crash
    log, commitLength := [], 0 // stored on disk
    currentRole, currentLeader := follower, null // in-memory storage
    votesReceived, sentLength, ackedLength := {}, [], [] // in-memory storage
end

on recovery from crash do
    currentRole, currentLeader := follower, null // restore role and leader as default
    votesReceived, sentLength, ackedLength := {}, [], [] // clear in-memory states
end

on nodeId suspects leader failed or election timeout do
    currentTerm := currentTerm + 1; currentRole := candidate // increment term
    votedFor := nodeId; votesReceived := {nodeId} // vote for self
    lastTerm := 0 // default last term to zero
    
    if log.length > 0 then
        lastTerm := log[log.length - 1].term // update last term from log if not empty
    end if
    
    msg := (VoteRequest, nodeId, currentTerm, log.length, lastTerm) // create vote req
    for each node in nodes:
        send msg to node // send vote request to all nodes
    start election timer // begin timer for election timeout
end
```
### RAFT candidate response
- On receiving a vote request as a candidate another protocol takes place. This protocol allows voting for a single candidate multiple times but not multiple candidates during an election
- This must ensure the new term number proposed is higher than the nodes own. It must also make sure that the candidates log is more up to date than it's own by looking at log.length 

```c
on receiving (VoteRequest, cid, cTerm, cLogLength, cLogTerm) at node nodeId do
    if cTerm > currentTerm then
        currentTerm, currentRole := cTerm, follower // update current term and role
        votedFor := null // reset votedFor since a higher term is seen
    end if

    lastTerm := 0 // initialize lastTerm
    if log.length > 0 then
        lastTerm := log[log.length-1].term // get the last term from the log
    end if
    logOk := (cLogTerm > lastTerm) | (cLogTerm == lastTerm AND cLogLength >= log.length)

    if cTerm == currentTerm AND logOk AND votedFor in {cid, null} then
        votedFor := cld // cast vote for candidate
        send (VoteResponse, nodeId, currentTerm, true) to node cld // positive vote
    else
        send (VoteResponse, nodeId, currentTerm, false) to node cld // negative vote
    end if
end
```

### RAFT vote collection
- This protocol must handle 2 scenarios:
    - If a candidate node receives enough affirmative votes (a quorum , it assumes the role of the leader and initiates log replication to followers
    - If it encounters a vote with a term higher than its current term, it demotes itself to a follower to respect the more up-to-date information from other nodes
```c
on receiving (VoteResponse, voterId, term, granted) at nodeId do
    if currentRole == candidate AND term == currentTerm AND granted then
        votesReceived.add(voterId) // add 
        if votesReceived.length < ceil(|nodes.length| + 1) / 2) then // failed quorum  
            return
        end if
        
        currentRole, currentLeader := leader, nodeId 
        cancel election timer 
        for each follower in nodes - {nodeId} do
            sentLength[follower] := log.length 
            ackedLength[follower] := 0  // Reset ACK length 
            replicateLog(nodeId, follower) // Start log replication to the follower
        end for
        
    else if term > currentTerm then
        currentTerm := term // Update the current term to the higher term
        currentRole := follower // Demote to follower
        votedFor := null // Reset voted candidate
        cancel election timer // Stop the election timer
    end if
end
```

## Client request multicast 
- Clients in RAFT need to be able to perform total order multicast to ensure all nodes commit messages in the same order. Note that client requests should go to the leader
- `ackedLength` tracks the highest index of the log entries that have been successfully acknowledged (i.e., replicated and confirmed) by each follower node in the cluster.

```c
on request message msg from a client received at nodeId do
    if currentRole != leader then
        forward the request to currentLeader
    end if
    
    append the (msg, currentTerm) to log
    ackedLength[nodeId] := log.length // set self as having ACK'd to msg
    for each follower in nodes except {nodeId} do
        replicateLog(nodeId, follower)
    end for
end do

periodically at nodeId if currentRole == leader do
    for each follower in nodes - {nodeId} do
        replicateLog(nodeId, follower)
    end for
end do
```
### Replicating the log 
- Called on the leader when there is a new message in the log and also periodically 
- This is done by creating a suffix containing all logs not sent to the chosen follower, this may be empty but is done anyway to act as a heartbeat to indicate 

```rust
fn replicateLog(leaderId, followerId)
    prefixLen := sentLength[followerId] 
    suffix := log[prefixLen:]
    prefixTerm := log[prefixLen - 1].term if prefixLen > 0 else 0

    to followerId:
        send (LogReq, leaderId, curTerm, prefixLen, prefixTerm, commitLength, suffix) 
```
## RAFT process

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
