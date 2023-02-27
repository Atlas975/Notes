# Vertical Edge detection
- Edge detection is done by considering an image as a matrix and applying a filter matrix 

![[Pasted image 20220424172330.png|450|450]]

- This is repeated with the appropriate movement

![[Pasted image 20220424172445.png|450|450]]
![[Pasted image 20220424172903.png|450|450]]

- This helps identify an edge by picking up on regions where there are light regions on the left and dark regions on the right 

![[Pasted image 20220424173510.png|450|450]]

# Horizontal edge detection 
- Chaining multiple filters together helps pick up on different kinds of patterns

![[Pasted image 20220424173906.png|450|450]]

# Alternative filters 
- [[Backpropagation]] can be used to find ideal filters for detecting different edges, alternative filters already exist as well with different strengths and weaknesses

![[Pasted image 20220424174416.png|450|450]]
each value in the filter is treated as a trainable parameter

$$\begin{pmatrix}\end{pmatrix}$$