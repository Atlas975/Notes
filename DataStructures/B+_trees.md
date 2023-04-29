> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** DataStructures
> **Created:** 29/04/2023 - 12:25
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# B+ Trees
- A variation of the [[B_trees|B tree]] which only has data pointers stored at the leaf-node level 
- The internal nodes in the tree are only used to guide the search 

![[Pasted image 20230429123255.png|550|550]]
- Frequently used in [[Database_indexing#Multi-level indexes|multi-level indexing]] for [[Database_systems|databases]]
- Some B+ implementations may also include a previous pointer for backwards traversal 
- B+ trees are better optimised than their B-tree counterpart  for any sort of sequential access such as with **range queries** as the links between leaf nodes can be followed
## B vs B+ trees 
- B+ trees are able to store more entries in its internal nodes compare to standard B trees due to the lack of data pointers, this gives an improved search time due to the lower tree height
- B+ tree data can be accessed either sequentially or directly 
- B+ trees take up more overhead than their B tree counterpart due to the use of more pointers with internal nodes only directing the search to their associated data pointer at the leaf level 