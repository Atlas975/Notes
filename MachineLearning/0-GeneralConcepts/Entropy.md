# Entropy

- A method of quantifying the amount of surprise from an outcome
- Equation for entropy:
![[Pasted image 20220227122636.png|450|450]]
- In a coin flip example, if an extremely bias coin always landed on 1, we would want the surprise to be 0, this can be calculated using entropy:
	![[Pasted image 20220227121030.png|450|450]]
	![[Pasted image 20220227121049.png|450|450]]
	![[Pasted image 20220227121107.png|450|450]]
	since this is based on two outputs, its customary to use log base of 2
	
- Example with less biased coin
![[Pasted image 20220227121305.png|450|450]]
- Example with multiple flips
![[Pasted image 20220227121454.png|450|450]]
just the sum of surprises for each individual toss

## Calculating total entropy given surprise
- Data can be summarized in a table, example of 100 coin flips
![[Pasted image 20220227121726.png|450|450]]
= 46.7
- This number represents overall surprise, to get entropy, do the following:
![[Pasted image 20220227121913.png|450|450]]
this represents the expected surprise every time we flip a coin 
- This can also be calculated factoring out number of coin tosses
![[Pasted image 20220227122102.png|450|450]]
- Entropy is known as the expected value of surprise	
- Notation summary:
![[Pasted image 20220227122158.png|450|450]]
- More entropy examples
![[Pasted image 20220227122906.png|450|450]]
entropy is highest when the probability of outcomes is the same
![[Pasted image 20220227122927.png|450|450]]
# Entropy equation derive
![[Pasted image 20220227122251.png|450|450]]
![[Pasted image 20220227122503.png|450|450]]
- Entropy curve
![[Pasted image 20220227123202.png|450|450]]