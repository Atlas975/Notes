# Machine learning data usage
- Data is typically divided into 3 distinct sets while training a model to improve Hyperparameters, the test set is whats run through the model, the validation set helps validate the model during training to help adjust parameters while running. The test set is used to test the model after its been trained. It might sometimes be ok to not include a test set.
- Its important to make sure data comes from the same distributions in each set, example of varying quality of data:
![[Pasted image 20220306174807.png|450|450]]

# Cross validation
- Allows for different machine learning methods to be compared with one another. Two things need to be done
1. Estimate the parameters for the machine learning method
2. Evaluate how well the method works with the test set
- Its a bad idea to use the same training and test data as the model needs to be tested on data it hasen't seen before
- The data needs to be split into segments eg 75/25
![[Pasted image 20220218132948.png|450|450]]
- Theres no way of knowing which block is best
- Cross validation shuffles these blocks in training
![[Pasted image 20220218133123.png|450|450]]
![[Pasted image 20220218133136.png|450|450]]
- The total results can then be added up and compared after going through numerous data combinations
![[Pasted image 20220218133227.png|450|450]]
![[Pasted image 20220218133322.png|450|450]]