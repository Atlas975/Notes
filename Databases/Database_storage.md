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