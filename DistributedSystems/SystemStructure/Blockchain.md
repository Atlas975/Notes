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
- This use of linking via hash makes the technology highly resistant to tampering 

![[Pasted image 20240416173625.png|450|450]]


$$\text{Sign}(\text{Message},\text{PrivateKey})=\text{Signature}$$
$$\text{Verify}(\text{Message},\text{Signiture},\text{PublicKey})=\text{True}/\text{False}$$
### Key Characteristics of Blockchain

- **Immutable Ledger:** Each block in the blockchain contains data, the hash of the previous block, and a timestamp, creating an unbreakable chain.
- **Tamper Resistance:** Modifying a single block requires recalculating all subsequent blocks, providing security against data tampering.
- **Decentralization:** Data is not stored in any single location; instead, every participant has a copy of the entire ledger, enhancing transparency and security.

### Blockchain's Components

- **Block:** The fundamental unit in a blockchain that records transactions.
- **Hash:** Each block is linked to its predecessor by a cryptographic hash, ensuring the integrity of the previous block's contents.

### Distributed Protocol

- **Peer-to-Peer Network:** Blockchain operates on a P2P network where nodes store and maintain the ledger independently.
- **Data Dissemination:** Uses an unstructured network model where nodes communicate randomly with each other to spread data.

### Gossip Protocol

- **Efficient Information Spread:** Information spreads through the network by nodes repeatedly sharing information with a subset of their neighbors.
- **Node Resilience:** The protocol tolerates node failures, as data redundancy ensures information preservation and accuracy.

### Blockchain Operations

- **Creating Blocks:** Nodes gather new transactions into blocks.
- **Validating Transactions:** Nodes must reach consensus on the transactions to be included in the blockchain to prevent issues like double-spending.

### Consensus Mechanisms

- **Proof of Work (PoW):** Nodes compete to solve complex mathematical problems, and the first to solve broadcasts the new block to the network.
- **Security Against Sybil Attacks:** PoW helps prevent Sybil attacks, where a user masquerades as many identities to flood the network.

### Challenges in Blockchain

- **Scalability:** The current blockchain implementations like Bitcoin have limitations in transaction throughput and latency.
- **Energy Consumption:** PoW is computationally intensive, leading to high energy consumption and environmental concerns.

### Security Features

- **Public Key Cryptography:** Ensures that transactions are secure and that coins can only be spent by their owners.
- **Digital Signatures:** Provide integrity and non-repudiation to transactions.

### Practical Implications

Blockchain technology provides a robust platform for secure, transparent, and decentralized transaction recording, which is essential in scenarios that require unalterable data histories, such as in financial transactions, supply chain management, and voting systems.