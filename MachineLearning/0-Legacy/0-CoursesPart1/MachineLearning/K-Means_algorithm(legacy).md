# K-Means algorithm
- Steps for implementation
	1. Randomly assign two centroids
	![[Pasted image 20220208231625.png|450|450]]
	2. The algorithm than associates each point to a centroid depending on which one the data is closer to
	![[Pasted image 20220208231720.png|450|450]]
	3. Move the centroids to the mean of each dataset
	![[Pasted image 20220208231815.png|450|450]]
	4. Reclassify based on whats closer
	![[Pasted image 20220208231928.png|450|450]]
	5. Reiterate steps 3-4 until convergence
	![[Pasted image 20220208232155.png|450|450]]
- Characteristics of K-means
1. K number of clusters
2. unlabeled training set {x1,x2,x3 .... xn}
## Rough algorithm implementation
![[Pasted image 20220208233816.png|450|450]]
# Example of non separate K-means use
![[Pasted image 20220208233919.png|450|450]]

# K-means optimization objective
![[Pasted image 20220209202005.png|450|450]]
also knows as the distortion cost function≤

# Random assignment of centroids
- This is usually done by randomly picking two points and placing the centroid right on top
- This isn't guaranteed to have distinct locations
- Initialization can also result in different solutions, multiple initializations are often attempted. This usually isn't needed much for lower amounts of clusters 
![[Pasted image 20220209202625.png|450|450]] 
![[Pasted image 20220209202726.png|450|450]]
![[Pasted image 20220209202901.png|450|450]]

# Choosing number of clusters
- Elbow method, pick at turning point of the cost function
![[Pasted image 20220209203432.png|450|450]]
- Left graph is ideal but often not what results