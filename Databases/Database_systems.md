---
aliases: database
---

> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Databases systems
- An organised collection of information.
- Databases have to cope with:
  1. Massive volumes of data
  2. Multiple simultaneous users
  3. Sensitive data, important information that needs to be protected
  4. Complex data, data needs to be cleaned and compatible with other data
  5. Dynamic data, data needs to be easily updated without consequence.
- Databases also need to be able to perform:
  1. Scalability
  2. Storage
  3. Data handling
  4. Access control
  5. Security
  6. Data integrity checks
- Structure:

![[Pasted image 20211213220115.png|400|300]]

- Database examples: Oracle, MySQL, SQLite, PostgreSQL
## Data terminology
- Databases contain multiple **tables**
- Tables are a collection of  records (**rows / tuples**)
- Records are a collection of fields (**columns / attributes**) 
- Three components of relational DBMS
	1. Data structure
	2. Data manipulation
	3. Data integrity
## Integrity in DBMS
1. Domain integrity: restricts values to specific data types in columns
2. Entity integrity: no two rows can be equal
3. Referential integrity: maintains relationships between tables, referencing other tables requires active maintenance.
# Flat file systems
- Database represented in a single stable, typically stored and represented by text file
- Multiple distinct tables with no relation to one another used to store data 
## Flat file system downsides
- No standards for data control
- Duplicate data can be present (columns & rows)
- Data access difficult to manage, unable to generate complex queries
- Multiple owners, files, location making security difficult
- Few automated checks for data entry/conversion
# DBMS
- Provides an efficient and reliable way to store large amount of persistent data
- A DBMS provides 3 main services:
- [[SQL_language|SQL]] integrates all of these in one language
## 1. Data definition language (DDL)
- Structure that data is conecptually stored (scheme), a group of tables in a DB is called a schema
## 2. Data manipulation language (DML)
- Ability to manipulate data (insert,delete,update,select)
## 3. Data control language (DCL)
- Control data privileges (access rights), used to control access to data stored in a DB
# ANSI-SPARC Architecture
- **ANSI**: American National Standards Institute
- **SPARC**: Standard Planning And Requirements committee

![[Pasted image 20211213221229.png|500|500]]

- Each level can be described by a schema
## External level
- Defines different views of database tailored to users (SELECT)
## Organization level
- What data is stored, how it's arranged, data relationships, security and data relationships (CREATE)
## Internal level
- Structure data is written/received, how data is ordered, space allocations and compression/encryption
# Database schema
- The blueprint of a database, describes the structure and organisation of data in a database, serves as a map for a DBMS to understand the layout of data using two core scheme types:
	- **Conceptual schema**: database content organisation
	- **Internal schema**: how data is stored

![[Pasted image 20230201122712.png|450|450]]

- Schemas allow data to be independent with implementation/optimization left to DBMS
- Transfer of requests between layers is called mapping
- **Data independence** describes hiding implementation from other layers
- **Physical data independence**: hardware change does not effect relation structure
- **Logical data independence**: conceptual scheme can be modified without risking an impact to external  schema
