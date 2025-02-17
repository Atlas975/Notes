> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** DataStructures
> **Created:** 27/02/2023 - 11:21
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Trees
[[Graphs]]
- Every tree is a graph but not vise versa
- A tree is a connected acylic graph (no loop)
- Consists of the root, internal nodes and leaf nodes
- Height refers to number of levels of a tree (also refers to max number of jumps available)
![[Pasted image 20220314120554.png|450|450]]
- Tree edges = Number of nodes - 1
## K-ary trees
- Sets a maximum number of child nodes 
![[Pasted image 20220314120700.png|450|450]]

## Balanced trees
- For all nodes, the height of child subtree dont differ by more than one
![[Pasted image 20220314121330.png|450|450]]
- A balanced tree has O(log n) complexity

## Adjacency matrix representation
![[Pasted image 20220314123040.png|450|450]]
assumes a directed graph from parent to children

## Tree API
>void add_node(n, m)  
void rem_node(n)  
void move_node(n, m)  
item[] get_children(n)


## Self balancing trees
- Key property is that **reaching any node leaf takes same number of moves**
- Particularly useful for index based lookup systems
- Example lookup system using first letter of username
 
![[Pasted image 20220318124317.png|450|450]]
- However distributions of users can still vary creating uneven sizes
- This can be solves using a self-balancing tree eg a B-tree


## Unbalanced trees
- Unbalanced trees have a max depth that is not minimised for a given set of keys, this results in the tree  becoming skewed overtime with leaf nodes that are not on the same level
- This gives the tree inconsistent search times and wastes more space than necessary

![[Pasted image 20230428110619.png|400|400]]
## B-tree
- Start by defining a maximum number of nodes
- Once that node limit is reached, a split occurs up to the same maximum number of children
- Example maximimum is 2
![[Pasted image 20220318124629.png|450|450]]

