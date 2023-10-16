> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms
> **Created:** 22/09/2023 - 13:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Lazy propagation
- **Optimisation Technique:** An optimisation technique used in tree-based data structures such as [[Binary_index_tree|BIT]] / [[Segment_trees|segment]] trees to minimize the number of updates during range operations.
- **Deferred Updates:** Instead of immediately modifying tree nodes during updates, it postpones updates until necessary, storing them in a separate structure (lazy tree or array).
- **Efficiency:** Particularly useful when there are multiple updates on overlapping or adjacent ranges, reducing time complexity by avoiding redundant updates.
- **Query Handling:** When querying, checks the lazy tree for pending updates and applies them to the main tree as needed to maintain correct values.
- **Propagation:** After applying pending updates, propagates any remaining updates to child nodes in the lazy tree to ensure consistency.
- **Complexity Trade-off:** While improving efficiency for certain scenarios, implementing lazy propagation adds complexity to the data structure code.
