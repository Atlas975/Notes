
# Log(odds ratio)
- An odds represent ratios of event likelihood, but the odd ratio is a ratio of odds
- Example:
>![[Pasted image 20220315212946.png|300|300]]
if the denominator is larger than the numerator the ratio will range from 0-1, if not it will rnage from 1-inf
- Taking the log of the odds will make this symmetrical
>![[Pasted image 20220315213145.png]]
- Example usage:
>![[Pasted image 20220315213244.png]]
log(6.88)=1.93
- The log odds just like Rsq indicate a relationship, in this instance larger values indicate a good predictor
- 3 main methods of testing statistical significance:
1. Fishers exact test
2. Chi-squared test
3. The ward test
>![[Pasted image 20220315215502.png]]
## Fischer's exact test
- Work out the p value of each event occuring in its respective category

>![[Pasted image 20220315214143.png]]
p value = 0.00001

## Chi-squared test
- This involves calculating expected value

>![[Pasted image 20220315214308.png|400|400]]
![[Pasted image 20220315214438.png|400|400]]
![[Pasted image 20220315214526.png|400|400]]

## Wald test
>![[Pasted image 20220315214712.png|400|400]]
>![[Pasted image 20220315215000.png|400|400]]

- Now placing the log ratio on the curve

>![[Pasted image 20220315215103.png|400|400]]
>![[Pasted image 20220315215159.png|400|400]]
>![[Pasted image 20220315215226.png|400|400]]