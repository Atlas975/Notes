> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/RoutingAlgorithms
> **Created:** 10/05/2023 - 00:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Link state routing
- **Centralised** routing where each node knows its neighbours and cost to direct neighbours 
- This information is broadcasted to all nodes (flooding), each nodes learns complete [[Network_architecture|network]] [[Network_topology|topology]]
- Message complexity of $O(N^2)$ time, messages must propagate everywhere


## Link state pitfalls 
- Router can advertise incorrect link cost 
- Each router computes only its own table
## Link state algorithm 

![[Dijkstras_shortest_path#Dijkstra's algorithm]]