> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages/SQL
> **Created:** 04/02/2023 - 20:31
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
# SQL deletion
- Multiple options exist for handling row deletions of a [[Database_systems|database]], these are defined at schema level and need to be specified in a way to preserve any required [[Database_constraints|database constraints]] 

> ![[Pasted image 20230204204517.png|600|600]]

## SET NULL
- This deletion type specifies that specifies that when a record is deleted, the values in the foreign key columns in the related table should be set to null. 
- This deletion is used when it is acceptable for the foreign key columns to contain null values.

## SET DEFAULT
- This deletion type specifies that when a record is deleted, the values in the foreign key columns in the related table should be set to their default values.
- Used when it is acceptable for the foreign key columns to hold placeholder values

## CASCADE
- This deletion type specifies that when a record is deleted, the related records in the related table should also be deleted.
- This type of deletion is used when the related records are dependent on the record being deleted and have no value if the record is deleted.

## NO ACTION
- The default if no other deletion type is specified at table creation
- This type specifies that when a record is deleted, an error should be generated if there are related records in the related table. 
- This type of deletion is used to prevent accidental deletion of related records.
## Relationship deletion effects
### 1 to 1 partial participation

> ![[Pasted image 20230205123933.png|600|600]]

### 1 to 1 total participation

> ![[Pasted image 20230205124328.png|600|600]]
> ![[Pasted image 20230205125253.png|600|600]]

### 1 to N total participation 
> ![[Pasted image 20230205125804.png|600|600]]

### N to M total participation 
> ![[Pasted image 20230205130258.png|600|600]]