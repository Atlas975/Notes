#ADTs
[[Abstract_data_types]]
# Graphs
- Graphs are made up of nodes (data) and edges (connections)

>![[Pasted image 20220307113748.png|450|450]]Nodes are sometimes called vertices and edges are sometimes called arcs.

- Self-referencing graphs may also exists
>![[Pasted image 20220307113909.png|450|450]]


## Sub-graphs
- A graph that can be formed with only a [[Sets#Subsets|subset]] of nodes and edges from another graph, also applies to undirected graphs

>![[Pasted image 20220307114636.png]] 

## Spanning sub-graph
- A graph formed from **all** nodes and a **subset** of edges of another graph

>![[Pasted image 20220307114809.png]]

## Acyclic graph
- A graph with no cycles


## Directed & Undirected Graphs
- Directed graphs only have edges that can be traversed in one direction (left)
- Undirected graphs have edges that can be traversed in both directions (right)

>![[Pasted image 20220307114412.png]]

# Trees
- An undirected graph is connected only if there's a path between two vertices
- A tree is a connected graph where a loop isn't possible

>![[Pasted image 20220307120851.png]]

## Spanning trees
- A tree that includes all the vertices of another graph

>![[Pasted image 20220307121032.png]]

## Minimum spanning tree
- A spanning tree with the minimum total sum of edge values

>![[Pasted image 20220307121306.png]]

- If the weight of each edge in a connected graph is distinct, then the graph contains exactly one (unique) minimum spanning tree.

# Complementary graph
- A graph with the same set of nodes, found by connecting every node and removing the original edges (I)

>![[Pasted image 20220307121824.png]]

# Graph density
- A measure between 0 and 1 describing the strength of connections

>![[Pasted image 20220307122057.png]]

- A graph is strongly connected if any node can be reached from another

>![[Pasted image 20220307122153.png]]

## Undirected graph dge count
- The number of possible edges in an undirected graph can be represented by:

>$$\frac{n(n-1)}{2}$$

# Graph API

>void add_node(n)  
void rem_node(n)  
void add_edge(n, m)  
void rem_edge(n, m)  
bool adjacent(n, m)  
item[] get_neighbours(n)

- A set is used as no two nodes are supposed to have the same value

## Adjacency matrix representation
- Two cells modified for every add and removal in undirected graph

>![[Pasted image 20220307123842.png]]

- One cell modified in a directed graph

>![[Pasted image 20220307124205.png]]

# Graph transversal
[[Graphs]]
- Two core methods of traversal, depth-first and breadth-first
- Both have challenges in the way loops are dealt with in a way that traversal isn't endless

## Depth-first traversal
- Involves attempting to visit every node once
- Requires recording the nodes have already been visited
- An order for routes need to be established when there are multiple edges

>![[Pasted image 20220310120801.png]]
if a node is reached with no edges, we backtrack to a previous node

- Algorithm summary

>![[Pasted image 20220310121107.png]]

- Recording each node results in a [[Graphs#Spanning trees]]

>![[Pasted image 20220310122036.png]]

## Breadth-first traversal
- Involves visiting neighbors first before going deeper into the tree
- Requires moving through each available edge simultaneously 

>![[Pasted image 20220310122303.png]]

# Dijkstra's shortest path
- Knowing the shortest path from one node to another by finding the set of edges with the smallest overall sum
- The distance from a node to itself is set to 0
- Example algorithm:

>![[Pasted image 20220310122523.png]]

- Completed algorithm example

>![[Pasted image 20220310124149.png]]
