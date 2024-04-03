# Map reduction
- Involves splitting learning through multiple computers through batch gradient descent
![[Pasted image 20220213190020.png|450|450]]
- This can be done by parallelizing cores on a single computer as well, this also removes the network latency factor. Note vectorization effectively does this for you along with many linear algebra libraries 
![[Pasted image 20220213190424.png|450|450]]