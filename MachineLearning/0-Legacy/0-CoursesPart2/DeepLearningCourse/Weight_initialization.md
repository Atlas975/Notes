# Weight initialization
- It's important to note that if weights are slightly too large in a deep neural network, the gradient can explode to an exponential size.
![[Pasted image 20220314100614.png|450|450]]
- One method to help deal with this is to set the variance of initial weights to be 1/n where n is the number of input features, for RelU 2/n works better
![[Pasted image 20220314101213.png|450|450]]