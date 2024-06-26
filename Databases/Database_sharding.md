> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Database sharding
- When data is too large to fit into a machine or searching for data is computationally expensive, Sharding can help counteract this.
- This distributes processing of data and provides easier horizontal scaling, variants of sharding logic exists 

![[Pasted image 20220801202102.png|350|350]]

```ad-example
id(1-10) go in one shard 
id(11-20) go in another shard
```

- Database level Sharding, this is typically done automatically by the [[SQL_language|DBMS]]:

![[Pasted image 20220801202511.png|350|350]]

### Sharding strategies
1. Hashing 
2. Dividing data into ranges, allows for targeted operations
