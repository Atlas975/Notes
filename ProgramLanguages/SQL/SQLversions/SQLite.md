> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** ProgramLanguages/SQL/SQLversions
> **Created:** 13/03/2023 - 15:56
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# SQLite
## SQLite GENERATED:
- The GENERATED keyword is used to indicate that a column is a computed column, also known as a virtual column or a derived column. 
- A computed column is not stored directly on disk, but is instead computed on-the-fly based on the values of other columns in the same row.