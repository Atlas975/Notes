# Naive Bayes
[[MachineLearning/0-Legacy/0-GeneralConcepts/Bayes_theorem]]
- Example with spam classification 
- Calculating the probability of each word occurring given that it is a normal (non spam) message, 17 words in the non-spam training set
![[Pasted image 20220224075153.png|450|450]] 
![[Pasted image 20220224075307.png|450|450]]
![[Pasted image 20220224075447.png|450|450]]
since these probabilities are discrete and not continuous they may also be called **Likelihoods**
## Classification using Naive Bayes
- Using the training data, the probability of a message being spam(1/3) and not spam(2/3) can be assumed since 8 of the 12 training set emails are not spam in this example
- Initial guesses are called the **prior probability**
- Example, calculating "Dear friend"
![[Pasted image 20220224080121.png|450|450]]
![[Pasted image 20220224080158.png|450|450]]
![[Pasted image 20220224080221.png|450|450]]
- The greater score determines what the email is classified as
![[Pasted image 20220224080303.png|450|450]]
![[Pasted image 20220224080317.png|450|450]]
- Example with "Lunch Money Money Money Money"
- Non spam will get a score of zero in this example
![[Pasted image 20220224080516.png|450|450]]
- This is not ideal as the word lunch causes a message to automatically be flagged as non spam
- Solving the problem, by adding a black box, this ensures we never multiply by zero
![[Pasted image 20220224080705.png|450|450]]
**NOTE** this does not change initial guess that message is spam / not-spam
![[Pasted image 20220224080851.png|450|450]]
- Effects of adding a black box, we still get a lower normal message score
![[Pasted image 20220224080935.png|450|450]]
![[Pasted image 20220224080953.png|450|450]]

## Disadvantage of Naive Bayes being Naive
- It does not account for grammar or word order, however all combinations are impossible to account for, naive bayes still performs well.
![[Pasted image 20220224081201.png|450|450]]
- This means Naive Bayes has high bias and low variance 