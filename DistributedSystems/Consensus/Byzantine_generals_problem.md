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
- A problem in distributed computing based on achieving consensus with the presence of faulty / malicious components within a system. 
- This is illustrated using a scenario where several of the army divisions, each commanded by their own general, must agree on a  battle plan while some generals may be traitors.

![[Pasted image 20240507121653.png|400|400]]

## Lamport's algorithm 
- The problem can be solved if more than two-thirds of the generals are loyal. This ensures a single traitor cannot confuse two loyal generals.
- Lamport's algorithm Introduces the use of more communication rounds among generals to resolve conflicts and discrepancies caused by traitors.

![[Pasted image 20240507122429.png|450|450]]

- In addition to what's heard from a commander, lieutenants also share what they heard from each other. Performing a majority vote consensus using these shared matrices 
- With $2f +1$ honest nods, this allows for faulty voters 
## Algorithm for Byzantine Fault Tolerance:

- **Lamport's Algorithm:** 
- **Requirements:** For 'f' traitorous nodes, at least '3f+1' nodes are required for achieving consensus.
- **Cryptography:** The use of cryptographic methods like digital signatures ensures that messages are not forged.