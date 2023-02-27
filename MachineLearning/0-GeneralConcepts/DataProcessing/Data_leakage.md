# Data Leakage
- Occurs when training set contains data not found in the validation set, potentially leading to high bias with the training set with lackluster performance on the validation set. There are two main kinds of Leakage

## Target Leakage 
- When data is included that isn't available when actually making predictions, therefore its important to consider how data is used chronologically and not only if a feature is useful for predictions
- An example of this is medical data that changes frequently, this can me managed by excluding values after a certain period  
![[Pasted image 20220406151130.png|450|450]]

## Train-test contamination
- Occurs when one isn't careful in separating the training and validation data. 
- An example of this is performing imputation prior to splitting the train/test set 