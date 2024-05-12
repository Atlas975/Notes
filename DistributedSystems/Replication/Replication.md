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
- This approach helps in handling failures and distributing workload efficiently.


![[Pasted image 20240512005312.png|450|450]]

## State Machine Replication (SMR)

- In SMR, each replica processes the same sequence of messages, ensuring that all replicas maintain the same state. 
- This replication strategy is fundamental in systems where consistency is critical, such as databases and critical application logs.


![[Pasted image 20240512174845.png|450|450]]
### Consistency Levels

1. **Strong Consistency:**
    
    - **Definition:** Updates to any replica are visible immediately to all other replicas.
    - **Implementation:** Often implemented through a consensus protocol among replicas.
    - **Drawback:** Can lead to significant overhead and lower availability in the presence of network partitions.
2. **Eventual Consistency:**
    
    - **Definition:** Updates to one replica will eventually be visible to all other replicas.
    - **Characteristics:** Updates may be seen in a different order on different replicas, but all replicas will eventually converge to the same state.
    - **Suitability:** Useful in applications where immediate consistency is not critical.

### Conflict Resolution

- **Scenario:** Conflicts occur when two replicas receive updates to the same data in different orders.
- **Mechanisms:** Systems must employ mechanisms to resolve these conflicts to maintain data integrity and consistency.
- **Example Mechanisms:**
    - **Last Writer Wins:** The most recent update (based on timestamp) overwrites earlier updates.
    - **Merge Operations:** Conflicting updates are merged based on predefined rules, which may involve user intervention or automated processes.

### Conflict-Free Replicated Data Types (CRDTs)

- **Purpose:** Designed to handle data replication where nodes can update data independently and concurrently without central coordination.
- **Types:**
    - **Operation-based CRDTs:** Replicas broadcast update operations to all other replicas.
    - **State-based CRDTs:** Replicas broadcast their entire state to other replicas, which then merge this state with their own.

### Use Cases for Eventual Consistency

- Applications like collaborative software (Google Docs, Office365), note-taking apps (Evernote, OneNote), and shared calendars benefit from eventual consistency by allowing concurrent updates that are resolved into a consistent state over time.

### Challenges with Eventual Consistency

- **Handling Conflicts:** The system must correctly identify and resolve conflicts to ensure that all replicas converge to a consistent state.
- **Performance:** While eventual consistency can improve performance by reducing the need for immediate synchronization, it requires robust conflict resolution mechanisms which can complicate system design.

### Summary

Understanding different levels of consistency and the mechanisms for managing them is crucial in distributed system design, especially when dealing with replicated data. Systems must balance the need for immediate consistency against performance and availability, often opting for solutions like CRDTs or eventual consistency depending on the application requirements.