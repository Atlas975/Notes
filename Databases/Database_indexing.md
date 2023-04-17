> [!important]- Metadata
> **Tags:** #Databases #OperatingSystems 
> **Located:** Databases
> **Created:** 09/04/2023 - 22:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Database indexing
- A technique used to improve the performance of [[Database_systems|database]] through  [[Database_storage#Secondary Files|secondary files]] whose values use ordered indexes, allows for faster data access through [[Binary_search|binary search]]
- Indexing creates a separate data structure that organises data , this secondary structure can be searched during a query for reading/writing. Associated [[SQL_language|SQL]]:

```sql
CREATE INDEX index_name ON table_name (column_name);
```

- Using secondary files incurs an additional cost to **write performance** for better **read performance**, database structures with no indexes at all are called **heaps** in which new values are inserted wherever there is free space ([[File_systems#File organisation|unordered files ]]) 
- The index file itself is ordered and consists of fixed length records (AKA the [[Database_keys#Primary key|Primary key]]) with an additional field that points to physical disk blocks

![[Pasted image 20230411192357.png|300|300]]
- **Single level indexes** are based on ordered files, typically using a single indexing field 
- Multiple types of single level indexes exist these being:
	1. **Primary indexes** 
	2. **Clustering indexes** 
	3. **Secondary indexes**
## Primary indexes
- Specified on the ordering key of an ordered file, this key is used to physically order file record on disk
- Index is an ordered file of fixed length records, first field is the same datatype as ordering key 

![[Pasted image 20230409234650.png|550|550]]

- One index entry exists for each block in the datafile starting from the first record 
- Index file are much smaller than data files but additional overhead exists to maintain ordering via re-arranging from modifications or deletions
## Clustering indexes
- Used if ordering key is a non-key field, ie when multiple records may hold the same value for their ordering field  in which case a clustered ordered field would be used 
- Index entry exists for each distinct value of clustering field 

![[Pasted image 20230410000220.png|550|550]]
