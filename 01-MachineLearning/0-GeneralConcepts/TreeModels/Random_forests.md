# Random forest method
[[Decision_Trees]]  [[Regression_trees]]
- Decision trees are great for the data used to train them but lack flexibility in classifying new samples. Random forests can improve flexibility (reduce variance)
- Building a random forest model:
1. Create a bootstrapped dataset
>![[Pasted image 20220227172425.png]]
>![[Pasted image 20220227172812.png]]
- The entries that dont make it into the dataset are called the **out of bag dataset**
2. Iterate, selecting a new subset of variables each time
>![[Pasted image 20220227172603.png]]
this results in a wide variety of trees
3. Run this through every tree, selecting the most common response
>![[Pasted image 20220227172940.png]]
>![[Pasted image 20220227172954.png]]
>![[Pasted image 20220227173027.png]]

## Dealing with out of bag samples
- Since out bag datasets are not used to create a tree, we can run it through another tree
>![[Pasted image 20220227173420.png]]
- Running it through the other trees, the labels with the most samples wins
>![[Pasted image 20220227173525.png]]
- Out of bag samples are useuful as they help us estimate how accurate our random forest actually is.	
- We can even change the number of samples and use these entries as out of bag samples

# Filling in data 
- Using the median / most frequently occuring data
>![[Pasted image 20220227174222.png|300|300]]
- Now we need to refine these guesses
1. Build a random forest
>![[Pasted image 20220227174952.png|300|300]]
2. Run data down the trees
>![[Pasted image 20220227175117.png|300|300]]
>![[Pasted image 20220227175146.png]]
3. We keep track of similarities in a matrix which has a row and column for each sample
>![[Pasted image 20220227175322.png|300|300]]
>![[Pasted image 20220227175358.png|300|300]]
>![[Pasted image 20220227175448.png|300|300]]
>![[Pasted image 20220227175520.png|300|300]]
>![[Pasted image 20220227175533.png]]

## Calculating proximities
>![[Pasted image 20220227175740.png|400|400]]
>![[Pasted image 20220227175754.png|200|200]]
>![[Pasted image 20220227175818.png|400|400]]
- We then divide that by the sum of the proximities for sample 4
>![[Pasted image 20220227180028.png]]
>![[Pasted image 20220227180058.png|200|200]]
- Calculating proximity to no
>![[Pasted image 20220227180202.png]]
>![[Pasted image 20220227180420.png|200|200]]
- Since NO has a higher weighted frequency itll be used
- Now refining weight data
>![[Pasted image 20220227180745.png]]
>![[Pasted image 20220227180822.png]]