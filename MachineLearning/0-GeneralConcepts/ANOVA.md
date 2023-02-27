# ANOVA
[[T_test]]
- Start by fitting a least squares line to the sets of data (the mean)
![[Pasted image 20220312091729.png|400|400]]
![[Pasted image 20220312091756.png|400|400]]
![[Pasted image 20220312091840.png|400|400]]
- After finding the [[ANOVA#Design matrix]] and [[ANOVA#Calculating F and P value]]
- The equation can be summarized as:
![[Pasted image 20220312092627.png|450|450]]
in the t test for the example
p-mean= overall mean gene expression
p-fit= number of parameters in t-test data (2)
- Now on ANOVA
![[Pasted image 20220312093010.png|450|450]]

## ANOVA test
>1.overall mean
![[Pasted image 20220312093030.png|400|400]]

>2. all 5 sum of square residuals for each fitted line
![[Pasted image 20220312093145.png|400|400]]
![[Pasted image 20220312093418.png|200|200]]



## Design matrix
- The 1s and 0s act as control switches for the two means
![[Pasted image 20220312091921.png|400|300]]
- Can be summarized as a design matrix
![[Pasted image 20220312092033.png|450|450]]

## Calculating F and P value
![[Pasted image 20220312092339.png|400|400]]