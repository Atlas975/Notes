# Tree data type
[[Graphs]]
- Every tree is a graph but not vise versa
- A tree is a connected acylic graph (no loop)
- Consists of the root, internal nodes and leaf nodes
- Height refers to number of levels of a tree (also refers to max number of jumps available)
>![[Pasted image 20220314120554.png]]
- Tree edges = Number of nodes - 1
## K-ary trees
- Sets a maximum number of child nodes 
>![[Pasted image 20220314120700.png]]

## Balanced trees
- For all nodes, the height of child subtree dont differ by more than one
>![[Pasted image 20220314121330.png]]
- A balanced tree has O(log n) complexity

## Adjacency matrix representation
>![[Pasted image 20220314123040.png]]
assumes a directed graph from parent to children

## Tree API
>void add_node(n, m)  
void rem_node(n)  
void move_node(n, m)  
item[] get_children(n)