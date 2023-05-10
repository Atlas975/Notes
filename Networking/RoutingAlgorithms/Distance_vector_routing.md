> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/Routing algorithms
> **Created:** 10/05/2023 - 00:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distance vector routing
- A type of [[Routing_protocols|routing protocol]] used in [[Network_architecture|networks]] to determine the best path for forwarding packets of data from one network node to another 
- Typically updates every 30 seconds, due to exchange between neighbours, convergence time varies
- Initialisation step: 

![[Pasted image 20230510002832.png|450|450]]
## Distance vector pitfalls
-  DV router can advertise incorrect path cost (black-holing)
- Each router’s table used by others: errors propagate through network
## Routing information protocol algorithm (RIP)
- Uses the [[Bellman_Fords_shortest_path#Bellman Ford's algorithm|Bellman Ford's algorithm]]  to calculate the best path for forwarding packets. 
- This is because the Bellman-Ford algorithm is a decentralised algorithm, which means it can be easily implemented on individual nodes without requiring global knowledge of the [[Network_topology#Network topology|Network topology]]

![[Bellman_Fords_shortest_path#Bellman Ford's algorithm]]
