> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** DataStructures
> **Created:** 28/04/2023 - 10:53
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# B-Trees
- A specialised search tree with additional constraints to ensure the tree remains [[Trees#Unbalanced trees|balanced]]
- Frequently used in [[Database_indexing#Database indexing|Database indexing]] to perform as guided search for a record given a search field.  Used by [[File_systems|file systems]] such as [[New_technology_file_system|NTFS]]. 

![[Pasted image 20230428110030.png|500|500]]

- B-trees themselves can be stored on disk, algorithms exists for insertion and deletion while maintaining tree constrains such as its balance

![[Pasted image 20230428110204.png|550|550]]

## B-tree constraints 
- B-tree of order m is a tree which satisfies the following properties:
    - Every node has at most T children
    - Every internal node (non-root and non-leaf) has at least $\lceil{\frac{T}{2}}\rceil$children 
    - Every non-leaf node has at least 2 children 
    - All leaves on same level
    - Non-leaf node with k children contains k-1 keys