> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 10/01/2024 - 23:33
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Byzantine generals problem
The Byzantine Generals Problem is a classic issue in distributed computing that focuses on achieving consensus despite the presence of faulty or malicious components within a system. This problem is illustrated through a scenario where several divisions of the Byzantine army, each commanded by their own general, must agree on a common battle plan while some of the generals may be traitors.

- **Goal:** Ensure that all loyal generals agree on a unified plan of action.
- **Solution Conditions:** The problem can be solved if more than two-thirds of the generals are loyal. This ensures a single traitor cannot confuse two loyal generals.
- **Applications:** This scenario is directly applicable to systems that require reliability amidst components that might act maliciously or unpredictably, such as in blockchain technology or military defense systems.

## Algorithm for Byzantine Fault Tolerance:

- **Lamport's Algorithm:** Introduces the use of more communication rounds among generals to resolve conflicts and discrepancies caused by traitors.
- **Requirements:** For 'f' traitorous nodes, at least '3f+1' nodes are required for achieving consensus.
- **Cryptography:** The use of cryptographic methods like digital signatures ensures that messages are not forged.