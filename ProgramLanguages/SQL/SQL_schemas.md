> [!important]- Metadata
> **Tags:** #Programming #Databases 
> **Located:** ProgramLanguages/SQL
> **Created:** 03/05/2023 - 02:42
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# SQL schemas
- A logical collection of database object, useful for logical grouping of object functions or users
- Schemas are a **logical** container rather than a physical one, allowing for tables to exist in multiple schemas at once
- Example schema: 

![[Pasted image 20230503024620.png||650|650]]


## Schema syntax 

```sql
CREATE SCHEMA [schema_name]
Authorisation [owner_name]
```
- Where owner name is (initially) the only user able to create and access objects