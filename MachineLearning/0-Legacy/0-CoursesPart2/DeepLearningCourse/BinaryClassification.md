# Binary classification
- [[Logistic_regression_legacy]] can be used to perform binary classification on data
## Image classification example
- A computer represents a image by 3 RGB matrices of the same size of the image
- Thus needs to be unrolled into a feature vector
![[Pasted image 20220224173141.png|450|450]]
## Logistic regression formula
![[Pasted image 20220224175001.png|450|450]]
the y^2 loss function isnt used as it can fail to converge due to multiple local minima


- The loss function computes the error for a single training example; the cost function is the average of the loss functions of the entire training set
