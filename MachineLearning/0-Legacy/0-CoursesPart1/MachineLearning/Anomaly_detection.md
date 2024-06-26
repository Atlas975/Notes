# Anomaly detection
- Involves spotting outlier data
- Example: checking if a new aircraft engine meets usual standards
![[Pasted image 20220212195411.png|450|450]]
![[Pasted image 20220212195659.png|450|450]]
rings represent probability of being an anomaly
## Anomaly detection algorithm
![[Pasted image 20220212202845.png|450|450]]
## Graphical anomaly detection
- The two bell curves represent the probability distribution of each parameter, the plot represents the combination of both
![[Pasted image 20220212203435.png|450|450]]
- In this case, all point on a high surface tend to be **non anomalous**

# Anomaly detection weaknesses
- A standard anomaly detection algorithm will only flag points as an anomaly based on distance alone, this does not work when valid data is centered in a different shape eg a ellipses
![[Pasted image 20220213101151.png|450|450]]
- This can be solved with [[MachineLearning/0-Legacy/0-CoursesPart1/MachineLearning/Gaussian_distribution#Multivariate Gaussian distribution]] 

[[Anomaly_detection_building]]