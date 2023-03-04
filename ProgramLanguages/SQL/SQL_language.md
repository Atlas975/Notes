---
aliases: [SQL]
---

> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** ProgramLanguages
> **Created:** 26/12/2022 - 09:28
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
# SQL language
## Evaluation strategy
- The semantics of an SQL query follows the following evaluation strategy:
	1. Compute cross-product of [[Database_relations|relation]] list 
	2. Discard resulting tuples if **conditions** are not matched 
	3. Display attributes that are in **attribute list**
	4. If **DISTINCT** specified discard duplicates 
- An optimised strategy will now follow this order but syntactically this is the order SQL performs it's operation  

![[Pasted image 20230304160932.png|550|550]]
## Order of operations

![[Pasted image 20211112105450.png|450|450]]
![[Pasted image 20220605145618.png|450|450]]

## Aggregate functions

![[Pasted image 20211112110620.png|450|450]]

## GROUP BY
- Allows the separation of aggregate functions
```sql
SELECT region, AVG(students) FROM unis GROUP BY region;
```

## HAVING
- Unlike where, the having clause can filter by aggregate functions

![[Pasted image 20220211214421.png|450|450]]

# SQL common data types

![[Pasted image 20211112224739.png|450|450]]

# Table
## Creation

> CREATE TABLE mytable(
id int unsigned NOT NULL auto_increment,
username VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

# Keys
##### Example 3 linked tables schema

![[Pasted image 20220605203338.png|450|450]]

```sql
#note foreign key syntax can vary, current is for mySQL
CREATE TABLE Airlines (
  `aid` INTEGER PRIMARY KEY,
  `name` VARCHAR(9),
  `founded` DATETIME
);

INSERT INTO Airlines
  (`aid`, `name`, `founded`)
VALUES
  ('1', 'Swiss', '2002-03-31'),
  ('2', 'United', '1926-04-06'),
  ('3', 'Lufthansa', '1953-01-06'),
  ('4', 'Austrian', '1957-09-30'),
  ('5', 'Aegean', '1999-05-28');
  
  
CREATE TABLE Planes (
  `pid` INTEGER PRIMARY KEY,
  `type` VARCHAR(20),
  `seats` INTEGER
);

INSERT INTO Planes
  (`pid`, `type`, `seats`)
VALUES
  ('1', 'Airbus A340-300','291'),
  ('2','Airbus A330-300','236'),
  ('3', 'Boeing 777-300ER','340'),
  ('4', 'Bombardier CS100', '125'),
  ('5', 'ATR 72-600', '70');
  
  
CREATE TABLE Fleets (
  `aid` INTEGER,
  `pid` INTEGER,
  `number` INTEGER,
  FOREIGN KEY(`aid`) REFERENCES Airlines(`aid`),
  FOREIGN KEY(`pid`) REFERENCES Planes(`pid`)
);

INSERT INTO Fleets
  (`aid`, `pid`, `number`)
VALUES
  ('1', '2', '3'),
  ('1', '3', '2'),
  ('2', '2', '7'),
  ('3', '3', '4'),
  ('4', '2', '10'),
  ('4', '4', '2'),
  ('5', '5', '4');
```
- Primary keys (eg ID) uniquely identify tuples in a relation (ensuring data integrity)
- Foreign keys (eg Names) cross-reference data between tables.

## Foreign keys

![[Pasted image 20211112225055.png|500|500]]
>ALTER TABLE orders ADD FOREIGN KEY (salesPersonID) REFERENCES employees(employeeID) ;

## Insertion

> INSERT INTO mytable (username,email)
VALUES("Adil","Adil@gmail");

#### Both single and double quotes work
## Alter

> ALTER TABLE orders ADD FOREIGN KEY (customerID) REFERENCES people(person ID);

## Delete

>DELETE FROM mytable WHERE id=8;

# Database
## View databases

> SHOW databases;

## Show tables while in database

>SHOW tables;

# Select
## Generic

>SELECT * FROM _table_name_;

## Multiple rows

>SELECT _column1_, _column2, ..._  
FROM _table_name_;

# Between
- Selects in a range:

>SELECT * FROM Products  
WHERE Price BETWEEN 10 AND 20;

# In
- Filters to specific columns

> SELECT name FROM unis WHERE region IN ('North West', 'North East');

# SQL Join types 
- Joining two tables without a filter will return the [[Sets#Cartesian product]] of the two tables. An example of filtering without joins:

![[Pasted image 20211127172815.png|450|450]]

- Natural join example:

![[Pasted image 20211127181622.png|450|450]]

- Three table example:

![[Pasted image 20211127181926.png|450|450]]
![[Pasted image 20211127182002.png|450|450]]

- Left/right join examples:

![[Pasted image 20211127183335.png|450|450]]
![[Pasted image 20211127183434.png|450|450]]

- Outer join example: **NOT MYSQL supported**

![[Pasted image 20211127183719.png|450|450]]

## Union (full merge)

>SELECT city FROM employees  
UNION  
SELECT city FROM customers;

- Must return:
1. Same num of columns
2. Same data type
3. Same order
# Wildcard / Like operator
![[Pasted image 20211119124008.png|450|450]]
- Special case: stars with L,any character,n,any character,on

>SELECT * FROM Customers  
WHERE City LIKE 'L_n_on';

# SUBSTR
- Example: check if first two letters are equal to a substring

![[Pasted image 20220123212152.png|450|450]]

# Is NULL
- Selects all rows that have a specific column equal to NULL.

> SELECT * FROM unis WHERE founded IS NULL

# EXTRACT operator
- Allows for a specific format of a date to be extracted from the **date** data type

![[Pasted image 20220216095901.png|450|450]]

- Example:
```sql
SELECT EXTRACT(WEEK FROM "2017-06-15");
```

>output:24

# ORDER BY
- Orders retrieved data:
- Order by descending

>SELECT * students FROM school ORDER BY students DESC;

- Order by ascending

>SELECT * students FROM school ORDER BY students ASC;

# LIMIT
- Limits the amount of rows returned by a query

> SELECT students FROM school ORDER BY students DESC LIMIT 5;

# Subqueries
** SQL is optimized for joins, as such operations using them are faster than subqueries**
- Typically used in where clause to further filter data
- Example:

![[Pasted image 20211204194348.png|450|450]]

- Aggregate functions can be used to make sure only a single value is returned
- Example:

![[Pasted image 20211204194545.png|450|450]]

- Example of sub vs join

![[Pasted image 20211204195219.png|450|450]]

## Multi-layer subquery

![[Pasted image 20211204201044.png|450|450]]

# In operator
- Another method of ensuring only one value is returned, it returns TRUE if a value is in a list of values 

![[Pasted image 20211204195008.png|450|450]]

## Correlated subqueries
- Performs boolean checks

![[Pasted image 20211204200539.png|450|450]]

- Examples:

![[Pasted image 20211204200357.png|500|500]]
![[Pasted image 20211204200657.png|500|500]]

- Complex query example:

![[Pasted image 20211207091855.png|450|450]]

## Not exist (outer join)

![[Pasted image 20211204201211.png|450|450]]

# SQL case formatting

![[Pasted image 20220117231743.png|450|450]]
![[Pasted image 20220131185849.png|450|450]]

# SQL CAST
- SQL common cast options

![[Pasted image 20220127230355.png|450|450]]

- Allows for a datatype to be changed, eg string to float

![[Pasted image 20220123213408.png|450|450]]
![[Pasted image 20220123213642.png|450|450]]

# SQL CONCAT
```sql
SELECT p.patient_id,CONCAT(
  CAST(p.patient_id AS STRING),
  CAST(LEN(p.last_name) AS STRING),
  CAST(YEAR(p.birth_date) AS STRING)
  ) AS temp_password
FROM patients as p
JOIN admissions AS a
ON p.patient_id=a.patient_id
GROUP BY p.patient
```

# SQL COALESCE
- Alternative to IS NULL
- Example, check product first than check product code if that's null

![[Pasted image 20220123214059.png|450|450]]

# Temporary tables

![[Pasted image 20220129124752.png|450|450]]
![[Pasted image 20220129124244.png|450|450]]

- Appending data to tables:

![[Pasted image 20220129124515.png|300|300]]

# WITH keyword
- A method of creating temporary tables in order to help debug code

![[Pasted image 20220212162636.png|450|450]]

- Complex example
```q;
               WITH RelevantRides AS
               (
                   SELECT EXTRACT(HOUR FROM trip_start_timestamp) AS hour_of_day,trip_miles,trip_seconds
                   FROM `bigquery-public-data.chicago_taxi_trips.taxi_trips`
                   WHERE trip_start_timestamp>'2017-01-01'
                   AND trip_start_timestamp<'2017-07-01'
                   AND trip_seconds>0 AND trip_miles>0
               )
               SELECT hour_of_day,COUNT(1) AS num_trips,3600*SUM(trip_miles)/SUM(trip_seconds) AS avg_mph
               FROM RelevantRides
               GROUP BY hour_of_day
               ORDER BY hour_of_day DESC
```

# RANK()

![[Pasted image 20220222154508.png|450|450]]

# ROW_NUMBER()

![[Pasted image 20220222154411.png|450|450]]

# DENSE_RANK()

![[Pasted image 20220222154601.png|450|450]]
![[Pasted image 20220222154632.png|450|450]]

# NTITLE()

![[Pasted image 20220222155256.png|450|450]]

# Analytic functions

![[Pasted image 20220221165640.png|450|450]]

- Example:

![[Pasted image 20220221170329.png|450|450]]
![[Pasted image 20220221170348.png|450|450]]

# PARTITION BY

![[Pasted image 20220221165540.png|450|450]]

- Example:

![[Pasted image 20220221170759.png|450|450]]
![[Pasted image 20220221170953.png|450|450]]
![[Pasted image 20220221171901.png|450|450]]

- Partition by with row numbers
```
SELECT Customercity,

 CustomerName,

 ROW_NUMBER() OVER(PARTITION BY Customercity

 ORDER BY OrderAmount DESC) AS "Row Number",

 OrderAmount,

 COUNT(OrderID) OVER(PARTITION BY Customercity) AS CountOfOrders,

 AVG(Orderamount) OVER(PARTITION BY Customercity) AS AvgOrderAmount,

 MIN(OrderAmount) OVER(PARTITION BY Customercity) AS MinOrderAmount,

 SUM(Orderamount) OVER(PARTITION BY Customercity) TotalOrderAmount

FROM [dbo].[Orders];
```

# TIMESTAMPDIFF()

![[Pasted image 20220222204220.png|450|450]]

# Nested data

![[Pasted image 20220222211651.png|450|450]]

# Repeated data

![[Pasted image 20220222211934.png|450|450]]
![[Pasted image 20220222212038.png|450|450]]
