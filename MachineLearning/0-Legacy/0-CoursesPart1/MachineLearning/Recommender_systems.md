# Recommender systems
- Recommender systems are the systems designed to make user recommendations based on a number of factors
- Movie example, an algorithm is needed to fill in missing values:
![[Pasted image 20220213123248.png|450|450]]
- X describes the weight of the movies parameters with the first value being the y intercept. Theta describes the users individual weighting of parameter preference 
![[Pasted image 20220213124129.png|450|450]]

# Formula formation
![[Pasted image 20220213124622.png|450|450]]
![[Pasted image 20220213124654.png|450|450]]
## Gradient descent for recommender systems
![[Pasted image 20220213125054.png|450|450]]

# Collaborative filtering
- User parameter vector (theta) is given, this can be used to deduce missing values and deduce the feature vector
![[Pasted image 20220213133808.png|450|450]]
- This is effectively asking what combination of theta and the feature vector results in the users rating
## Collaborative filtering optimization objective
- This formula allows for the parameter vector and feature vector to be optimized at the same time
![[Pasted image 20220213134819.png|450|450]]
- An intercept term is no longer needed in this method, this is because the algorithm is now learning all the features. If it wants a parameter equal to 1 it can choose to learn it itself. 
![[Pasted image 20220213140741.png|450|450]]
- Vectorized:
![[Pasted image 20220213142518.png|450|450]]
## Performing predictions
![[Pasted image 20220213142805.png|450|450]]

# Mean normalization in recommender systems
- If a user has no ratings, an option is to perform mean normalization and add the mean to that user
![[Pasted image 20220213144544.png|450|450]]