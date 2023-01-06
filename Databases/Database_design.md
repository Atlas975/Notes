# Database_design
created: 2022-08-01 11:01
#Databases [[Database_fundamentals]]
---

# Database Sharding
- When data is too large to fit into a machine or searching for data is computationally expensive, Sharding can help counteract this.
- This distributes processing of data and provides easier horizontal scaling
- The logic of Sharding can vary:
- Application level Sharding, routing happens at application layer:

> ![[Pasted image 20220801202102.png]]

```ad-example
id(1-10) go in one shard 
id(11-20) go in another shard
```

- Database level Sharding, this is typically done automatically by the DBMS:

> ![[Pasted image 20220801202511.png]]

## Sharding strategies 
1. Hashing 
2. Dividing data into ranges, allows for targeted operations