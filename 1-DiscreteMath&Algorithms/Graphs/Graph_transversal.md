# Graph transversal
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