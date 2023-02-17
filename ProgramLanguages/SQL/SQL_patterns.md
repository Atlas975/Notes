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
## SQL where filtering 

–mcncenn
```
We are looking for a specific patient. Pull all columns for the patient who matches the following criteria:  
- First_name contains an 'r' after the first two letters.  
- Identifies their gender as 'F'  
- Born in February, May, or December  
- Their weight would be between 60kg and 80kg  
- Their patient_id is an odd number  
- They are from the city 'Kingston'
```

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
