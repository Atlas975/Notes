> [!important]- Metadata
> **Tags:** #Programming #Databases 
> **Located:** ProgramLanguages/SQL
> **Created:** 02/03/2023 - 15:23
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
# SQL Joins
- Multiple [[SQL_language|SQL]] join types exists, each select group can be taught of as a [[Sets|set]]

![[Pasted image 20220120173210.png|550|550]]


## EXISTS operator
- Checks if a subquery returns any rows. Returns rows only where the subquery returns True
```sql
SELECT * FROM employees WHERE EXISTS (
    SELECT * FROM salaries WHERE salaries.employee_id = employees.id
);
```
## ALL operator
- Used to specify a condition that must be true for all rows returned by a subquery.
```sql
SELECT * FROM employees WHERE salary > ALL (SELECT salary FROM contractors);
```
## ANY operator
- Used to specify a condition that must be true for at least one row returned by a subquery.
```sql
SELECT * FROM employees WHERE salary > ANY (SELECT salary FROM contractors);
```

## UNIQUE operator
- Used to specify that rows should only be returned if the subquery has no duplicates 
```sql
SELECT S.name FROM Sailer S WHERE UNIQUE(
    SELECT R.bid FROM Reserves R WHERE S.sid=R.sid
)
```


## DIVISION join 
![[Pasted image 20230304144310.png|650|650]]

## INTERSECT join 
![[Pasted image 20230304144545.png|350|350]]