# Batch normalization 
- A method to make [[Neural_networks(depreciated)]]  both faster and more stable through the process of re-scaling, giving a mean of zero and a SDV of 1
- In practice this is usually done with mini-batches of the training set

>![[Pasted image 20220416223811.png]]

-Constants added in mini-batch descent are cancelled out, since during the normalization process the mean is subtracted
>![[Pasted image 20220416224226.png]]

- We dont always want hidden units to have a mean of 0 and variance of 1, instead an alternative formula is often used for hidden layers using parameters gamma and beta which are learnable 

>![[Pasted image 20220417004826.png]]
note gamme and beta allows Z tilda to be set to whatever is needed, acting as an inverse to the normalization equation 
>![[Pasted image 20220417005135.png]]

## Batch normalization in work
- The main problem batch normalization aims to solve is dealing with datasets where the distribution changes also known as a covariant shift 

>![[Pasted image 20220416233733.png]]

- This effectively limits the amount that updating parameters in early layers will effect the distribution of values in later layers

>![[Pasted image 20220416234125.png]]

## Batch normalization regularization effect 
- Batch norm also has the slight benefit of providing a regularization effect to data

>![[Pasted image 20220416234411.png]]

## Batch normalization at test time
- During training time the mean and SDV are computed over the entire mini-batch of training examples. However in test time this is using a single example at a time typically using an [[Exponentially_weighted_averages]]  to get a rough estimate
>![[Pasted image 20220416235458.png]]