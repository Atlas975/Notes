# Graphs
- Graphs are made up of nodes and edges
- Nodes are sometimes called vertices and edges are sometimes called arcs.
- Example graph with no self reference:
>![[Pasted image 20220307113748.png]]
self-reference graph:
>![[Pasted image 20220307113909.png]]
- Graphs also commonly have data associated with them, example:
>![[Pasted image 20220307114052.png]]



## Sub-graphs
- A graph that can be formed with only a subset of nodes and edges from another graph, also applies to undirected graphs
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
- An undirected graph is connected only if theres a path between two vertices
- A tree is connected graph if a loop isnt possible
>![[Pasted image 20220307120851.png]]

## Spanning trees
- A tree that includes all the vertices of another graph
>![[Pasted image 20220307121032.png]]

## Minimum spanning tree
- A tree with the minimum total sum of edge values
>![[Pasted image 20220307121306.png]]
- **If the weight of each edge in a connected graph is distinct**, then the graph contains exactly one (unique) minimum spanning tree.

# Complementary graph
- A graph with the same set of nodes, found by connecting every node and removing the original edges (I)
>![[Pasted image 20220307121824.png]]

# Graph density
- A measure between 0 and 1 describing the strength of connections
>![[Pasted image 20220307122057.png]]

- A graph is strongly connected if any node can be reached from another
>![[Pasted image 20220307122153.png]]

# Graph API
>void add_node(n)  
void rem_node(n)  
void add_edge(n, m)  
void rem_edge(n, m)  
bool adjacent(n, m)  
item[] get_neighbours(n)

- A set is used as no two nodes are supposed to have the same value

## Adjacency matrix representation
- Adjacency matrix API
	
>void add_node(n)  
void rem_node(n)  
void add_edge(n, m)  
void rem_edge(n, m)  
bool adjacent(n, m)  
item[] get_neighbours(n)
- Two cells modified for every add and removal in undirected graph
>![[Pasted image 20220307123842.png]]
- One cell modified in a directed graph
>![[Pasted image 20220307124205.png]]