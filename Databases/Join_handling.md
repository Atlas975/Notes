> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 01/05/2023 - 15:18
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Join handling
- Joining is expensive in [[SQL_language|SQL]] as its a [[Time_complexity|O(M*N)]] operation that calculates a [[Sets#Cartesian product|cartesian product]] 
- Multiple algorithms exist in order to perform these faster when working on: 
$$R\Join_{A=B}S$$
$$A \text{ and } B =\text{join attributes}$$
## J1: Nested loop join
- Default brute force algorithm that iterates over all records 
-  Used when no [[Access_routines|access path]] is available on either file 
```python
table = []
n, m = len(R), len(S)
for A in range(n)
    for B in range(m)
        if join_condition:
            table.append([R[A], S[B]])
```
## J2: Single loop access structure
- Used when an access structure is available 
- Available when an [[Database_indexing|index]] or [[Hash_tables|hash key]]  exists for one of the the two join attributes (A or B)

## J3: Sort merge join
- Only possible when R and S are physically ordered by join attributes A and B but is extremely efficient compared to other join methods
- Both files can be scanned [[Concurrency|concurrently ]] and then have their records matched 
## J4: Hash-join 
- R and S are hashed into the same hash file, single pass performed on each file to fill hash buckets, works as duplicate hash keys produce the same result 
- Each bucket then examined for records that produce desired join result 