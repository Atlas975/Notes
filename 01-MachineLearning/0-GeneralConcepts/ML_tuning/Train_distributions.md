# Train distributions
- When collecting data from primarily one source, its possible that shuffling before a train/dev split isnt ideal as the smaller source is less likely to end up in a smaller split 

>![[Pasted image 20220421201228.png]]

- The train and dev set should be built around whats being targeted if for instance, classifying mobile app images is more important, it should be used for the dev and test set

>![[Pasted image 20220421201448.png]]
other example:
>![[Pasted image 20220421201708.png]]

# Bias / Variance with mismatched data distributions 
- In order to figure out the extent at which the difference in distributions contributes to the error rate

>![[Pasted image 20220421221826.png]]
>![[Pasted image 20220421222221.png]]

# Addressing data mismatch
- There are ways to address data mismatch other than just collecting similar training data eg more noisy input in sound recognition. One option is to artificially make data more noisy 

>![[Pasted image 20220421223633.png]]