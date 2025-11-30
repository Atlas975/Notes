> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems/SystemStructure
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Brewers CAP theorem
- Fundamental requirements for all [[Distributed_system_design|distributed systems designs]]
	- **Consistency**: system has same state everywhere
	- **Availability**: system operates if one node is responsive 
	- **Partition tolerance**: system operates despite network interruptions
- These cannot all be met at the same time, there must be compromise 
- This becomes more obvious as an application grows as need for scalability, need for high availability along with the network being unreliable are all true at once

## CAP compromise 
- In a distributed system, partition is inevitable so consistency / availability must be given up for the sake of scaling. Eventual consistency is a common compromise 
- Can be partially avoided via  [[Proxy_pattern|proxy]] use to serve tasks such as routing, caching, and load balancing. 
