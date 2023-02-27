# Decision trees
## Decision vs regression trees
![[Pasted image 20220216123300.png|400|400]]
- Decision tree example
![[Pasted image 20220224085646.png|400|400]]
## Decision tree labels
![[Pasted image 20220216123408.png|400|300]]
![[Pasted image 20220216123431.png|400|300]]
![[Pasted image 20220216123452.png|400|300]]
# Deciding root node of decision tree
![[Pasted image 20220224085818.png|400|400]]
- We start by looking at how well each parameter predicts heart disease. This helps decide the root node
 
![[Pasted image 20220227000354.png|400|400]]
If a value is missing we usually skip it (right corresponds to yes)
- Because none of the parameters 100% predict the outcome they are called **impure**, we need to measure impurity to determine which root node is best 
- A popular method is using **Geni impurity**, after using this method the next layer of the tree is:
![[Pasted image 20220227002020.png|450|450]]
- Iterating this process, at a certain point it may not be worth further dividing the tree and instead making a node a leaf node:
![[Pasted image 20220227002259.png|450|450]]
- Final tree
![[Pasted image 20220227002353.png|450|450]]
# Gini impurity
- A method for measuring the likelihood of incorrect classification 
![[Pasted image 20220227001139.png|500|500]]
![[Pasted image 20220227001245.png|400|400]]
- Since there are different numbers of people for no and yes we calculate overall Gini impurity by doing the following
![[Pasted image 20220227001358.png|400|400]]
- Gene impurity for each parameter
![[Pasted image 20220227001527.png|400|400]]
- Conclusion: blood impurity is the best predictor and will be used as the root of the tree
![[Pasted image 20220227001736.png|400|400]]
## Gini value with numerical data
![[Pasted image 20220227003149.png|450|450]]

## Gini value with ranking data
- Example with joke rank
![[Pasted image 20220227003339.png|450|450]]

## Gini value with multiple choice data
- If there are multiple choices we calculate the impurity score for each one **AND** each possible combination
![[Pasted image 20220227003442.png|450|450]]

# Filling out missing decision tree data
- There are alternative approaches to filling out missing data to just removing columns:
![[Pasted image 20220227004601.png|450|450]]
for instance is yes occurs the most, fill out with yes

- Another approach is to look at other parameters for reference, eg: 
![[Pasted image 20220227004702.png|300|400]]
![[Pasted image 20220227004827.png|450|450]]
- We can even use linear regression for parameter prediction:
![[Pasted image 20220227004948.png|450|450]]