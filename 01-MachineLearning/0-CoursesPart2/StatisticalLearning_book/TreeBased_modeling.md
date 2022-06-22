# Decision trees
>![[Pasted image 20220226170004.png]]
data used to form this decision tree cam be summarized at follows
>![[Pasted image 20220226165945.png]]
players with >4.5 years of experiance are partitioned to the right, players are than further divided based on hits

- These regions can be summarized as R1 ={X | Years<4.5}, R2 ={X | Years>=4.5,  
Hits<117.5}, and R3 ={X | Years>=4.5, Hits>=117.5}
- R1,R2 and R3 are known as terminal nodes / leaves, the segments that connect these are branches
- In this case the tree is built around the prediction that years is the most important predictor of salary followed by num of hits, but among experience players the number of hits matters much less 

# Process of building decision trees
>![[Pasted image 20220226171256.png]]
- The prediction spaced can theoretically be any shape
- Goal is to find regions that minimize RSS given by
>![[Pasted image 20220226171546.png]]
- Its impossible to consider every possible split in a given number of desired regions, for that reason a top-down greedy approach is taken called **recursive binary splitting**.
>![[Pasted image 20220226175030.png]]
 ## Recursive binary splitting
- Considered a greedy approach as for each step down the decision tree, the best split is made at that step rather than looking ahead to find a step that will result in the best possible tree at the end.
- In order to perform recursive binary splitting, we first select the predictor Xj and the cutpoint s such that splitting the predictor space into the regions {X|Xj < s} and {X|X j ≥ s} leads to the greatest possible reduction in RSS. (The notation {X|Xj < s} means the region of predictor
>![[Pasted image 20220226172354.png]]
- An example of a stopping procedure for splitting is to keep going until no region contains more than 5 observations
## Tree pruning
- Binary splitting can work well on training sets but is very likely to overfit actual data, another option is to split only if the decrease in RSS caused by the split exceeds a certain large threshold. 
- This results in smaller trees but a worthless split early on can also be followed by a great split. Thats why it's better to build a large tree and prune it over time.
>![[Pasted image 20220226173411.png]]

# Tree size effect on mean squared error
>![[Pasted image 20220226175330.png]]