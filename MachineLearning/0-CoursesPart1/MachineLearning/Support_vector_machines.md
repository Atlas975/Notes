# Support vector machines
- Similar base to logistic regression, involves finding a plane that can divide datasets
- [[MachineLearning/0-CoursesPart1/MachineLearning/Logistic_regression#Alternative logistic regression view]]
![[Pasted image 20220205093334.png|450|450]]
- C corresponds to giving B a larger weight
## SVM hypothesis
![[Pasted image 20220205095407.png|450|450]]

## SVM parameters
![[Pasted image 20220205160109.png|450|450]]
![[Pasted image 20220205160148.png|450|450]]
# SVM decision boundary
![[Pasted image 20220205115326.png|450|450]]
## Linearly separable case
- Many boundaries exist to separate data, an ideal SVM will choose a line like the black boundary that has the largest minimum distance from data points (margin)
![[Pasted image 20220205115503.png|450|450]]
- Margin drawn out in blue lines
![[Pasted image 20220205115830.png|450|450]]

# Using an SVM
- Its important to implement feature scaling before as large parameters like the size in feet can hold large influence on the prediction.
![[Pasted image 20220205161028.png|450|450]]
# Math behind margin classifiers
[[Vectors#Vector projection]]
![[Pasted image 20220205123055.png|450|450]]
![[Pasted image 20220205151410.png|450|450]]
![[Pasted image 20220205130023.png|450|450]]
