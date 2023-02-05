---
aliases: database constraints
---
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
# Database constraints
- **Integrity of data** is the state of data in a [[Database_systems|DBMS]] where data obeys constraints set by the database administrator (DBA), database constraints are a core part of this  
- A database constraint is a rule that restricts how data can be stored in a table
- These can be split up into multiple constraint types that fall under one of 3 groups 
## Domain constraints
- Values in tuples should obey it's domain / datatype
- This constraint ensures all values in the same column / attribute can be processed the same way by having a predefined datatype that can be inserted 
## Key constraints
- Enforces **referential integrity**, ensures keys of a relation being unique, non-redundant as well as being non-null.
- In order for the DBMS to preserve [[Entity_relationship_model#Relation set|entity relations]], the [[Relations|relation]] must be made with keys
## Integrity constraints
- A condition that must be true for any database instance, specified at schema creation 
- These are checked automatically when relation are modified 
- A relation is **legal** if it satisfies integrity constraints, the DBMS should not allow illegal relations
- These constraints are what give real-world meaning to data eg null not being allowed 

### Entity integrity constraint
- Enforces that no key value can be null
### Check constraint
- Restricts values that can be inserted based on logical expression eg avoid divide by zero
# Key constraints 
- A key attribute can distinguish a tuple row 
- A **candidate key** is any set of attributes present in a table that can uniquely identify a row 
- A **composite key** is a set of attributes that distinguish a row
## Key traits
- In order to enforce key constraints a set of attributes is a key for a relation if:
	1. Have no identical tuples with the same values in all fields 
	2. This is not true for the key's subset
- All attributes that contain a key are known as a **superkey**, which is the set of all attributes that make a tuple unique, every relation has at least one superkey, this being the whole tuple as no two rows can be identical 
## Foreign keys
- Set of fields in one relation that refer to a row in another relation, acts as a logical pointer, this foreign data must refer to the primary key in another entity 

> ![[Pasted image 20230204193830.png]]

- **Referential integrity** is achieved if all foreign key constraints are enforced eg no dangling references to missing data 

> ![[Pasted image 20230204202107.png||g]]
