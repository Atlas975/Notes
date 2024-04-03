# Gradient checking
- Ensures backpropagation works properly
![[Pasted image 20220128105507.png|450|450]]
![[Pasted image 20220128105938.png|450|450]]
![[Pasted image 20220128111715.png|450|450]]
![[Pasted image 20220128111822.png|450|450]]
- if gradapprox is roughly equal to gradient descent (Dvec) its clear that the algorithm has worked.
- Note this should be turned off when actually checking, backprop is much faster