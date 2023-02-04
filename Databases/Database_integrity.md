> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 04/02/2023 - 18:55
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
# Database integrity
- **Integrity of data** is the state of data in a [[Database_fundamentals|DBMS]] where data obeys constraints set by the database administrator (DBA), database constraints are a core part of this  

# 
# Database constraints 
- A database constraint is a rule that restricts how data can be stored in a table
- These can be split up into multiple constraint types that fall under one of 3 groups 
## Domain constraints
- Values in tuples should obey it's domain / datatype
- This constraint ensures all values in the same column / attribute can be processed the same way by having a predefined datatype that can be inserted 
## Key constraints
- Enforces **referential integrity**, ensures keys of a relation being unique, non-redundant as well as being non-null which enforces (**entity integrity**)
- In order for the DBMS to preserve [[Entity_relationship_model#Relation set|entity relations]], the [[Relations|relation]] must be made with keys
- This constraint also enforces that no two tuples can have the same value, the **superkey** is the set of all attributes that make a row unique
## Integrity constraints 
- A condition that must be true for any database instance, specified at schema creation 
- These are checked automatically when relation are modified 
- A relation is **legal** if it satisfies integrity constraints, the DBMS should not allow illegal relations
- These constraints are what give real-world meaning to data eg null not being allowed 