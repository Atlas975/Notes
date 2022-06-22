# Dropout regularization
- Involves randomly eliminating nodes in the neural network to prevent a model from overfitting 
>![[Pasted image 20220311211451.png]]
- Implementation:
>![[Pasted image 20220311211826.png]]
- Note this isnt used during test time

## Dropout intuition
- Part of why dropout works so well is that encourages the network to not put too much weight on a single neuron. Encouraging spreading out of weight strength and reducing the squared norm.
- We can also use different drop probabilities depending on layers in which we are more concerned about over fitting
>![[Pasted image 20220311212506.png]]