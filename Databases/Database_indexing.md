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
- A technique used to improve the performance of [[Database_systems|database]] through the use of  [[Database_storage#Secondary Files|secondary files]]
- Indexing creates a separate data structure that organises data in an efficient manner, the secondary structure is searched during a query with each index containing a pointer to its associated record 

## Single level indexes 
- 
