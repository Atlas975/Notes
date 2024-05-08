> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems/Replication
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Active replication
- [[Replication]] scheme where all replicas process each request and update their state concurrently. This ensures that all replicas are always synchronised
- Requests are [[Group_communication|multicasted]] from a frontend, In case of a failure of one replica, others are immediately available to continue serving without interruption or recovery time. 

![[Pasted image 20240508200553.png|450|450]]

- Maintaining multiple active replicas can be resource-intensive as each replica needs to process all requests and participate in synchronization mechanisms
- Ensures strong consistency across replicas but increases the complexity of  coordinating state, often requiring sophisticated consensus algorithms