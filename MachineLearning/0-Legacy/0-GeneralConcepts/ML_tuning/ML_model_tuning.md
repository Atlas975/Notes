# Tuning machine learning models 
![[Pasted image 20220420193711.png|450|450]]

# Evaluation metrics
[[F_score]]
![[Pasted image 20220420194056.png|450|450]]
- Use in conjunction with dev set to help development process

# Train / Dev / Test distribution
- Making sure a train and dev set dont use different distributions is essential in fitting, the below example would be an incorrect approach
![[Pasted image 20220420210653.png|450|450]]

## Train / Dev / Test split 
- The size of a test set should aim to just be large enough to give high confidence in the performance of a system, when given a large amount of data this may not even be necessary
- Also note that when a large amount of data is present, the train set can tune itself well enough that the other sets can afford to be small
![[Pasted image 20220420211401.png|450|450]]

## Changing evaluation metric
- There may be cases where a new evaluation metric needs to be introduced or modified, for instance a model may be highly accurate at the cost of also allowing some illegal content through, in this scenario new metrics need to be put in place to satisfy preferences 

![[Pasted image 20220420211933.png|450|450]]

- One way of increasing the error value for certain mislabeling is by adding a weight term

![[Pasted image 20220420212354.png|450|450]]

- Worry separately about making this metric effective 

![[Pasted image 20220420213437.png|450|450]]