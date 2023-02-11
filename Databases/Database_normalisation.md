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
- This is achieved through steps known as normal forms:

## 1NF: Atomic values

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
