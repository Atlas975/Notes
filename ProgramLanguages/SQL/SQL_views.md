> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages/SQL
> **Created:** 03/05/2023 - 02:19
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# SQL views
- [[SQL_language|SQL]] views are virtual tables that do not exist in physical database files
- Views can be used by users without granting access to underlying base tables used by the view, allowing them to act as a security mechanism
- Views also make sense to use when only specific tuples are of repeated interest

## View syntax 
```sql
CREATE VIEW [view_name] AS [SQL query]
```