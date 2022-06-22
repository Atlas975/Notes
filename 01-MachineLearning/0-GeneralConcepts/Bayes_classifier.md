# Bayes classifier
- A classifier that assigns each obervation to the most likely case, makes use of concepts from [[Naive_bayes]]
- Example classes:
>![[Pasted image 20220224112404.png]]
- Corresponds to predicting class one if  Pr(Y = 1|X = x0 ) > 0.5  and class two otherwise
- Predict a class example on small datasets
>![[Pasted image 20220224112019.png]]
- [[Naive_bayes]] approach this assumes the probabilities of being in each class are independent and we dont need a specfic combination of the two:
>![[Pasted image 20220224113548.png]]

# Dealing with continuous features
- Approach 1: divide into multiple classes
>![[Pasted image 20220224113708.png]]
- Approach 2: use a probability distribution
>![[Pasted image 20220224113805.png]]