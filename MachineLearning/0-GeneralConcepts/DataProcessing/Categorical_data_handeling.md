# Handling categorical 
## Dropping categorical Data 
- This involves simply dropping columns with categorical data, however this only works if the categorical data isn't useful

## Ordinal encoding
- Assumes ordering of categories
- Useful for giving different values distinct weights
![[Pasted image 20220405174652.png|800|600]]


## One-hot encoding 
- No assumed ordering of categories (nominal values)
- Does not perform well when a large amount of possible categories are present.
- The boolean nature of this encoding scheme also gives it a high memory requirement 

![[Pasted image 20231022154301.png|550|550]]