> [!important]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** ProgramLanguages/SQL
> **Created:** 17/02/2023 - 17:50
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
# SQL patterns

> ![[Pasted image 20230217175520.png|350|350]]
> ![[Pasted image 20230217175535.png|350|350]]
> ![[Pasted image 20230217180342.png|350|350]]
> ![[Pasted image 20230217180403.png|350|350]]

## SQL where filtering

```sql
SELECT *
from patients
WHERE
  first_name LIKE '__r%'
  AND gender = 'F'
  AND month(birth_date) IN (2, 5, 12)
  AND weight between 60 AND 80
  AND patient_id % 2 = 1
  AND city = 'Kingston';
```


## SQL column comparison

```sql
SELECT pr.province_name
FROM patients AS pa
  JOIN province_names AS pr ON pa.province_id = pr.province_id
GROUP BY pr.province_name
HAVING
  SUM(gender = 'M') > SUM(gender = 'F');
```


## SQL math query

```sql
SELECT
  patient_id,
  weight,
  height,
  (weight / POWER(height / 100.0, 2)) >= 30 isObese
FROM patients;
```

```sql
SELECT
  COUNT(*) as patients_in_group,
  (floor(weight / 10) * 10) AS weight_group
FROM patients
GROUP BY weight_group
ORDER BY weight_group DESC;
```
