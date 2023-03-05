---
aliases: normal form
---

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

![[Pasted image 20230227164343.png|350|350]]

- This is not always ideal for performance but is valuable for [[Database_constraints#Integrity constraints|data integrity]], **decomposition** is done to remove redundant data that may lead to anomalies 
- This is achieved through steps known as normal forms, these steps are designed to prevent the following from occurring within a [[Database_systems|database]]
	- **Insertion anomalies**: when its impossible to insert data without violating it's relational constraints, eg insert a student with a missing course when null is not allowed for course 
	- **Deletion anomalies**: when deleting data results in the loss of essential information that should have been stored elsewhere, this is prevalent with redundant data dependency 
	- **Modification anomalies**: when modifying data leads to data inconsistencies, eg updating a name with the change not propagating elsewhere
## 1NF: Atomic values
- No multi-valued attributes, each attribute should have a single value that cannot be decomposed further
- The values in each column should also obey [[Database_constraints#Domain constraints|domain constraints]]

> **Problem:**
> 
> | staff_num | staff_name    | ==staff_email== |
>  --------- | ------------- | ----- |
>  123       | John Doe      | `john.doe@domain.com`, `jdoe@ajob.org`     |
>  456       | Emily Doe      | `jane@domain.com` `jane@anemployer.net` |
>  789       | Robert Tables | `littlebobbytables@domain.com`                          |
> Staff email is non-atomic, instead containing multiple comma-delimited entries, cannot easily select distinct employee emails
> 
> **Solution:**
> 
> | ==staff_num== | staff_name    |
>  | --------- | ------------- |
>  | 123       | John Doe      |
>  | 456       | Emily Doe      |
>  | 789       | Robert Tables |
>  
>  | staff_num | ==staff_email==                                         |
>  | --------- | --------------------------------------------------- |
>  | 123       | `john.doe@domain.com`   |
>  | 123       | `jdoe@anemployer.org`   |
>  | 456       | `jane@domain.com`           |
>  | 456       | `jane@anemployer.net` |
>  | 789          |`littlebobbytables@domain.com`                                                     |

## 2NF: Prime attribute dependence
- No partial aspect of a key should determine [[Database_keys#Non-prime attributes|non-prime attributes]],  attributes should be  fully [[Database_relations#Functional dependency|functionally dependent]] only on the entire key alone
- The table should also be in [[#1NF: Atomic values|1NF]]

> **Problem**: 
> 
> | project_num | ==team==   | role            | ==team_hq==       |
> | ----------- | ------ | --------------- | ------------- |
> | 123         | Team 1 | User Interface  | New York      |
> | 123         | Team 2 | Database Design | San Francisco |
> | 465         | Team 2 | API Development | San Francisco |
>  team_hq is partialy-dependent on team (part of the candidate key), violating 2NF
> 
> **Solution:**
> 
> | project_num | ==team==   | role            |
> | ----------- | ------ | --------------- |
> | 123         | Team 1 | User Interface  |
> | 123         | Team 2 | Database Design |
> | 465         | Team 2 | API Development |
> 
> | team   | ==team_hq==       |
> | ------ | ------------- |
> | Team 1 | New York      |
> | Team 2 | San Francisco |
> 

## 3NF: Non-prime attribute dependence
- Every [[Database_keys#Non-prime attributes|non-prime attribute]] should be independent of other non-prime attributes 
- The table should also be in [[#2NF: Non-prime attribute dependence|2NF]]

> **Problem:**
>  
>  | staff_num | staff_name | ==manager_num== | ==manager_name== |
>  | --------- | ---------- | ----------- | ------------ |
> | 123 | John Doe | 987 | Sara Manageer |  
> | 456 | Emily Doe | 654 | Jay Deboss |  
> | 789 | Robert Tables | 321 | Elle Hefe |  
>  manager_name is dependent on manager_num which is not a prime attribute
> 
> **Solution**
> 
> | staff_num | staff_name    | ==manager_num== |
> | --------- | ------------- | ----------- |
> | 123       | John Doe      | 987         |
> | 456       | Emily Doe      | 654         |
> | 789       | Robert Tables | 321         |
>  
>  | manager_num | ==manager_name==  |
> | ----------- | ------------- |
> | 987         | Sara Manageer |
> | 654         | Jay Deboss    |
> | 321         | Elle Hefe     |

## 3.5NF: Boyce-Codd normal form
- In BCNF, every non-key attribute is exclusively dependent on the candidate key of the table 
- While [[#3NF: Non-prime attribute dependence|3NF]] aims to eliminate data redundancy by removing non-key attributes that depend on other non-key attributes, BCNF takes this a step further by removing non-key attributes that depend on any non [[Sets#proper subset]] of the candidate key

![[Pasted image 20230302143940.png|400|400]]
- A relation is in BCNF if for all ($X\to A$ and $A \in X$) where $X \text{ is the superkey for }R$
- The only non-trivial functional dependencies that should hold are key constraints, any non-trivial functional dependencies can be deduced through [[#Armstrongs axioms]]

> **Problem:**
> 
> | ==product_id== | product_name | ==country_id== | country_name | region_name |
| ---------- | ------------ | ---------- | ------------ | ----------- |
| 1          | Product A    | 1          | Country X    | Region 1    |
| 1          | Product A    | 2          | Country Y    | Region 1    |
| 2          | Product B    | 1          | Country X    | Region 1    |
| 2          | Product B    | 2          | Country Y    | Region 1    |
| 3          | Product C    | 3          | Country Z    | Region 2    |
> 
> Candidate key is (product_id , country_id) but dependencies $\text{product\_{id}}\to \text{product\_{id}}$ and $\text{country\_id}\to(\text{country\_{name,} region\_{name})}$ exist, these can be split into subrelation so that the only non-trivial dependency that exists in each relation is the candidate key
> 
> **Solution**
> 
> | ==product_id== | product_name |
| ---------- | ------------ |
| 1          | Product A    |
| 2          | Product B    |
| 3          | Product C    |
> 
> | ==country_id== | country_name | region_name |
| ---------- | ------------ | ----------- |
| 1          | Country X    | Region 1    |
| 2          | Country Y    | Region 1    |
| 3          | Country Z    | Region 2    |
> 
> | ==product_id== | ==country_id== |
| ---------- | ---------- |
| 1          | 1          |
| 1          | 2          |
| 2          | 1          |
| 2          | 2          |
| 3          | 3          |

### Armstrongs axioms
- These 5 axioms act as [[Inference_rules|inference rules]] for functional dependencies:
1. [[Relations#Reflexivity|Reflexivity:]] if $X \in Y$ then $Y\to X$ (trivial FD)
2. [[De_Morgans_law|Augmentation:]] if $X \to Y$ then $XZ \to YZ$ for any $Z$
3. [[Relations#Transitivity|Transitivity:]] if $X \to Y$ and $Y\to Z$ then $X\to Y$
4. [[Sets#Union|Union]]: if $X\to Y$ and $X\to Z$ then $X\to YZ$
5. [[Boolean_logic|Decomposition:]] if $X\to YZ$ then $X\to Y$ and $X \to Z$
- Example usage 

![[Pasted image 20230228154605.png|450|450]]
## 4NF: Multi-valued dependencies
- The table should also be in [[#3NF: Non-prime attribute dependence|3NF]]

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

## 5NF: Join dependencies
- The table should also be in [[#4NF: No multi-valued dependencies|4NF]]

> **Problem:**
> 
> | project_num | staff_num | project_asset  |
| ----------- | --------- | -------------- |
| 12345       | 123       | User Interface |
| 12345 | 456 | Data Science |  
| 45678 | 789 | API Development |  
| 78901 | 123 | Data Visualization |  
> 
All three attributes combine to form a candidate key, adding new entries is difficult as scenarios such as  adding a new project_asset to a project_num might temporarily need a missing staff_num. It's not possible to create an unassigned project 
> 
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
> 


