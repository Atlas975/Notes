# Databases
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
# Data terminology
- Databases contain multiple **tables**
- Tables are a collection of  records (**rows**)
- Records are a collection of fields (**columns**)

# Three components of relational DBMS
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