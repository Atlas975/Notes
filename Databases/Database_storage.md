> [!important]- Metadata
> **Tags:** #Databases #OperatingSystems 
> **Located:** Databases
> **Created:** 04/03/2023 - 16:17
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Database storage
- The majority of [[Database_systems|Database]] data resides on [[Computer_memory#Secondary memory|secondary memory]], which has slower access than [[Computer_memory#Primary memory|primary memory]] but offers memory persistence 
- Main memory databases are usually found in real time applications, however most applications do not require this level of response speed, note this is also expensive with large datasets
- Data is organised into [[File_systems|files]] of records, which are a collection of data items (measured in bytes)

## Record sizes
- **Fixed length:** each record in a file has identical byte size 
- **Variable length:** each record in a file may be a of varying length, this may be the case due to:
	- Fields of varying length 
	- Multi-valued fields 
	- Optional fields 
	- Records clustered together for performance reasons

![[Pasted image 20230304162640.png|650|650]]

- Knowing the length of each field allows the field positions to be found using memory offsets
- Variable length records can be handled using a fixed length, albeit with redundant memory use through methods such as memory padding or the use of null values
- Variable length records also need an encoding scheme such as 
	- The use of a terminating character similar to a null byte to indicate the end of a field
	- Storing \<field name, field value> pairs, useful for making the meaning of a field explicit
	- Field length (in bytes) may be stored proceeding its associated field value
## Record blocking
- Depending on the size of a memory block in a computer, a record may be stored in several blocks or vise versa unless a block size is identical to the record size
- The number of records that fit in a block is known as the blocking factor which is calculated as:
$$\text{Blocking factor(BFR)}=\lfloor \frac{\text{ block size}}{\text{record size}}\rfloor$$
- The remainder cut off by the floor function is the amount of [[Computer_memory#Internal fragmentation|Internal fragmentation]]
- Blocks act as a minimum unit for reading to and from disk, these allocation schemes need to balance performance, flexibility and space efficiency

## Spanned records
- When a block only has the space to  partially store a record, records may instead be spanned across multiple blocks using pointers 

![[Pasted image 20230304172918.png|500|500]]
- Unspanned records may also exist, suffers from internal fragmentation but lacks the added overhead of using pointers 

![[Pasted image 20230304220128.png|500|500]]
## Space allocation
- Database files typically grow overtime and therefore require a block allocation scheme that balances out performance , flexibility and space efficiency. Especially since disk space is often shared with the OS and other applications 
- Database files may use the same allocation schemes as other [[File_systems|files]], these being: 
	- [[File_allocation_schemes#Continuous allocation|Continuous allocation]]
	- [[File_allocation_schemes#Linked allocation|Linked allocation]]
	- [[File_allocation_schemes#Cluster allocation|Cluster allocation]]
	- [[File_allocation_schemes#Indexed allocation|Indexed allocation]]
- Databases also need to account for [[File_systems#File organisation|physical file organisation]],  but a DBMS will abstract these processes away from a DB admin. Understanding underlying storage structures is still vital for optimising designs
- The key to understanding a file are [[File_systems#File headers|File headers]], which act as a rosetta stone for programs to access information regarding records in a file
## Primary Files
-   Primary files in databases are the main files that hold persistent data.
-   Contains the actual data rows of the table, along with their associated  elements and fields.
-  **Primary file organisation** describes how records are physically placed on disk 
## Secondary Files
- Can be taught of as the indexes in a text book, providing an alternate way to locate records without impacting physical placement of records on disk 
- Exist in addition to primary files and contain  data derived from primary files eg indexes, views, and summaries.
- **Secondary file organisation** describes how efficiently records are accessed, this describes access structures that are used to speed of retrieval`
- Secondary files are used to enhance the performance of the database, allowing for faster retrieval of data. They are also used for backup and recovery purposes.
- Any field in a record can be used for indexing, the fields that are used are known as index fields, multiple of these may exist
		
