> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems/DistributedLedgers
> **Created:** 16/04/2024 - 17:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Blockchain
- A growing list of records / blocks, with each block linked to the previous one via a cryptographic [[Hashing|hash]] function. This is an append-only ledger
- This use of linking via hash makes the technology highly resistant to tampering. Record of the transaction itself can then be safely stored in each block 

![[Pasted image 20240416173625.png|500|500]]

## Blockchain security features
- **Immutable Ledger:** Each block in the blockchain contains data, the hash of the previous block, and a timestamp, creating an unbreakable chain.
- **Tamper Resistance:** Modifying a single block requires recalculating all subsequent blocks, providing security against data tampering.
- **Decentralisation:** Data is not stored in any single location; instead, every participant has a copy of the entire ledger, enhancing transparency and security.
## Distributed Protocol
- Operates on a [[Peer_to_peer_systems|P2P]] network where nodes store and maintain the ledger independently.
- Data Dissemination is done using an unstructured network model where nodes communicate randomly with each other to spread data with well known peers

![[Pasted image 20240511184018.png|350|350]]
### Gossip Protocol
- Information spreads through the network in this protocol by nodes repeatedly sharing information with a subset of their neighbours. Peers identified through their public key [[Hashing|hash]]
- Node failures are tolerated, as data redundancy ensures information preservation and accuracy.
1. **Initial trigger**: peer has information it wants to disseminate across the network 
2. **Neighbour selection**: the peer selects k neighbours to share information with
3. **Message propagation**: peer sends information to k neighbours
4. **Iterative nature**: each peer receiving the message propagates it to it's own k neighbours, peers discard duplicate messages received. This can be optimised by asking before sending. 
## Block consensus
- Classic consensus protocols such as [[Practical_Byzantine_fault_tolerance|PBFT]] cannot be used for block consensus as all participants in this context are not known beforehand (open participant setting)
- Blockchain systems are also vulnerable to ==sybil attacks== where a peer creates multiple identities 
### Proof of work (PoW)
- Involves nodes competing to solve complex mathematical problems, and the first to solve broadcasts the new block to the network. This also involves validating user transactions
- Helps prevent Sybil attacks but is computationally expensive, leading to high energy consumption and environmental concerns.

![[Pasted image 20240511195630.png|400|400]]

- This is done with a brute force attack but the result is easy to verify 
- Double-spending is avoided by having each miner verify the entire chain of transactions
## Transactions
- Bitcoin is a common example of a transaction based blockchain, a coin in this system is a chain of digital signatures. Anyone can follow transaction history and verify transactions 
- Nodes must reach consensus on the transactions to be included in the blockchain to prevent issues like double-spending.


![[Pasted image 20240511194907.png|250|250]]


## Blockchain fork 
- When two alternative chains satisfy the PoW, attackers may attempt to do this intentionally however without 50% of the hashrate this attack will not be successful
- Creating a fork is exponentially hard as it requires recomputing the nonce of all previous blocks, honest miners build on the longest chain

![[Pasted image 20240511201223.png|450|450]]
