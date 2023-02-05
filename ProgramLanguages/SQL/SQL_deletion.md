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
# Relationship deletion
- The type of deletion that should be used depends on a schema's [[Entity_relationship_model|ER model]]:
	- **ON DELETE CASCADE / REJECT:** use when there's total participation
	- **ON DELETE SET NULL / DEFAULT**: use when there's partial participation
	- **ON DELETE NO ACTION**: throws error if any child node exists 

> ![[Pasted image 20230205195548.png]]

## 1:1 Relations
### Partial 1:1
```sql
CREATE TABLE people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE passport_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    passport_number VARCHAR(255) NOT NULL,
    pid INT,
    UNIQUE (pid),
    FOREIGN KEY (pid) REFERENCES people(id) ON DELETE SET NULL
);
```


### Total 1:1
```sql
CREATE TABLE people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE passport_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    passport_number VARCHAR(255) NOT NULL,
    person_id INT NOT NULL,
    UNIQUE (person_id),
    FOREIGN KEY (person_id) REFERENCES people(id) ON DELETE CASCADE
);
```

## 1:N Relations
### Partial 1:N
```sql
CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    did INT,
    FOREIGN KEY (did) REFERENCES departments(id) ON DELETE SET NULL
);
```
### Total 1:N

```sql
CREATE TABLE managers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE CASCADE
);
```

## N:M Relations
- This relation type typically requires an intermediate join table. This creates a third relation which has foreign key referencing both parent tables 
- CASCADE deletion should be used in order to maintain [[Database_constraints#Key integrity|Key integrity]] in these kind of relations
```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);
```
## Unary relations 

```sql
CREATE TABLE family (
    fid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    father_id INT,
    FOREIGN KEY (father_id) REFERENCES family(id) ON DELETE CASCADE
);
```
> ![[Pasted image 20230205133433.png|550|550]]

## Weak entities 
```sql
CREATE TABLE Dep_policy (
    pname: 
)
```