# Steps of PCA algorithm
- Example:
![[Pasted image 20220106201102.png|450|450]]
- goal is to project on a single dimensional subspace
1. Subtract the mean
>this centers the data ![[Pasted image 20220106201214.png|450|450]]
2. Divide by standard deviation
>this gets rid of units ![[Pasted image 20220106201444.png|450|450]]
3. Divide by eigenvalues and eigenvectors
![[Pasted image 20220106201548.png|450|450]]
4. Project on principal subspace
- Apply the following on every dimension
![[Pasted image 20220106201758.png|450|450]]
![[Pasted image 20220106201814.png|450|450]]