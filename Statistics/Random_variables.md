> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 27/04/2024 - 21:42
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Random variables
- A re


## Types of Random Variables
- **Discrete Random Variable**
    - Can take a countable number of distinct values.
    - Example: Sum of two dice faces.
- **Continuous Random Variable**
    - Can assume any numerical value within a specified range or intervals.
    - Example: Heights of individuals in a population.