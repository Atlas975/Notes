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
- In general, the access routine with the fewest retrieval operations should be chosen 
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
- Binary search using a [[Database_indexing#Clustering indexes|clustered index ]] to locate a block with records that match a given criteria
- Mapping is done to the first cluster that contains a record matching search criteria  

![[Pasted image 20230430150211.png|550|550]]

## S6: B+ tree search
- Used in comparison like [[#S4: comparison search|S4]], but with the access path utilising a [[B+_trees|B+ tree]] instead of a linear search
- Tree structure allows rapid retrieval guided by internal nodes where retrieval behaviour depends on the given operator:
```
> : find last occurance, retreive all subsequent (inclusing self if >=)
< : find first occurance retreive all preceding  (including self if <=)
```
# Conjunctive selection conditions
- Involves boolean expressions involving **AND**
- General form (simple condition 1) AND (simple condition 2) ...  
## S7: simple condition output check
- Use of of method [[#S2: binary search|S2]] - [[#S6: B+ tree search|S6]] if applicable 
- Examine records retrieved to see if they meet additional conditions as well

## S8: composite index
- An index created on two or more columns of a table to speed up queries that involve multiple columns in the WHERE clause of a SELECT statement.
- If two or attributes involved in an equality condition appear in one of these, this indexing scheme is much faster to search than searching individual indexes, [[SQL_language|SQL]] syntax:
```sql
CREATE INDEX index_name 
ON table_name(c2,c3,c4);
```

## S9: secondary index intersection
- Makes use of [[Database_indexing#Secondary indexes|secondary indexing]], if indices available on all fields involved then use the intersections (for AND) / union (for OR)
- Merging secondary index schemes allows for quick filtered selection 

![[Pasted image 20230430160318.png|550|550]]
