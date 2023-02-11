> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 10/02/2023 - 20:15
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
# Database normalisation

- Process of organising data in way that minimises data redundancy and dependency
- Increases data integrity and consistency, normalisation ensures that each table in a [[Database_systems|database]] represents a single [[Entity_relationship_model|entity type]] and contains data only relating to that entity 
- This is not always ideal for performance but is valuable for  [[Database_constraints#Integrity constraints|data integrity]]
- This is achieved through steps known as normal forms, these steps are designed to prevent the following from occurring within a [[Database_systems|database]]
    - **Insertion anomalies**: when its impossible to insert data without violating it's relational constraints, eg insert a student with a missing course when null is not allowed for course 
    - **Deletion anomalies**: when deleting data results in the loss of essential information that should have been stored elsewhere, this is prevalent with redundant data dependency 
    - **Modification anomalies**: when modifying data leads to data inconsistencies, eg updating a name with the change not propagating elsewhere
## 1NF: Atomic values 
- No multi-valued attributes, each attribute should have a single value that cannot be decomposed further

## 2NF: Non-key attributes dependent on entire primary key

## 3NF

| ID  | Name     | Course | Address  |
| --- | -------- | ------ | -------- |
| 1   | John Doe | Math   | 123 Main |
|  2 | Jane Doe | Science| 456 Elm |

| ID  | Name     | Course  |
| --- | -------- | ------- |
| 1   | John Doe | Math    |
| 2   | Jane Doe | Science |

| ID  | Address  |
| --- | -------- |
| 1   | 123 Main |
| 2   | 456 Elm  |

## 4NF: No multi valued dependencies


## 5NF: No join dependency for non-key attributes
