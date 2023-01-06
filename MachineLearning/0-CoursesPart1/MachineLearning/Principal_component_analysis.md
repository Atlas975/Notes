# PCA goals
- Find a lower dimensional surface such as a straight line on a 2D plane with the lowest projection error, note this is the absolute value, example of ideal line/plane:
>![[Pasted image 20220212091305.png]]
- Example of non-ideal line (magenta):
>![[Pasted image 20220212091118.png]]
## PCA vs linear regression
- PCA is not the same, in linear regression (left), the squared magnitude of the blue lines is taken. The blue lines are only drawn vertically
- In PCA (right), the shortest orthogonal distance is taken (at an angle), giving a different effect. PCA also has no y to predict 

# Choosing principal components
>![[Pasted image 20220212131449.png]]
a common way to choose K is to the take the average squared projection error and divide it by the total variation in the data
- Ideally you want the smallest value of K that that has at least 99% variance
>![[Pasted image 20220212131927.png]]

# PCA algorithm
1. Perform mean normalization
>![[Pasted image 20220212095948.png]]
2. Compute eigenvectors of matrix
>![[Pasted image 20220212101636.png]]
- MATLAB summary
>![[Pasted image 20220212102100.png]]
# Applying PCA
- Example with supervised learning image recognition, 100x100 pixels gives 1000 dimensions. This can be reduced by doing the following:
>![[Pasted image 20220212132412.png]]
# Reversing PCA
>![[Pasted image 20220212131218.png]]