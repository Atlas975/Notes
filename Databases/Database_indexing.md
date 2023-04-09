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
- A technique used to improve the performance of [[Database_systems|database]] through the use of  [[Database_storage#Secondary Files|secondary files]] whose values use ordered indexes
- Indexing creates a separate data structure that organises data in an efficient manner, the secondary structure is searched during a query with each index containing a pointer to its associated record 
- The use of secondary files incurs an additional cost to **write performance** for better **read performance**
## Single level indexes
- Defined on a single field in a file called the indexing field
- Multiple types of single level indexes exist these being:
	1. **Primary indexes** 
	2. **Clustering indexes** 
	3. **Secondary indexes** 

### Primary indexes
- Specified on the ordering key of an ordered file, this key is used to physically order file record on disk
- Index is an ordered file of fixed length records, first field is the same datatype as ordering key 

![[Pasted image 20230409234650.png|550|550]]

- One index entry exists for each block in the datafile starting from the first record 
- This is known as the anchor record 
- Index file is much smaller than data file, however additional overhead exists to maintain ordering via re-arranging due to modifications or deletions

### Clustering indexes 
- Used if ordering key is a non-key field, ie when multiple records may hold the same value for their ordering field 
- Index entry exists for each distinct value of clustering field 

![[Pasted image 20230410000220.png|550|550]]