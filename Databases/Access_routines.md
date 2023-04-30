> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 30/04/2023 - 03:54
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Access routines
- Software functions that enable a computer program to retrieve or store data in a data storage system, such as a [[Database_systems|database]], [[File_systems|file system]] or [[Computer_memory|memory]]
- Involves a scenario that makes use of a relational operation and an access path, each scenario is independent of each other
## S1: linear search
- Used in simple selection ([[Relational_algebra#Select|select operation]] / SQL where clause)
- Retrieves every record and uses equality to test if condition is satisfied, doesn't make use of an access path and operates on  [[File_systems#Unordered records|Unordered records]]
## S2: binary search
- Used on sorted files, makes use of [[Binary_search|binary search]]
- Uses equality tests like [[#S1: linear search|S1]] but is much more efficient 
## S3: primary index search
- Makes use of [[Database_indexing|indexing]] to search within target blocks 
- Example with name as an index:

![[Pasted image 20230430100805.png|550|550]]

### S3a: Hash search
- Makes use of [[Hash_tables|hashing]] for an equality search 
- May involve use of overflow buckets as well
## S4: comparison search
- Used in comparison (<, <=, => >) where the access path is the primary index ordered by search field
- In this scenario multiple records are expected to be returned, this is done by finding the first match and returning all following / preceding records 

![[Pasted image 20230430103308.png|550|550]]

## S5: clustered index search
- Binary search using [[Database_indexing#Clustering indexes|clustered index search ]]to find the first block containing a matching search record
- Mapping is doe to the first ¯

![[Pasted image 20230430150211.png|550|550]]