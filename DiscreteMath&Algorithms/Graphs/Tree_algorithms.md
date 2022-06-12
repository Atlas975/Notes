# Tree algorithms
[[Tree_ADT]]
- Unlike graphs, keeping track of previous nodes isn't necessary making the traversal process much more straightforward
>![[Pasted image 20220317121418.png]]
# Breadth-first tree search
- On a tree, a breadth first search is done by stepping through one layer at a time from left to right.
- Breadth first traversal example:
>![[Pasted image 20220317120624.png]]
>![[Pasted image 20220318120007.png]]


# Depth-first tree search
- There are multiple core depth first algorithms
- The three main examples are post,pre and inorder searches
## Preorder
- Middle -> Left -> Right

>![[Pasted image 20220318122905.png]]
>![[Pasted image 20220318122953.png]]

## Postorder 
- Left -> Right -> Middle  (also known as the suffix walk)

>![[Pasted image 20220318123351.png]]
>![[Pasted image 20220318123701.png]]

- Example suffix walk:

>![[Pasted image 20220317122911.png]]
- This is often used for shortest path algorithms where edge weights are present and we need to find the best way to reach a leaf node

## Inorder
- Left -> middle -> right
# Self balancing trees
- Key property is that **reaching any node leaf takes same number of moves**
- Particularly useful for index based lookup systems
- Example lookup system using first letter of username
>![[Pasted image 20220318124317.png]]
- However distributions of users can still vary creating uneven sizes
- This can be solves using a self-balancing tree eg a B-tree

## B-tree
- Start by defining a maximum number of nodes
- Once that node limit is reached, a split occurs up to the same maximum number of children
- Example maximimum is 2
>![[Pasted image 20220318124629.png]]

