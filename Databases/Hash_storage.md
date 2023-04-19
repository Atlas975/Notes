> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 19/04/2023 - 23:56
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Hash storage


## Hashing pitfalls 
-   **Hash collisions**: When two different keys produce the same hash value, a collision occurs. This can lead to slower search times of up to [[Time_complexity|O(n) worst case time complexity]]
-   **Difficulty with range queries**: Conventional hashing is not suitable for range queries as it only allows for exact matches.
-   **Difficulty with partial key searches**: Conventional hashing requires the entire key to be hashed, which can be a disadvantage when searching for records based on partial key matches.