#Databases
# Database fundamentals
- A database is a data structure designed to create an organized collection of information.
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
6. Data intergrity checks
- Structure:
>![[Pasted image 20211213220115.png|400|300]]
- Database examples: Oracle, MySQL, SQLite, PostgreSQL
## Data terminology
- Databases contain multiple **tables**
- Tables are a collection of  records (**rows**)
- Records are a collection of fields (**columns**)

## Three components of relational DBMS
1. Data structure
2. Data manipulation
3. Data integrity

## Integrity in DBMS
1. Domain integrity: restricts values to specific data types in columns 
2. Entity integrity: no two rows can be equal
3. Referential integrity: maintains relationships between tables, referencing other tables requires active maintenance.

# Relations
- Relations are formed from a set of tuples
>![[Pasted image 20211112223946.png|500|500]]


# Flat file systems
- Data stored in different files each with a specific format and specific apps that understand the format
## Downsides
- No standards for data control
- Duplicate data can be present (columns & rows)
- Data access difficult to manage, unable to generate complex queries
- Multiple owners, files, location making security difficult
- Few automates checks for data entry/conversion

# DBMS
- A DBMS provides 3 main services:
- **SQL intergrates all of these in one language** 
## 1. Data definition language (DDL)
- Structure that data is conecptually stored (scheme), a group of tables in a DB is called a schema
## 2. Data manipulation language (DML)
- Ability to manipulate data (insert,delete,update,select)
## 3. Data control language (DCL)
- Control data privleges (access rights), used to control access to data stored in a DB

# ANSI-SPARC Architecture
## ANSI
- American National Standards Institute
## SPARC
- Standard Planning And Requirements committee
## The Architecture
>![[Pasted image 20211213221229.png]]
- Each level can be described by a schema
## External level
- Defines different views of database tailored to users (SELECT)
## Organization level
- What data is stored, how it's arranged, data relationships, security and data relationships (CREATE)
## Internal level
- Structure data is written/receieved, how data is ordered, space allocations and compression/encryption

# Schemas
- These describe how each level operates	
- Conceptual schema: database content organization
- Internal schema: how data is stored
- Schemas allow data to be independent with implementation/optimization left to DBMS
- Transfer of requests between layers is called mapping
- **Data independence** describes hiding implementation from other layers
- Physical data indepence: hardware change does not effect relation structure
- Logical data indepence: conceptual scheme can be changed without effecting external shema.

## Data relations 
[[SQL_language]]
- There are 3 different types of relations in the database:??**one-to-one**.??**one-to-many, and**.??**many-to-man**

>![[Pasted image 20220618083239.png]]