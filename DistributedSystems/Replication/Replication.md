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
# Replication
- Replication involves creating multiple copies of the same data across different servers or locations to improve reliability and performance.
- This approach helps in handling failures and distributing workload efficiently. The need for this becomes unavoidable as a system gets larger

![[Pasted image 20240512005312.png|450|450]]

## State Machine Replication (SMR)

- In SMR, each replica processes the same sequence of messages, ensuring that all replicas maintain the same state. 
- This replication strategy is fundamental in systems where consistency is critical, such as databases and critical application logs.


![[Pasted image 20240512174845.png|450|450]]

## Consistency levels
1. **Strong**: updates to a replica are visible immediately to all other replicas. Comes with a large overhead and is typically done with a [[Paxos|consensus protocol]] eg SMR
2. **Eventual consistency**: updates to a replica will eventually be visible to all other replicas. Higher availability ([[Brewers_CAP_theorem|CAP]]) but updates may be seen in a different order depending on the replica
	- This requires being able to deal with potential conflicts, eg google docs, [[Git]] collab
	- Replicas can locally order events using [[Time_keeping#Vector clocks|Vector clocks]]

![[Pasted image 20240513161119.png|400|400]]

## Conflict-free replicated data types (CRDT)
- A family of algorithms that perform conflict resolution. Designed to handle data replication where nodes can update data independently and [[Concurrency|concurrently]] without central coordination.
- These exist in two types 
	- **Operation-based CRDTs:** replicas broadcast only update operations to all other replicas. Must use reliable multicast
	- **State-based CRDTs:** replicas broadcast their entire state to other replicas. Can use best-effort multicast


### Last writer wins
- A simple approach to dealing with write-write conflictThe most recent update (based on timestamp) overwrites earlier updates.
- This is simple to implement as the only other piece of metadata required are timestamps. This can be used after a network partition has been resolved 

```python
def set(k: key, v: value):
    t = newTimestamp()  # globally unique
    reliable_broadcast(t, k, v)  # send to everyone reliably

def onReceiveSetRequest(t, k, v):
    previousTime, value = getLocal(k)
    if previousTime is None or previousTime < t:
        setLocal(k, v, t)
```

### State-based methods
- Good for eventual consistency as broadcast messages are large containing a large amount of information with each send 
- This can tolerate the lost of messages making best-effort comm
- Typically use best-effort based broadcasting as the sending of the entire state can be used to make large updates with each send 

```python
def set(k: key, v: value):
    t = newTimestamp()  # globally unique
    localState[k] = {"value": v, "time": t}  # update local state
    best_effort_broadcast(localState)  # send to everyone

def onReceiveSetRequest(state): # merge - local-state U remote-state
    for time, key, val in state.pairs:
        if key in localState.keys():
            previousTime = localState.get(k)[time]
            if previousTime < time:
                setLocal(k, v, t)
        else:
            localState.append({time, key, val})
```
### Safety and Consistency

- **Term Uniqueness:** Each server’s log includes a term number for each entry, which helps servers detect inconsistencies between their logs and the leader’s.
- **Committing Entries:** An entry from the current term that has been replicated on a majority of the servers is considered committed and can be applied to the state machines.

### Failure Handling

- **Leader Crashes:** If a leader crashes, followers perceive the lack of heartbeat and start a new election.
- **Network Partitions:** RAFT handles network partitions by ensuring that no data loss occurs as long as a majority of the servers can communicate with each other.

### Conflict Resolution

- **Scenario:** Conflicts occur when two replicas receive updates to the same data in different orders.
- **Mechanisms:** Systems must employ mechanisms to resolve these conflicts to maintain data integrity and consistency.
- **Example Mechanisms:**
	- **Last Writer Wins:** 
	- **Merge Operations:** Conflicting updates are merged based on predefined rules, which may involve user intervention or automated processes.

### Conflict-Free Replicated Data Types (CRDTs)

- **Purpose:** 
- **Types:**


### Use Cases for Eventual Consistency

- Applications like collaborative software (Google Docs, Office365), note-taking apps (Evernote, OneNote), and shared calendars benefit from eventual consistency by allowing concurrent updates that are resolved into a consistent state over time.

### Challenges with Eventual Consistency

- **Handling Conflicts:** The system must correctly identify and resolve conflicts to ensure that all replicas converge to a consistent state.
- **Performance:** While eventual consistency can improve performance by reducing the need for immediate synchronization, it requires robust conflict resolution mechanisms which can complicate system design.

### Summary

Understanding different levels of consistency and the mechanisms for managing them is crucial in distributed system design, especially when dealing with replicated data. Systems must balance the need for immediate consistency against performance and availability, often opting for solutions like CRDTs or eventual consistency depending on the application requirements.
