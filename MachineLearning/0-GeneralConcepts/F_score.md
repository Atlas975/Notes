# Error metrics / F-score
## Skewed classes
![[Pasted image 20220204222626.png|450|450]]
- A 1% error rate is a lot less impressive when there are only 0.5% cases.
- It might be give higher precision to always assume true negative, but that isn't actually useful, that's where precision / recall comes in.
## Precision / recall
![[Pasted image 20220204223124.png|450|450]]

# Trading off precision / recall
![[Pasted image 20220204224511.png|450|450]]
- By increasing false negatives, precision is reduced. However, people who actually have cancer now have a higher change to test for true positives (increased recall). There are trade offs to both approaches.

# Method of choosing precision / recall (F score)
![[Pasted image 20220204225432.png|450|450]]
- Many methods exist, average isn't considered preferable as it results in algorithms such as 3 where making no prediction results in the best result. 