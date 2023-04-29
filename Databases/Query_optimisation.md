> [!important]- Metadata
> **Tags:** #
> **Located:** Databases
> **Created:** 29/04/2023 - 19:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Query optimisation

## Query interpreter components
- **Scanner**: identifies tokens such as SQL keywords, attribute names and relations in query text
- **Parser**: checks if query follows grammar rules of the query language 
- **Validation**: checks if all attributes and relation names are valid / exist in database schema 
- **Internal query representation**: usually a query tree / graph
