> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 29/04/2023 - 19:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Query optimisation
- Process of election an execution plan for a query, this strategy often aims to for efficiency as deducing an optimal strategy can be expensive for complex queries  
- Techniques for doing this may be:
	- Cost based 
	- Semantics based 
	- Heuristic based 
	- Conjunction of multiple techniques 

## Query interpreter components
- **Scanner**: identifies tokens such as [[SQL_language|SQL]] keywords, attribute names and relations in query text
- **Parser**: checks if query follows grammar rules of the query language 
- **Validation**: checks if all attributes and relation names are valid / exist in database schema 
- **Internal query representation**: usually a query tree / graph
## Query processing components
- **Optimiser**: devises a suitable execution plan for retrieving data from its [[Database_systems|database]]
- **Code generator**: generates code from the optimisers plan 
- **Runtime database processor**: runs query code, returns error messages if any
## Cost based optimisation 
- The time taken to complete an operation, memory and storage are also key factors 
- Intermediate files created during the query also add a storage cost along with communication costs with any inter-database communication. Different goals for varying database structures:
- Large databases 
    - Minimise access cost to secondary storage
     - Minimise \# of block transfers between disk and main memory : reduce volume of data moved
- Smaller databases 
    - Minimise computation cost 
    - Most of data involved in query can be stored completely in main memory 
- Distributed databases 
    - Minimise communication cost

## Semantic based optimisation 
- Uses schema constraints to perform optimisation 
- Eg if a value if already specified as needing to be UNIQUE / NOT NULL on a schema level
- Queries based on these constraints can avoid overhead that's already managed on a schema level or in some cases recognise that the query is redundant and has no reason to run at all eg:
```sql
SELECT * FROM TABLE WHERE NonNullField IS NULL /* won't run at all */
```


## Canonical query trees
- Simplifies execution path, the outputs of each relation can propagate upwards until the root node is executed. Starts with leaf nodes then gradually replaces internal nodes with their output
- Eg: this select statement can take the cartesian product  of two tables and then perform the appropriate projection to join it with ship upwards in the canonical tree

![[Pasted image 20230503014710.png|500|500]]
![[Pasted image 20230503014529.png|500|500]]

## Heuristic based optimisation 
- A common query heuristic is to apply selections and projections prior to any joins
- This is because these reduce the size of relations, thus minimising the amount of data that has to be processed by the rest of the query. Optimised query tree: 

![[Pasted image 20230503020659.png|500|500]]


- Further optimisation can be done by moving branches around to ensure that the smallest cartesian products possible are produced upon joins that must happen 
- In general keep the most restrictive joins and selects as close to leaf level as possible 