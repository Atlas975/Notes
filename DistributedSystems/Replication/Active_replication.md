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

- Ensures strong consistency across replicas but increases the complexity of  coordinating state, often requiring sophisticated consensus algorithms
- Unlike [[Passive_replication|passive replication]] that only handles crash failures, active replication is also able to handle potential [[Byzantine_generals_problem|Byzantine failures]]

## State consistency 
- The frontend checks for agreement between replicas on response value 
- This can be used alongside consensus algorithms to combat faulty nodes
- 