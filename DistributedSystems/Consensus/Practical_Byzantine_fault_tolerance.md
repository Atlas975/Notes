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
- PBFT is designed to handle [[Byzantine_generals_problem|Byzantine]] faults within distributed systems, ensuring that all non-faulty nodes agree on their states even if some nodes exhibit arbitrary failures.
- This requires both $3f +1$ nodes and a 2-phase communication protocol (eg [[Paxos]], used to carry out any operation that hasn't been reflected in all replicas). 
- $2f+1$ messages are always required for a quorum in this protocol 
## PBFT clients
- Uses a primary-backup scheme for replicas, this means clients send requests to primary. It's only if this times out that the client broadcasts a message to all replicas.
- If this broadcast occurs, $f+1$ identical replies are expected. Replicas must carry out the PBFT protocol to ensure the replies from honest nodes are correct 

![[Pasted image 20240513110047.png|450|450]]

## Ordering requests
- Group initially runs with the primary handling message ordering. The backups must ensure that the primary is behaving correctly as this too is vulnerable to Byzantine failure 
- A view represents a specific configuration in which one of the replicas is designated as the primary. Backups must trigger view change requests if the primary is faulty


![[Pasted image 20240513110645.png|450|450]]

## PBFT quorum
- Unlike crash failures where each node votes on one operation at a time, it's not sufficient for quorum's to just intersect. Nodes may vote for multiple operations if malicious 
- This requires the intersection between 2 quorums to have at least 1 honest node. Leading to a min total of $3f+1$ nodes being present overall (super majority rule)

![[Pasted image 20240513120031.png|500|500]]
## PBFT process
1. **Client request handling:** clients sends requests to primary. Multicasts if primary isn't responsive
2. **Pre-prepare phase:** primary assigns a seq number to each request (determining order of request execution). This also contains the primary's signature to verify identity prior to multicast

![[Pasted image 20240513120827.png|170|170]]

3. **Prepare phase:** upon receiving the pre-prepare message, replicas enter the prepare phase and multicast a prepare message to other replicas.
4. **Prepare message accumulation**: replicas collect prepare messages, and upon achieving a "prepare quorum" ($2f+1$ messages), they enter the commit phase.


![[Pasted image 20240513121128.png|400|400]]

5. **Commit phase**: each replica shares what it heard in the prepare phase, multicasting proof that it has accumulated $2f+1$ prepare messages. Each message is signed using a priv key
2. **Execution and reply:** once a commit quorum is achieved, replicas execute the request and send a reply to the client with an agreed on sequence number

![[Pasted image 20240513122556.png|400|400]]


## Failure scenarios 
- **Safety attack**: primary sends different prepare messages with same seq number to different replicas (double voting), this is protected from by the $2f+1$ quorum requirement
- **Liveness attack**: primary does not forward client requests, this is protected from via view change


## Security Features
- **Message authentication:** all messages (client requests and replica messages) are [[Cryptography#Digital signature|signed]]  to prevent spoofing and replay attacks using a node's private key.
- **View changes:** handles primary failures by enabling a new primary election through a view change process. This can be triggered via timeouts or detection that the primary is malicious
## PBFT limitations
- **Scalability:** the communication overhead and large message sizes can lead to high latency, particularly as the number of replicas increases. $O(n^2)$ in 2-phase multicast
- **Performance:** can degrade significantly with an increase in the number of faulty nodes.

