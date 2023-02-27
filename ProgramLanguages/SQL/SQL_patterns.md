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

![[Pasted image 20230217175520.png|350|350]]
![[Pasted image 20230217175535.png|350|350]]
![[Pasted image 20230217180342.png|350|350]]
![[Pasted image 20230217180403.png|350|350]]

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

```sql
SELECT
  p.patient_id,
  p.first_name,
  p.last_name,
  d.specialty
FROM patients p
  JOIN admissions a ON p.patient_id = a.patient_id
  JOIN doctors d on a.attending_doctor_id = d.doctor_id
WHERE
  a.diagnosis = 'Epilepsy'
  AND d.first_name = 'Lisa';
```

## SQL custom groups 

```sql
WITH insured_list AS (
    SELECT (patient_id % 2 = 0) has_insurance from admissions
)
SELECT
  CASE WHEN has_insurance THEN 'Yes' ELSE 'No'END insured,
  SUM(CASE WHEN has_insurance THEN 10 ELSE 50 END) admission_total
FROM insured_list
group by insured;
```

```sql
SELECT
  DISTINCT p.patient_id,
  (
    p.patient_id || FLOOR(LEN(p.last_name)) || FLOOR(YEAR(p.birth_date))
  ) tmp_password
FROM patients as p
  JOIN admissions AS a ON p.patient_id = a.patient_id
GROUP BY p.patient_id;
```

```sql
SELECT
  ROUND(AVG(gender = 'M') * 100, 2) || '%' male_percentage
FROM patients;
```
## SQL column comparison

```sql
SELECT pr.province_name
FROM patients pa
  JOIN province_names pr ON pa.province_id = pr.province_id
GROUP BY pr.province_name
HAVING
  SUM(gender = 'M') > SUM(gender = 'F');
```

```sql
SELECT province_name
FROM province_names
ORDER BY
  province_name = 'Ontario' DESC,
  province_name ASC
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
  COUNT(patient_id),
  (weight - weight % 10) weight_group
FROM patients
GROUP BY weight_group
ORDER BY weight_group DESC;
```

## SQL statistical analysis 
```sql
WITH admission_counts AS (
    SELECT
      admission_date,
      COUNT(*) cnt
    FROM admissions
    GROUP BY admission_date
  )
SELECT
  admission_date,
  cnt,
  cnt - LAG(cnt, 1) OVER() AS admission_growth
from admission_counts;
```