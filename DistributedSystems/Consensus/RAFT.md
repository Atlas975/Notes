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

on recovery from crash do
    currentRole, currentLeader := follower, null // restore role and leader as default
    votesReceived, sentLength, ackedLength := {}, [], [] // clear in-memory states

on nodeId suspects leader failed or election timeout do
    currentTerm := currentTerm + 1; currentRole := candidate // increment term
    votedFor := nodeId; votesReceived := {nodeId} // vote for self
    lastTerm := 0 // default last term to zero
    
    if log.length > 0 then
        lastTerm := log[log.length - 1].term // update last term from log if not empty
    
    msg := (VoteRequest, nodeId, currentTerm, log.length, lastTerm) // create vote req
    for each node in nodes:
        send msg to node // send vote request to all nodes
    start election timer // begin timer for election timeout
```
### RAFT candidate response
- On receiving a vote request as a candidate another protocol takes place. This protocol allows voting for a single candidate multiple times but not multiple candidates during an election
- This must ensure the new term number proposed is higher than the nodes own. It must also make sure that the candidates log is more up to date than it's own by looking at log.length 

```c
on receiving (VoteRequest, cid, cTerm, cLogLength, cLogTerm) at node nodeId do
    if cTerm > currentTerm then
        currentTerm, currentRole := cTerm, follower // update current term and role
        votedFor := null // reset votedFor since a higher term is seen

    lastTerm := 0 // initialize lastTerm
    if log.length > 0 then
        lastTerm := log[log.length-1].term // get the last term from the log
    logOk := (cLogTerm > lastTerm) | (cLogTerm == lastTerm AND cLogLength >= log.length)

    if cTerm == currentTerm AND logOk AND votedFor in {cid, null} then
        votedFor := cld // cast vote for candidate
        send (VoteResponse, nodeId, currentTerm, true) to node cld // positive vote
    else
        send (VoteResponse, nodeId, currentTerm, false) to node cld // negative vote
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
        
        currentRole, currentLeader := leader, nodeId 
        cancel election timer 
        for each follower in nodes - {nodeId} do
            sentLength[follower] := log.length 
            ackedLength[follower] := 0  // Reset ACK length 
            replicateLog(nodeId, follower) // Start log replication to the follower
        
    else if term > currentTerm then
        currentTerm := term // Update the current term to the higher term
        currentRole := follower // Demote to follower
        votedFor := null // Reset voted candidate
        cancel election timer // Stop the election timer
```

## Client request multicast 
- Clients in RAFT need to be able to perform total order multicast to ensure all nodes commit messages in the same order. Note that client requests should go to the leader
- `ackedLength` tracks the highest index of the log entries that have been successfully acknowledged (i.e., replicated and confirmed) by each follower node in the cluster.

```
on request message msg from a client received at nodeId do
    if currentRole != leader then
        forward the request to currentLeader
    
    append the (msg, currentTerm) to log
    ackedLength[nodeId] := log.length // set self as having ACK'd to msg
    for each follower in nodes except {nodeId} do
        replicateLog(nodeId, follower)

periodically at nodeId if currentRole == leader do
    for each follower in nodes - {nodeId} do
        replicateLog(nodeId, follower)
```

- The leader accepts client commands, appends them to its log, and then replicates these entries 
- Followers append entries to their logs once they are assured of their safety and correctness, as dictated by the leader node 
## Replicating the log 
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
### Follower log request processing 
- Followers must accept their role if the node's term number is lower than the leader's  
- Followers must also reset voting preferences, confirms the legitimacy of the leader for the current term, checks log consistency, and either appends new entries or responds with failure

```c
on receiving (LogReq, leaderId, term, prefixLen, prefixTerm, leaderCommit, entries) do
    if term > currentTerm then
        currentTerm := term; votedFor := null
        cancel election timer

    if term == currentTerm then
        currentRole := follower; currentLeader := leaderId
    logOk := (log.len>=prefixLen) && (prefixLen==0 || log[prefixLen-1].term==prefixTerm)

    if term == currentTerm && logOk then
        appendEntries(prefixLen, leaderCommit, suffix)
        ack := prefixLen + suffix.length
        send (LogResponse, nodeId, currentTerm, ack, true) to leaderId
    else // used to remedy the difference in leaders ACK len for this node and reality
        send (LogResponse, nodeId, currentTerm, 0, false) to leaderId
```
### Updating follower logs 
- Checks if the new entries from the leader are consistent with the existing log entries on the follower. If inconsistencies are found, the follower’s log is truncated to the point of agreement
- After appending entries, if the leader’s commit index is greater than the follower’s, the function updates the follower's commit index and applies the newly committed entries to the application

```rust
fn appendEntries(prefixLen, leaderCommit, suffix)
    if suffix.length > 0 && log.length > prefixLen then
        index := min(log.length, prefixLen + suffix.length) - 1
        if log[index].term != suffix[index - prefixLen].term then
            log := log[:prefixLen]

    if prefixLen + suffix.length > log.length then
        for i := log.length - prefixLen to suffix.length - 1 do
            append suffix[i] to log

    if leaderCommit > commitLength then
    for i := commitLength to leaderCommit - 1 do
        deliver log[i].msg to the application
    commitLength := leaderCommit
```

- The leader sends `AppendEntries` requests to its followers. These entries are committed once the leader has safely replicated them on a majority of servers.
- Followers append entries to their log based on the leader’s `AppendEntries` requests.
## Leader processing log responses 
- Involves updating the state of the log replication process based on responses from followers, ensuring that all nodes in the cluster eventually agree on the log content
- If this fails the leader decrements the `sentLength[follower]` to retry sending the log entry 

```c
on receiving (LogResponse, follower, term, ack, success) at nodeId do
    if term != currentTerm | currentRole != leader then
        return
    if success == true && ack > ackedLength[follower] then
        sentLength[follower] := ack
        ackedLength[follower] := ack
        commitLogEntries()
    else if sentLength[follower] > 0 then // follower has missing log entries 
        sentLength[follower] -:= 1
        ReplicateLog(nodeId, follower)
    else if term > currentTerm then
        currentTerm := term
        currentRole := follower
        votedFor := null
        cancel election timer
```


### Leader committing log entries 
- Any log entries that have been ACK'd by a quorum are ready to be committed. When a log entry is committed, it's message can then be delivered to the application 
- This approach ensures that all committed entries are replicated across a majority of nodes, thus maintaining consistency and durability in the cluster's state.

```rust
fn commitLogEntries
    while commitLength < log.length do
        acks := 0
        for each node in nodes do
            if ackedLength[node] > commitLength then
                acks := acks + 1
        if acks >= ([|nodes| + 1] / 2) then
            deliver log[commitLength].msg to the application
            commitLength := commitLength + 1
        else
            break
```

## Advantages of RAFT
- **Understandability:** Unlike Paxos, RAFT is structured around a strong leadership and simpler logical foundations, making it easier to understand and implement.
- **Efficiency:** RAFT optimises the process of log replication and leader election, reducing the overhead and complexity associated with these processes.

