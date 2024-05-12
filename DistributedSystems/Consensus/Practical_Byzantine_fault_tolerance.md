---
aliases:
  - PBFT
---
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
# Practical Byzantine fault tolerance
- PBFT is designed to handle Byzantine faults within distributed systems, ensuring that all non-faulty nodes agree on their states even if some nodes exhibit arbitrary failures.
- 

### Key Concepts of PBFT

- **State Machine Replication:** Ensures that each replica of the service processes requests in the same sequence, achieving consensus despite failures.
- **Replicas:** The system requires a minimum of 3𝑓+1 replicas to tolerate 𝑓 Byzantine faults, where 𝑓 is the maximum number of faulty nodes.

### How PBFT Works
1. **Client Request Handling:** Clients send requests to the primary replica. If the primary is non-responsive, the request is multicast to all replicas.
2. **Pre-Prepare Phase:** The primary assigns a sequence number to each request and multicasts a pre-prepare message to backup replicas.
3. **Prepare Phase:** Upon receiving the pre-prepare message, replicas enter the prepare phase and multicast a prepare message to other replicas.
4. **Commit Phase:** Replicas collect prepare messages, and upon achieving a "prepare quorum" (2f+1 messages), they enter the commit phase.
5. **Execution and Reply:** Once a commit quorum is achieved, replicas execute the request and send a reply to the client.

### Byzantine Faults Considered
- **Arbitrary Behavior:** Replicas can behave in any manner, including acting maliciously or erratically.
- **Failure Types:** Includes software errors and malicious attacks, where a node might not stop but continues to perform malicious activities.

### PBFT Client Interaction
- **Direct Interaction:** Clients can interact directly with any replica, typically sending requests to the primary.
- **Response Validation:** Clients wait for 𝑓+1f+1 matching replies to validate the response, ensuring responses are from non-faulty replicas.

### Quorum Requirements
- **Intersection:** Requires that the intersection of any two quorums have at least 𝑓+1 correct replicas to ensure a valid consensus.
- **Size of Quorum:** Each quorum must have at least 2𝑓+1 replicas to ensure that it includes a majority of correct replicas.

### Security Features
- **Message Authentication:** All messages (client requests and replica messages) are signed to prevent spoofing and replay attacks.
- **View Changes:** Handles primary failures by enabling a new primary election through a view change process.
### Challenges and Limitations
- **Scalability:** The communication overhead and large message sizes can lead to high latency, particularly as the number of replicas increases.
- **Performance:** PBFT's performance can degrade significantly with an increase in the number of faulty nodes.

### Practical Applications
PBFT is used in environments where the integrity and availability of a system are crucial, despite the presence of potential Byzantine failures.