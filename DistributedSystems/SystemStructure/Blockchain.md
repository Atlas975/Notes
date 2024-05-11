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


## 
## Blockchain Operations
- **Creating Blocks:** Nodes gather new transactions into blocks.
- **Validating Transactions:** Nodes must reach consensus on the transactions to be included in the blockchain to prevent issues like double-spending.

### Proof of work (PoW)
- Involves nodes competing to solve complex mathematical problems, and the first to solve broadcasts the new block to the network.
- PoW helps prevent Sybil attacks, where a user masquerades as many identities to flood the network.

### Challenges in Blockchain

- **Scalability:** The current blockchain implementations like Bitcoin have limitations in transaction throughput and latency.
- **Energy Consumption:** PoW is computationally intensive, leading to high energy consumption and environmental concerns.

### Security Features

- **Public Key Cryptography:** Ensures that transactions are secure and that coins can only be spent by their owners.
- **Digital Signatures:** Provide integrity and non-repudiation to transactions.

### Practical Implications

Blockchain technology provides a robust platform for secure, transparent, and decentralized transaction recording, which is essential in scenarios that require unalterable data histories, such as in financial transactions, supply chain management, and voting systems.
