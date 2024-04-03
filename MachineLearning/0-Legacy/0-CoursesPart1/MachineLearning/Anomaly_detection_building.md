# Building anomaly detection system
- Usually the training set consists of non anomalous data, but it's fine to have a few anomalies present.
![[Pasted image 20220212203949.png|450|450]]
## Distribution of training data
![[Pasted image 20220212204136.png|450|450]]
## Evaluation metrics
![[Pasted image 20220212210107.png|450|450]]

# Choosing features
- Creating new features can be useful, for example suspecting a CPU load being higher than it needs to be when monitoring computers. If this is correlated with another feature, you can check if the ratio is an anomaly to the rest of the data. This can be done in many ways eg:
![[Pasted image 20220213005821.png|450|450]]

## Dealing with non Gaussian features
-Many things can be done to transform the data to resemble Gaussian distribution, for instance taking the log:
![[Pasted image 20220212211418.png|450|450]]

-Example in MATLAB, adjust until ideal:
![[Pasted image 20220212211529.png|450|450]]

- When a point is in an awkward part of a normal curve (on the brink of anomaly), a good idea might be to check for other features and see if that example is an anomaly in any other case
![[Pasted image 20220213005416.png|450|450]]

# Applying multivariate Gaussian distribution
- Finding estimated mean and sigma
![[Pasted image 20220213103129.png|450|450]]
lines next to sigma symbol mean [[Matrices#Determinant]]
- This is identical to the probability distribution formula assuming the following constraint
![[Pasted image 20220213103705.png|450|450]]
diagonal matrix with zeros everywhere else
## Applying normal distribution vs multivariate normal distribution
- Multivariate distribution does not require the creation of unique parameters
![[Pasted image 20220213104302.png|450|450]]