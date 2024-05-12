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
- A problem in [[Distributed_systems|distributed]] computing based on achieving consensus with the presence of faulty / malicious components within a system. 
- This is illustrated using a scenario where several of the army divisions, each commanded by their own general, must agree on a  battle plan while some generals may be traitors.

![[Pasted image 20240507121653.png|400|400]]

## Lamport's algorithm 
- The problem can be solved if more than two-thirds of the generals are loyal. This ensures a single traitor cannot make two honest generals take different actions
- Lamport's algorithm Introduces the use of more communication rounds among generals to resolve conflicts and discrepancies caused by traitors.

![[Pasted image 20240507122429.png|450|450]]

- In addition to what's heard from a commander, lieutenants also share what they heard from each other. Performing a majority vote consensus using these shared matrices 
- With a minimum of $(2f +1)$ honest nods, and $(f+1)$ rounds of communication, fault tolerance can be achieved ($f$ being the number of faulty nodes, $\geq{}3f +1$ required overall) 

![[Pasted image 20240512163325.png|450|450]]