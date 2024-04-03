# Support vector classifiers  
- A supervised learning algorithm that can analyze data for regression/classification or even outlier detection.
- Basic concepts:
- Classifying data, creating a threshold that can be used to place further data
![[Pasted image 20220227070507.png|450|450]]
- Problem: data lies on threshold itself:
![[Pasted image 20220227070601.png|450|450]]
![[Pasted image 20220227070614.png|450|450]]
- Possible solution:
![[Pasted image 20220227070656.png|450|450]]
![[Pasted image 20220227070711.png|450|450]]
- The shortest distance between observations and the threshold is called the margin
- The greatest distance between any data and the threshold is called the maximal marginal classifiers 
- Limitations:
![[Pasted image 20220227071013.png|450|450]]
- Choosing a threshold that allows misclassifications is an example of the bias/variance tradeoff
![[Pasted image 20220227071211.png|450|450]]
- Cross validation is used to determine the optimal amount of misclassifications that'll be allowed, a soft margin classifier is an example of a support vector classifier
![[Pasted image 20220227071426.png|450|450]]
- Example of 2 dimensional support vector classifier 
![[Pasted image 20220227071511.png|450|450]] 
- The line (or surface in 3d examples or more) is known as the hyperplane

# Support vector machines
- When a single margin does not work, we instead need to use a support vector machine
![[Pasted image 20220227072037.png|450|450]]
- Creating an SVM classifier steps:
![[Pasted image 20220227072306.png|400|400]]
![[Pasted image 20220227072324.png|400|400]]
![[Pasted image 20220227072353.png|400|400]]
in this case the y axis uses dosage squared
- In order to decide how to transform our data, SVMs used kernal functions to systematically place data in higher dimensions, this was an example of a polynomial classifier, d corresponds to dimensions.
- A good value for d can be found through [[ML_Data_usage]]
- Note kernals dont actually transform the data, they only make calculations as if they are in a higher dimension
- Another possible kernal is the **raidal kernal**, this gives weight to certain points based on distance, acting like a weighted nearest neighbour model. Uses infinite dimensions
![[Pasted image 20220227073028.png|450|450]]
![[Pasted image 20220227073042.png|450|450]]
## Polynomial kernal
- The formula for a polynomial kernal looks like the following
![[Pasted image 20220227073614.png|450|450]]
a and b refer to two different observations in the data set
r refers to the coefficient of the polynomial kernal
d is the set degree of the polynomial kernal

- Example usage
![[Pasted image 20220227073818.png|450|450]]
the bracket terms refer to the x,y and z coordinates, but z can be ignored in this case since it is constant

## Radial kernal
- The formula for a radial kernal looks like the following
![[Pasted image 20220227074443.png|450|450]]
a and b refer to two different observations in the data set
the distance between the measurements is then squared giving the squared distance between observations
gamma (determined by cross-validation), scales the squared distances influence
- Example of gamma's influence
![[Pasted image 20220227074706.png|450|450]]
![[Pasted image 20220227074728.png|450|450]]

![[Pasted image 20220227074913.png|450|450]]
![[Pasted image 20220227074953.png|400|400]]
![[Pasted image 20220227075005.png|400|400]]
- In this case, setting r=0 is pointless as the dot product leaves data in original dimensions no matter what 
- How the raidial kernal calculates dot product coordinates for an infinite number of dimensions:
1. Multiply out the square
![[Pasted image 20220227080153.png|400|400]]
![[Pasted image 20220227080221.png|400|400]]
2. Creating taylor series expansion of last term
![[Pasted image 20220227080319.png|400|400]]
![[Pasted image 20220227080431.png|400|400]]
![[Pasted image 20220227080521.png|400|400]]
![[Pasted image 20220227080535.png|400|400]]
![[Pasted image 20220227080644.png|400|400]]
![[Pasted image 20220227080813.png|400|400]]
3. The dot product for e^ab can then by found to be this:
![[Pasted image 20220227080946.png|450|450]]
![[Pasted image 20220227081009.png|450|450]]
4. Plugging in the dot product
![[Pasted image 20220227081040.png|450|450]]
5. The radial kernal is now equal to:
![[Pasted image 20220227081146.png|450|450]]
![[Pasted image 20220227081227.png|450|450]]
![[Pasted image 20220227081250.png|450|450]]
![[Pasted image 20220227081319.png|450|450]]