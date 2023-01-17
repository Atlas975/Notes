> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 26/12/2022 - 03:53
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Database design

## Database Sharding
- When data is too large to fit into a machine or searching for data is computationally expensive, Sharding can help counteract this.
- This distributes processing of data and provides easier horizontal scaling
- The logic of Sharding can vary:
- Application level Sharding, routing happens at application layer:

> ![[Pasted image 20220801202102.png|350|350]]

```ad-example
id(1-10) go in one shard 
id(11-20) go in another shard
```

- Database level Sharding, this is typically done automatically by the [[SQL_language|DBMS]]:

> ![[Pasted image 20220801202511.png|350|350]]

### Sharding strategies 
1. Hashing 
2. Dividing data into ranges, allows for targeted operations