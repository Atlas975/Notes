> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 11/02/2023 - 16:22
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
# Database keys
- In [[Database_systems|databases]], a key is an attribute or a set of attributes that uniquely identifies a tuple. There are several types of keys used in a [[Database_systems#DBMS|DBMS]], including:

![[Pasted image 20230211163559.png|450|450]]

## Primary key
- Unique identifier for each record in a table. It cannot be null and must be unique for each record. A table can only have one primary key.
  
## Foreign key
- Field in a table that refers to the primary key of another table. It is used to establish a relationship between two tables.

## Composite key
- Key made up of two or more attributes that together uniquely identify a record.

### Prime attributes
- Any attribute that is part of any candidate key, can be used to uniquely identify a tuple 

### Non-prime attributes 
- All other attributes that cannot act as a unique identifier, can be decomposed further 

## Candidate key
- Set of attributes that can be used as the primary key for a table. A table can have multiple candidate keys, but only one primary key.
## Alternate key
- A candidate key that is not chosen as the primary key for a table. It can be used as a backup identifier for records in the table.
## Surrogate key
- Unique identifier for each record in a table that is created by the database management system and has no inherent meaning. 
- It is used as the primary key when a natural primary key does not exist or is not practical.

## Super key
- The [[Sets|set]] of attributes where a subset if the [[#Primary key]] of the relation 
- Also referred to as a candidate key, the set used as the primary key is the primary superkey
