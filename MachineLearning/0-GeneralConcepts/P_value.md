e# P-value
- The P value is the measure of probability that an observed difference could have occurred through random chance. The greater the P value the greater the statistical significance of an observed value.
- **A p-value less than 0.05 (typically ≤ 0.05) is statistically significant** getting a small p value when there is no difference is known as a false positive. This threshold can vary depending on needs
- Example hypothesis:
![[Pasted image 20220225115337.png|450|450]]
## Calculating P-value
- Coin flip example:
- The p value is composed of 3 parts

>*getting unique outcomes are grouped together since a specific result on one flip wont influence another*![[Pasted image 20220225115753.png|450|450]]
![[Pasted image 20220225120156.png|450|450]]
![[Pasted image 20220225120217.png|450|450]]

- This results in a p value of **0.5**, typically we only reject the null hypothesis is less than **0.05**. In this case we **fail** to reject the null hypothesis.
- This means that the data getting two heads in a row wasen't enough to convince us our coin is special
- Knowing that other outcomes are equally rare makes the hypothesis less special, the same goes for outcomes that are rarer thats why these values are added to the p value since the existence of rarer outcomes makes the hypothesis less special
- P value for 4 heads and one tail example:
![[Pasted image 20220225121134.png|450|450]]
![[Pasted image 20220225121209.png|450|450]]
![[Pasted image 20220225121218.png|450|450]]

# P-values for continuous data
- In practice when we calculate probabilities for something continous like height we normally use a statistical distribution eg [[Gaussian_distribution]]
![[Pasted image 20220225122631.png|450|450]]
![[Pasted image 20220225122643.png|450|450]]
- In this context the hypothesis asks if a measurement is far enough from the mean that we can reject the idea that it came from it, suggesting a distribution like the green one can explain it better
- 142cm example continued:
![[Pasted image 20220225122931.png|450|450]]
![[Pasted image 20220225123006.png|450|450]]
- Not enough evidence to reject the null hypothesis
- 141cm example:
![[Pasted image 20220225123126.png|450|450]]
suggests that a different distributions might fit better

- Values found closer to the center to the mean are much less special
![[Pasted image 20220225123351.png|450|450]]
![[Pasted image 20220225123400.png|450|450]]
![[Pasted image 20220225123433.png|450|450]]
![[Pasted image 20220225123502.png|450|450]]