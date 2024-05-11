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
# Passive replication
- [[Replication]] scheme where one primary replica handles requests / updates and other replicas act as backups, synchronising their state but not actively serving requests
- If the primary replica fails, one of the backups will be promoted to primary, which can introduce a delay in service continuity until the new primary is established.

![[Pasted image 20240512004216.png|200|200]]


- Less resource consumption compared to [[Active_replication|active replication]] as only the primary replica handles the load, while backups remain largely idle
- Easier to manage than active replication but requires recovery mechanisms to ensure the backup is up-to-date and ready to take over when the primary fails


## State consistency 
- All backup replicas must be updated before responding to a request for consistency
- Sequence numbers are needed in the event that the primary replica crashes and requests are repeated when sent to a backup that's about to take over

![[Pasted image 20240512004713.png|400|400]]