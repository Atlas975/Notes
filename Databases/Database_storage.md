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
- The majority of [[Database_systems|Database]] data resides on [[Computer_memory#Secondary memory]], which has slower access than [[Computer_memory#Primary memory]] but offers memory persistence 
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
- The remainder cut off by the floor function is the amount of [[Computer_memory#Internal fragmentation|Internal fragmentation]], blocks act as a minimum unit for reading to and from disk

## Spanned records 
- When a block lack the space to store a complete record, records may instead be spanned across multiple blocks using pointers 

![[Pasted image 20230304172918.png|550|550]]