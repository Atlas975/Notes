# Linear regression
- A model that assumes a linear relationship between a variable x and y
$$Y_{i} = β_{0} + β_{1}\cdot X_{i}+\epsilon_{i}$$
$$$$
- Other things to consider include
1. Strength of relationship
2. How large is the association of x and y for an increase in x
3. How accurate are the models predictions
4. Is the relationship truly linear
5. Synergy [[MachineLearning/0-Legacy/0-CoursesPart2/StatisticalLearning_book/Linear_regression#Interaction effect]]
![[Pasted image 20220226154902.png|450|450]]

## Interaction effect
- Where a specific combination of two variables has a larger impact than individually tuning a variable on its own. Also known as synergy effect.

# Sum of squared residuals
![[Pasted image 20220226154617.png|450|450]]
![[Pasted image 20220226154716.png|450|450]]

# Accuracy of estimates 
$$Y = \beta0 + β1 X + ε.$$
- We typically assume the error term is independent of X as in it does not change as it increases
- Here the blue line represents the relationship found using a subset sample of the data
![[Pasted image 20220226155514.png|450|450]]

# Calculating error of sample vs real mean
![[Pasted image 20220226160131.png|450|450]]

# Calculating error in parameter estimation
![[Pasted image 20220226160418.png|450|450]]
![[Pasted image 20220226160427.png|450|450]]
- Standard errors can be used to predict confidence intervals
- Example of 95% confidence:
![[Pasted image 20220226160533.png|450|450]]

# Multiple linear regression
- Using multiple linear regression can lead to new insights as an example:
![[Pasted image 20220311214400.png|450|450]]
![[Pasted image 20220311214426.png|450|450]]
- this implies markets with high newspaper advertising tend to also have high radio advertising, the multiple regression table implies newspapers where just getting credit for what radio sales are contributing 
- Another example is the correlation between sharks attacks and ice cream sales for data collected at a beach
- Therefore the following should be asked:
![[Pasted image 20220311214859.png|450|450]] 

# F statistic
- The hypothesis test is computed using the F statistic:

$$TSS = sum((y i −  ̄y)^2)$$
$$RSS =sum((y i − ˆy i )^2)$$
> p = number of predictors
![[Pasted image 20220311215625.png|450|450]]
![[Pasted image 20220311215812.png|450|450]]

# Leverage statistic
![[Pasted image 20220312180325.png|450|450]]zawwaaa