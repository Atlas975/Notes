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
- This is not always ideal for performance but is valuable for [[Database_constraints#Integrity constraints|data integrity]], **decomposition** is whats done to remove redundant data that may lead to anomalies 
- This is achieved through steps known as normal forms, these steps are designed to prevent the following from occurring within a [[Database_systems|database]]
	- **Insertion anomalies**: when its impossible to insert data without violating it's relational constraints, eg insert a student with a missing course when null is not allowed for course 
	- **Deletion anomalies**: when deleting data results in the loss of essential information that should have been stored elsewhere, this is prevalent with redundant data dependency 
	- **Modification anomalies**: when modifying data leads to data inconsistencies, eg updating a name with the change not propagating elsewhere
## 1NF: Atomic values
- No multi-valued attributes, each attribute should have a single value that cannot be decomposed further
- The values in each column should also obey [[Database_constraints#Domain constraints|domain constraints]]

> **Problem:**
> 
> | staff_num | staff_name    | staff_email |
| --------- | ------------- | ----- |
| 123       | John Doe      | [john.doe@domain.com](mailto:john.doe@domain.com)[,jdoe@ajob.org](mailto:,jdoe@ajob.org)     |
| 456       | Jane Doe      | [jane@domain.com](mailto:jane@domain.com)[,jane@anemployer.net](mailto:,jane@anemployer.net) |
| 789       | Robert Tables | [littlebobbytables@domain.com](mailto:littlebobbytables@domain.com)                          |

- Staff email is non-atomic, instead containing multiple comma-delimited entries, cannot easily select distinct employee emails

> **Solution:**
> 
> | staff_num | staff_name    |
> | --------- | ------------- |
> | 123       | John Doe      |
> | 456       | Jane Doe      |
> | 789       | Robert Tables |
> 
> | staff_num | staff_email                                         |
> | --------- | --------------------------------------------------- |
> | 123       | [john.doe@domain.com](mailto:john.doe@domain.com)   |
> | 123       | [jdoe@anemployer.org](mailto:jdoe@anemployer.org)   |
> | 456       | [jane@domain.com](mailto:jane@domain.com)           |
> | 456       | [jane@anemployer.net](mailto:,jane@anemployer.net) |
> | 789          |[littlebobbytables@domain.com](mailto:littlebobbytables@domain.com)                                                     |
> 

## 2NF: Non-key attribute dependence

> **Problem**:
> 
> | project_num | team   | role            | team_hq       |
| ----------- | ------ | --------------- | ------------- |
| 123         | Team 1 | User Interface  | New York      |
| 123         | Team 2 | Database Design | San Francisco |
| 465         | Team 2 | API Development | San Francisco |

- team_hq is only dependent on team not project_num, violating 2NF, the team_hq attribute can be split into a separate relation

> **Solution:**
> 
> | project_num | team   | role            |
| ----------- | ------ | --------------- |
| 123         | Team 1 | User Interface  |
| 123         | Team 2 | Database Design |
| 465         | Team 2 | API Development |
> 
> | team   | team_hq       |
| ------ | ------------- |
| Team 1 | New York      |
| Team 2 | San Francisco |

## 3NF: Dependence on only candidate key

> **Problem:**
> 
>  | staff_num | staff_name | manager_num | manager_name |
 | --------- | ---------- | ----------- | ------------ |
| 123 | John Doe | 987 | Sara Manageer |  
| 456 | Jane Doe | 654 | Jay Deboss |  
| 789 | Robert Tables | 321 | Elle Hefe |  

- manager_name is dependent on manager_num not staff_num not the candidate key

> **Solution**
> 
> | staff_num | staff_name    | manager_num |
| --------- | ------------- | ----------- |
| 123       | John Doe      | 987         |
| 456       | Jane Doe      | 654         |
| 789       | Robert Tables | 321         |
> 
> | manager_num | manager_name  |
| ----------- | ------------- |
| 987         | Sara Manageer |
| 654         | Jay Deboss    |
| 321         | Elle Hefe     |

## 4NF: No multi-valued dependencies

> **Problem:**
> 
> | project_num | staff_num | project_need       |
| ----------- | --------- | ------------------ |
| 12345       | 123       | User Interface     |
| 12345       | 456       | Data Science       |
| 46578       | 789       | API Development    |
| 78901       | 123       | Data Visualization |

- This implies a relationship between project need and staff_num which can take on multiple different values and is a redundant dependency to project_need

> **Solution:**
> 
> | project_num | staff_num |
| ----------- | --------- |
| 12345       | 123       |
| 12345       | 456       |
| 46578       | 789       |
| 78901       | 123       |
> 
> | project_num | project_need |
| ----------- | ------------ |
|       12345 | User Interface     |  
|       12345 | Data Science       |  
|       45678 | API Development    |  
|       78901 | Data Visualization |  

## 5NF: No join dependencies

> **Problem:**
> 
> | project_num | staff_num | project_asset  |
| ----------- | --------- | -------------- |
| 12345       | 123       | User Interface |
| 12345 | 456 | Data Science |  
| 45678 | 789 | API Development |  
| 78901 | 123 | Data Visualization |  

- All three attributes combine to form a candidate key, adding new entries is difficult as scenarios such as  adding a new project_asset to a project_num would have a missing staff_num. It's not possible to create an unassigned project 

> **Solution:**
> 
> | project_num | staff_num |
> | ----------- | --------- |
> | 12345       | 123       |
> |       12345 |       456 |  
> |       45678 |       789 |  
> |       78901 |       123 |  
> 
> | staff_num   | project_asset      |
> | ----------- | ------------------ |
> | 123         | User Interface     |
> | 456         | Data Science       |
> | 789         | API Development    |
> | 123         | Data Visualization |
> 
> | project_num | project_asset  |
> | ----------- | -------------- |
> | 12345       | User Interface |
> |       12345 | Data Science       |  
> |       45678 | API Development    |  
> |       78901 | Data Visualization |  
