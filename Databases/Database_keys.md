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
In databases, a key is an attribute or a set of attributes that uniquely identifies a record in a table. There are several types of keys used in database management systems, including:

1.  Primary Key: A primary key is a unique identifier for each record in a table. It cannot be null and must be unique for each record. A table can only have one primary key.
    
2.  Foreign Key: A foreign key is a field in a table that refers to the primary key of another table. It is used to establish a relationship between two tables.
    
3.  Composite Key: A composite key is a key made up of two or more attributes that together uniquely identify a record.
    
4.  Candidate Key: A candidate key is a set of attributes that can be used as the primary key for a table. A table can have multiple candidate keys, but only one primary key.
    
5.  Alternate Key: An alternate key is a candidate key that is not chosen as the primary key for a table. It can be used as a backup identifier for records in the table.
    
6.  Surrogate Key: A surrogate key is a unique identifier for each record in a table that is created by the database management system and has no inherent meaning. It is used as the primary key when a natural primary key does not exist or is not practical to use.
    

These keys play an important role in maintaining the integrity and relationships between records in a database.