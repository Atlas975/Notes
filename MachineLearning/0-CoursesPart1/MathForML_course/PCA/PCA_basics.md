# Dimensionality reduction
- Example image with 4 dimensions:
![[Pasted image 20220102142027.png|450|450]]
- The grey channel cna be represented by the other 3 channels, making the 4th dimension unnecessary. Allowing for a more compact version of the data.

# Mean
- Used to find average image vector
![[Pasted image 20220102142655.png|450|450]]
![[Pasted image 20220102142755.png|450|450]]
- Example: adding a value to dataset of value x*
![[Pasted image 20220102143324.png|450|450]]

# Variance (1D)
- Describes the concentration of data, for instance these two datasets with the same mean but different variance:
![[Pasted image 20220102225406.png|450|450]]
- Calculating variance
![[Pasted image 20220102225745.png|450|450]]
- Note thta the variance can't be negative because of squaring in the formula
- The square root of the variance is the standard deviation 

# Co-variance (1D+)
- Calculates variance with variables in relation to each other
- Helps identify patterns like proportionality 
![[Pasted image 20220102233633.png|450|450]]
- if cov[x,y] is positive then y increases with x
- if cov[y,x] is positive then x increases with y
- note cov[y,x]=cov[x,y]
- if either is 0 this means they aren't correlated at all	
- Formula:
![[Pasted image 20220102234039.png|450|450]]
- Implemented:
![[Pasted image 20220102235027.png|450|450]]