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
- Indexing creates a separate data structure that organises data , this secondary structure can be searched during a query for reading/writing. Associated [[SQL_language|SQL]] for creating an index:

```sql
CREATE INDEX index_name ON table_name (column_name);
```

- Using secondary files incurs an additional cost to **write performance** for better **read performance**
- The index file itself is ordered and consists of fixed length records (AKA the [[Database_keys#Primary key|Primary key]]) with an additional field that points to physical disk blocks

![[Pasted image 20230411192357.png|300|300]]
- **Single level indexes** are based on ordered files, typically using a single indexing field 
- Multiple types of single level indexes exist these being:
	1. **Primary indexes** 
	2. **Clustering indexes** 
	3. **Secondary indexes**
- With an index field, groups of records can be grouped up in blocks similar to using a book index to find a chapter, with ordered blocks search time will be 

> $$\log_{2}B_i + 1$$
> $$B_{i}=\text{the number of blocks in the indexed records}$$

- When an index entry exists for every search key value, it using **dense indexing**

![[Pasted image 20230425203055.png|350|350]]
- **Sparse indexing** may still use a combination of both dense and sparse methods, where each unique search value acts as an index but each unique data record may not be mapped
- Index file are much smaller than data files making them easy to store in [[Computer_memory#Dynamic (main) memory|main memory]] but additional overhead exists to maintain ordering via re-arranging from modifications or deletions. 
## Primary indexes
-   The first field is the same as the _primary key_ of data file (block anchor key)
-   The second field is a pointer to the data block where the primary key is available in the main data file

![[Pasted image 20230425203618.png|450|450]]
## Clustering indexes
- The first field is a non-key field in the data file, with a pointer to an area on the main data file
- Index entry exists for each distinct value of clustering field, making this indexing scheme **dense**

![[Pasted image 20230426122145.png|500|500]]
- After locating a block in which a key is present, a linear traversal of other blocks can be done
- Large overhead still exists for insert and delete, this can be simplified and reduced by having a whole block / cluster of blocks reserved for each clustering field mapping

![[Pasted image 20230426122334.png|500|500]]


## Secondary indexes 
- Files can have a single ordering field (either [[#Clustering indexes|clustered]] or [[#Primary indexes|primary]] indexed) as these impact physical file organisation, these act as the files primary access method. 
- Any number of secondary indexes may be specified on a non-ordering fields in a file. This adds more flexibility to how data can be accessed