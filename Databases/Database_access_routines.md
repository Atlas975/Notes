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
# Database access routines


## S1:  linear search 
- Used in simple selection ([[Relational_algebra#Select|select operation]])
- Retrieves every record and uses comparison to test if condition is satisfied 